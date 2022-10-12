
import Item from "../components/item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {collection,  getDocs, getFirestore} from "firebase/firestore"

const ItemList = () => {

    const [products, setProducts] = useState([]);
    const {categoryFilter} = useParams();

    
  
    const obtenerDatos =  ()=>{

      const db = getFirestore();
      const items = collection(db, 'products'); 
                                                          
      getDocs(items).then((snapshot)=>{
        const docs = snapshot.docs.map(doc=>({
          id:doc.id, 
          ...doc.data(),
          
        }))
        
        categoryFilter ? setProducts(docs.filter(element =>element.category === categoryFilter)) : setProducts(docs)
        
      })

      }


    useEffect(()=>{
     
      obtenerDatos()
   },[categoryFilter])

    return(
        <div className="d-flex align-items-center row">
            {products.map(item=>(
                <Item key={item.id} id={item.id} title={item.title} price={item.price} picture={item.picture}/>
            ))}
            
        </div>
    )

}

export default ItemList
