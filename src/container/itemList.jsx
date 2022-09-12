
import Item from "../components/item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemList = () => {

    const [products, setProducts] = useState([]);
    const {categoryFilter} = useParams();

    
  
    const obtenerDatos = async ()=>{
      try{
        
        const data = await fetch ('/productJson.json');
        const product = await data.json();
        categoryFilter ? setProducts(product.products.filter(element =>element.category === categoryFilter)) : setProducts(product.products)
        
      } catch(e) {
            console.log("Error en datos")

      }
        
        
    }


    useEffect(()=>{
     
      obtenerDatos()
   },[categoryFilter])

    return(
        <div className="d-flex flex-column align-items-center">
            {products.map(item=>(
                <Item key={item.id} id={item.id} title={item.title} price={item.price} picture={item.picture}/>
            ))}
        </div>
    )

}

export default ItemList
