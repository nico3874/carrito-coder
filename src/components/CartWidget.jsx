import cart  from "../assets/img/cart2.png";


const CartWidget =()=>{
    return(
        <div>
            <img src={cart} alt="cart" className="marginCart"/>
        </div>
    )
}

export default CartWidget