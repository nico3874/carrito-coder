import { Link } from "react-router-dom"


const Item = ({ id, title, price, picture}) => {
    return (
        <div  
            className="card m-5" style={{"width": "18rem", "height": "25rem"}}>
            <img  src={picture} className="card-img-top" alt="image_product"/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5 className="card-text">${price}</h5>
                </div>
                <Link to= {`/itemDetail/${id}`}>
                    <button>Ver Más</button>
                </Link>
                
        </div>
        
    )
}




export default Item   



