
import { useState } from "react"
import ItemCount from "../container/itemCount"


const ItemDetail = ({ id, title, price, picture, description, stockInit }) => {
    console.log(stockInit)
    const [cantidad, setCantidad] = useState(1);
    const [stock, setStock] = useState(+(stockInit));
    const [] = useState(0);
    const [visible, setVisible] = useState("")

    const onAdd = ()=>{
        console.log(`Hay ${cantidad} productos`)
        if(cantidad>0 && cantidad <= stock){
            setVisible("invisible");
            setStock(stock-cantidad);
            setCantidad(1);
            
        }
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
                <ItemCount product="Luces inteligentes" onAdd={onAdd} setCantidad={setCantidad} cantidad = {cantidad} setStock={setStock} stock={stock} visible={visible} /> 
        </div>
    )
}


export default ItemDetail