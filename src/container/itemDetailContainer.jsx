import ItemDetail from "../components/itemDetail"
import  {useState, useEffect} from "react"

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([])

    useEffect(()=>{
       setTimeout(()=>getItem(), 2000)
    },[])

  
    const getItem = async ()=>{
      try{
        const data = await fetch ("productJson.json");
        const product = await data.json();
        console.log(product.products);
        setItem(product.products[2]);
        

      } catch(e) {
            console.log("Error en datos")

      }
        
        
    }

    return(console.log(item),
        
        <div className="d-flex flex-column align-items-center">
            <ItemDetail id={item.id} title={item.title} price={item.price} description={item.description} picture={item.picture} />
        </div>
        
    )

}

export default ItemDetailContainer