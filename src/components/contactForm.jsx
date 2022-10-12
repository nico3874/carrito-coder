import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../contexts/cartContext";

import {Modal, Button} from "react-bootstrap";
import { Link } from "react-router-dom";




const ContactForm = ()=>{
    const [show, setShow] = useState(true);
    const handleClose = () => {setShow(false); clear()}
    

    const{cart, clear} = useContext(Context);
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
        
    }

    const submitHandler = (e)=>{
        
        e.preventDefault();
        const db = getFirestore();
        const orderColelction = collection(db, 'orders');
        addDoc(orderColelction, form).then((snapshot)=>{
            setId(snapshot.id)
        });
        resetStock();
        
        

    }

    const resetStock = ()=>{
        const db = getFirestore();
        cart.forEach(element => {
            const stockRef = doc(db,'products', `${element.id}`);
            updateDoc(stockRef, {stock:(element.stock-element.quantity)});
            
        });
        
    }
    return(

        <div className="d-flex flex-column align-items-center">
            {typeof id !== "undefined"? 
            (  <>
               
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Compra Realizada</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Su orden número {id} se ha generado con éxito</Modal.Body>
                  <Modal.Footer>
                    <Link to={'/'}>
                        <Button variant="primary" onClick={handleClose}>
                           Cerrar
                        </Button>
                    </Link>  
                  </Modal.Footer>
                </Modal>
              </>
                ):
            
            (<form className="col-8 row" onSubmit={submitHandler}>
                <div className="mb-3 text-start ">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input className= "form-control" id="name" name="name" type="text" onChange={changeForm} value={form.name} required />
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" name="email" type="email" onChange={changeForm} value={form.email} required/>
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="phone">Telefono</label>
                    <input className="form-control" name="phone" type="number" onChange={changeForm} value={form.phone} required/>
                </div>
                <div className="mb-3">
                    <button className="form-control btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>)}
        </div>

    );
    
    
    

    
}


export default ContactForm


