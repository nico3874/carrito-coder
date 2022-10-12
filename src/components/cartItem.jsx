
import { useContext } from "react"
import { Context } from "../contexts/cartContext"



const CartItem = ({ item }) => {

    const { removeItem } = useContext(Context)
    const btnRemove = () => {
        removeItem(item.id);
        
    }
    

    return (
        
            <div className="row cartItem" >
                <div className="col-6 " >
                    <img className="img-fluid" src={item.picture} alt="foto de producto" />
                </div>
                <div className="col-6">
                    <h2>{item.title}</h2>
                    <h3>Cantidad {item.quantity}</h3>
                    <h3>Total ${(+item.price)*(+item.quantity)}</h3>
                    <div>
                        <button className="btn btn-primary btn-lg mt-5 ms-5" onClick={btnRemove}>Eliminar producto</button>
                    </div>
                </div>

                
            </div>
        
    )
}

export default CartItem


