import { createContext } from "react";
import { useState } from "react";

export const Context = createContext();

const CartContext = ({children})=>{
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity)=>{

        const previous = isInCart(item.id);
        if (previous){
            const newCart = cart.filter((element)=>element.id!==item.id);
            item.quantity = quantity + previous.quantity
            newCart.push(item)
            setCart(newCart)
        }else{
            item.quantity = quantity
            setCart([...cart, item])

        }
        
    }

    const clear = ()=>{
        setCart([])
    };
    
    const isInCart = (itemId)=>{
        return cart.find((element)=>element.id===itemId)
    }

    const removeItem =(itemId)=>{
        setCart(cart.filter((element)=>element.id!==itemId));
        
    }

    

    return(
        <Context.Provider value={{cart, setCart, addItem, clear, removeItem }}>
            {children}
        </Context.Provider>
    )


}


export default CartContext
