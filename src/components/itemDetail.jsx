
import { useState, useContext } from "react";
import ItemCount from "../container/itemCount";
import { Link } from "react-router-dom";
import { Context } from "../contexts/cartContext";
import { useEffect } from "react";




const ItemDetail = ({item }) => {
    
   
    const [cantidad, setCantidad] = useState(0);
    const [stock, setStock] = useState();
    const [visible, setVisible] = useState("")
    const [btnVisible, setBtnVisible] = useState("invisible")
    
    const {addItem, cart, removeItem} = useContext(Context)

    useEffect(()=>{
       setStock(item.stock-cantidad)
    })

    
    
    
    const onAdd = ()=>{
       
        if(cantidad>0){
            setVisible("invisible");
            setStock((+stock)-(+cantidad));
            setBtnVisible ("d-grid gap-2");
            addItem(item, cantidad);
            
        }
    }

    

    const cartReset = ()=>{
        setVisible("")
        setBtnVisible("invisible")
        setCantidad(0)
        removeItem(item.id)
    }

    
    return (
        <div className="row">
            <div className="card m-5 col-12" style={{"width": "40rem"}}>
                <img  src={item.picture} className="card-img-top" alt="image_product"/>
                <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text mb-4">{item.description}</p>
                    <h5 className="card-text">${item.price}</h5>
                    <h6 className="card-text">(Disponibles {stock})</h6>
                </div>
                <div className={btnVisible}>
                    <h3>Hay {cantidad} productos en tu carrito</h3>
                    <Link  
                        to={"/cart"}><button className="btn btn-primary mb-3 col-6">Finaliza tu compra </button>
                    </Link>
                    <div>
                        <button className="btn btn-primary col-6 " onClick={()=>cartReset()}>Volver a Empezar </button>
                    </div>
                </div>
                <ItemCount product="Luces inteligentes" onAdd={onAdd} setCantidad={setCantidad} cantidad = {cantidad} setStock={setStock} stock={stock} visible={visible} /> 
            </div>
        </div>
    )
}

    
export default ItemDetail