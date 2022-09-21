import { useContext } from "react"
import { Context } from "../contexts/cartContext"
import CartItem from "./cartItem"

const Cart = ()=>{
    const {cart, clear} = useContext(Context);
    const btnClear =()=>{
        clear()
    }

    return (
        <>
        {cart.map((element)=><CartItem item={element}/>)}
        <button onClick={btnClear}>Vaciar Carrito</button>
        </>
)};


export default Cart