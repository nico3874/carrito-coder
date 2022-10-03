import React from "react"
import ItemDetail from "../components/itemDetail"
import  {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import ItemCount from "./itemCount"
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = ()=>{
    
  const [item, setItem] = useState([]);
  const {idItem} = useParams();
 
                                                          
    
    
            
    const getItem = ()=>{
    
      const db = getFirestore();
      const itemRef = doc(db, 'products', idItem); 
      getDoc(itemRef).then((snapshot)=>{
        
        const product = {
          id: snapshot.id,
          ...snapshot.data()
        };
        setItem(product)
      })                                                   
     
    
      
        
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