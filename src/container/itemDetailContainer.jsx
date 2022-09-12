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
        console.log(product.products);
        console.log(idItem)
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
     

    return(console.log(item),
        
        <div className="d-flex flex-column align-items-center">
            <ItemDetail id={item.id} title={item.title} price={item.price} description={item.description} picture={item.picture} />
            <ItemCount initial={1} stockInit={10} product="Luces inteligentes" />      
        </div>
        
    )

}

export default ItemDetailContainer