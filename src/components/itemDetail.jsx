import { useParams } from "react-router-dom"


const ItemDetail = ({ id, title, price, picture, description }) => {
   
    return (
        <div  
            className="card m-5" style={{"width": "40rem"}}>
            <img  src={picture} className="card-img-top" alt="image_product"/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text mb-4">{description}</p>
                    <h5 className="card-text">${price}</h5>
                </div>
                
        </div>
    )
}


export default ItemDetail