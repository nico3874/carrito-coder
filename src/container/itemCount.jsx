import React, { useState } from "react";


const ItemCount = ({stockInit, initial, product, onAdd} ) => {
    
    const [cantidad, setCantidad] = useState(initial);
    const [stock, setStock] = useState(stockInit);
    const [cart, setCart] = useState(0);
    const subtraction = ()=>{
        (cantidad >1 && cantidad <= stock) && setCantidad(cantidad -1); 
        /* cantidad >1 && setStock(stock+1) */
    };
    const add = ()=>{
        (cantidad>=0 && cantidad < stock) && setCantidad(cantidad + 1); 
       /*  stock>0 && setStock(stock-1) */
    };

    const cartReset = ()=>{
        setStock(stockInit);
        setCart(0);
        setCantidad(initial);
    }

     onAdd = ()=>{
        if(cantidad>0 && cantidad <= stock){
            setCart(cart+cantidad);
            setStock(stock-cantidad);
            setCantidad(initial);
        }
    }

    
    
    return (
        console.log(stockInit),
        console.log(cantidad),
        console.log(stock),
        <div className="d-flex flex-column">
            <h2>{product} </h2>
            <h5>(Disponibles {stock})</h5>
            <div className="d-flex  justify-content-center mt-3">
            <button className="btn btn-primary" onClick={() => {subtraction()}}>-</button>
                <h1 className="ms-5 me-5">{cantidad}</h1>
                <button className="btn btn-primary" onClick={() => {add()}}>+</button>
                
            </div>
            <div>
                <button className="btn btn-primary mt-3 mb-3" onClick={()=>{onAdd()}}>Agregar al carrito</button>
            </div>
            <div>
                <button className="btn btn-primary mt-1 mb-3" onClick={()=>{cartReset()}}>Quitar Producto</button>
            </div>
            <h2>Tienes {cart} productos en el carrito</h2>
        </div>
    )
    
}



export default ItemCount