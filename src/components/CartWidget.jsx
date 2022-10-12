import cartImage  from "../assets/img/cart2.png";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../contexts/cartContext";


const CartWidget =()=>{
    
    const {cart} = useContext(Context)

   
    
    
    if (cart.length>0){
        return(
            <div>
                <p> {cart.map(e=>(e.quantity)).reduce((prev, curr) => prev + curr, 0)} </p>
                <Link to={"/cart"}>
                    <img  src={cartImage} alt="cart" className="marginCart"/>
                </Link>
            </div>
            
        
            )

    }
    
}

export default CartWidget

