import React from "react"
import ItemDetail from "../components/itemDetail"
import  {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import ItemCount from "./itemCount"


const ItemDetailContainer = ()=>{
    
  const [item, setItem] = useState([]);
  const {idItem} = useParams();
 
                                                          
    
    
            
    const getItem = async ()=>{
      try{
        const data = await fetch ('/productJson.json');
        const product = await data.json();
        
        product.products.forEach(element => {
          +(element.id) ===+(idItem) && setItem(element) 
        });

      } catch(e) {
            console.log("Error en datos")

      }
      
        
    }

    useEffect(()=>{
      
      getItem()
    }, [idItem])
     

    return(
        <div className="d-flex flex-column align-items-center">
            <ItemDetail item={item} />
                  
        </div>
        
    )

}

export default ItemDetailContainer