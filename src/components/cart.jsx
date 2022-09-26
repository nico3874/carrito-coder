import { useContext } from "react"
import { Context } from "../contexts/cartContext"
import CartItem from "./cartItem"
import {Link} from "react-router-dom"

const Cart = ()=>{
    const {cart, clear} = useContext(Context);
    const btnClear =()=>{
        clear()
    }
    if (cart.length > 0){
    return (
        <>
        {cart.map((element )=><CartItem key={element.id} item={element}/>)}
        <button onClick={btnClear}>Vaciar Carrito</button>
        <div className="mt-5">
            <h2>Valor total de la compra</h2>
            <h3>{cart.length>0 && cart.map(e=>(e.quantity*e.price)).reduce((prev, curr) => prev + curr, 0)}</h3>
        </div>
        </>
)}else{
    return (
        <>
            <h2>No hay elementos en el carrito</h2>
            <Link to={"/"}>
                <button className="btn btn-primary">Regresa a la Tienda</button>
            </Link>
        </>
    )
        
}
};


export default Cart