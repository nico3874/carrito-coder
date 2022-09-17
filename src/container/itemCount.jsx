import React, { useState } from "react";


const ItemCount = ({cantidad, setCantidad, stock, setStock, cart, setCart, initial, product, onAdd, visible} ) => {
    


    
    const subtraction = ()=>{
        (cantidad >1 ) && setCantidad(cantidad -1); 
        
    };
    const add = ()=>{
        if(cantidad<stock){
            (cantidad>=0 && stock>0) && setCantidad(cantidad + 1); 
        }
        
        
        console.log(stock)
    };


    
    return (
        <div className= {visible} >
            <h2>{product} </h2>
            <h5>(Disponibles {stock})</h5>
            <div className="d-flex  justify-content-center mt-3">
            <button className="btn btn-primary" onClick={() => {subtraction()}}>-</button>
                <h1 className="ms-5 me-5">{cantidad}</h1>
                <button className="btn btn-primary" onClick={() => {add()}}>+</button>
                
            </div>
            
            <div>
                <button className="btn btn-primary mt-1 mb-3" onClick={onAdd}>Agregar al carrito</button>
            </div>
            
        </div>
    )
    
}



export default ItemCount