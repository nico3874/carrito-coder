import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../contexts/cartContext";



const ContactForm = ()=>{

    const{cart} = useContext(Context);
    const [id, setId] = useState();
    const [form, setForm] = useState(
        {
            name:"",
            email:"",
            phone:0,
            item: [],
            date:""
        }
    )

    
    const changeForm = (e)=>{
        
        const buyer ={...form, [e.target.name]:e.target.value, item:cart.map((e)=>{return({price:e.price, title:e.title, quatity:e.quantity})}), 
        Total:cart.map(e=>(e.quantity*e.price)).reduce((prev, curr) => prev + curr, 0), date:new Date(Date.now()).toLocaleDateString()};
        setForm(buyer);
        console.log(buyer)
    }

    const submitHandler = (e)=>{
        
        e.preventDefault();
        const db = getFirestore();
        const orderColelction = collection(db, 'orders');
        addDoc(orderColelction, form).then((snapshot)=>{
            setId(snapshot.id)
        })
    }
    
    return(

        <>
            {typeof id !== "undefined"?
            (<h2>Su orden número {id} se ha generado con éxito</h2>):
            (<form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" type="text" onChange={changeForm} value={form.name} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" onChange={changeForm} value={form.email}/>
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input name="phone" type="number" onChange={changeForm} value={form.phone}/>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>)}
        </>

    )
}


export default ContactForm