import React, { useState } from "react";


const ItemCount = ({stockInit, initial, product} ) => {
    const [cantidad, setCantidad] = useState(initial);
    const [stock, setStock] = useState(stockInit-initial);
    return (
        console.log(cantidad),
        console.log(stock),
        <div className="d-flex flex-column">
            <h2>{product}</h2>
            <div className="d-flex  justify-content-center mt-3">
            <button className="btn btn-primary" onClick={() => {cantidad >1 && setCantidad(cantidad -1); cantidad >1 && setStock(stock+1) }}>-</button>
                <h1 className="ms-5 me-5">{cantidad}</h1>
                <button className="btn btn-primary" onClick={() => {stock>0 && setCantidad(cantidad + 1); stock>0 && setStock(stock-1) }}>+</button>
            </div>
            <div>
                <button className="btn btn-primary mt-3 mb-3" onClick={()=>{setCantidad(initial)}}>Agregar al carrito</button>
            </div>
        </div>
    )
    
}



export default ItemCount