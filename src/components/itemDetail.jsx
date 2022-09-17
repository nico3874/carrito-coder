
import { useState } from "react";
import ItemCount from "../container/itemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({ id, title, price, picture, description, stockInit }) => {
    console.log(typeof(title))
    
    const [cantidad, setCantidad] = useState(1);
    const [stock, setStock] = useState(10);
    const [visible, setVisible] = useState("")
    const [btnVisible, setBtnVisible] = useState("invisible")
    
   
    const onAdd = ()=>{
        console.log(`Hay ${cantidad} productos`)
        if(cantidad>0 && cantidad <= stock){
            setVisible("invisible");
            setStock(stock-cantidad);
            setBtnVisible ("d-grid gap-2")
            
        }
    }

    const cartReset = ()=>{
        setVisible("")
        setBtnVisible("invisible")
        setCantidad(1);
        setStock(10)    
    }

    
    return (
        <div  
            className="card m-5" style={{"width": "40rem"}}>
            <img  src={picture} className="card-img-top" alt="image_product"/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text mb-4">{description}</p>
                    <h5 className="card-text">${price}</h5>
                    <h6 className="card-text">(Disponibles {stock})</h6>
                </div>
                <div className={btnVisible}>
                    <h3>Hay {cantidad} productos en tu carrito</h3>
                    <Link  to={"/cart"}><button className="btn btn-primary mb-3">Finaliza tu compra </button></Link>
                    
                    <button className="btn btn-primary" onClick={()=>cartReset()}>Vuelve a empezar </button>
                </div>
                <ItemCount product="Luces inteligentes" onAdd={onAdd} setCantidad={setCantidad} cantidad = {cantidad} setStock={setStock} stock={stock} visible={visible} /> 
        </div>
    )
}

    
export default ItemDetail