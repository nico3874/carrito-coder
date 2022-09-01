
import Item from "../components/item";
import { useState, useEffect } from "react";


const ItemList = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
       setTimeout(()=>obtenerDatos(), 3000)
    },[])

  
    const obtenerDatos = async ()=>{
      try{
        const data = await fetch ("productJson.json");
        const product = await data.json();
        console.log(product.products);
        setProducts(product.products);
      } catch(e) {
            console.log("Error en datos")

      }
        
        
    }

    return(
        <div className="d-flex flex-column align-items-center">
            {products.map(item=>(
                <Item key={item.id} title={item.title} price={item.price} picture={item.picture}/>
            ))}
        </div>
    )

}

export default ItemList
