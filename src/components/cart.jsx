import { useContext } from "react"
import { Context } from "../contexts/cartContext"
import CartItem from "./cartItem"
import {Link} from "react-router-dom"
import ContactForm from "./contactForm";


const Cart = ()=>{
    const {cart, clear} = useContext(Context);
    
    const btnClear =()=>{
        clear();
        
    }

  

    if (cart.length > 0){
    return (
        <div className="container">
            <div className="m-5">
                <h2 className="m-5">Tu Carrito</h2>
                {cart.map((element )=><CartItem key={element.id} item={element}/>)}
                <button className="btn btn-primary mt-5" onClick={btnClear}>Vaciar Carrito</button>
            </div>
            <div className="mt-5">
                <h2>Valor total de la compra</h2>
                <h3>{cart.length>0 && cart.map(e=>(e.quantity*e.price)).reduce((prev, curr) => prev + curr, 0)}</h3>
            </div>
           
            <div className="m-4">
                <ContactForm />
            </div>
        </div>
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