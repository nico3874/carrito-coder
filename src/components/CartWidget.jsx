import cartImage  from "../assets/img/cart2.png";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../contexts/cartContext";

const CartWidget =()=>{

    const {cart} = useContext(Context)
    
    
    return(
        <div>
            {cart.length>0 && <Link to={"/cart"}>
                <img src={cartImage} alt="cart" className="marginCart"/>
            </Link>}
            {cart.length>0 &&
            <>
                <h6> {cart.map(e=>(e.quantity)).reduce((prev, curr) => prev + curr, 0)} </h6> 
            </>}
        </div>
        
    )
}

export default CartWidget