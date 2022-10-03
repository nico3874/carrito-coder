import { useContext } from "react"
import { Context } from "../contexts/cartContext"
import ContactForm from "./contactForm"





const CartItem = ({item})=>{

    const{removeItem} = useContext(Context)
    const btnRemove=()=>{
    removeItem(item.id)
   } 

    return(
        
        <div>
            <h2>{item.title} - {item.quantity} -  ${(+item.price)*(+item.quantity)}</h2>
            <button onClick={btnRemove}>Eliminar producto</button>
            
        </div>
       
    
       
)}

export default CartItem