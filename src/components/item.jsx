import { Link } from "react-router-dom"


const Item = ({ id, title, price, picture}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card m-5" style={{"width": "18rem", "height": "28rem"}}>
                <img  src={picture} className="card-img-top" alt="image_product" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5 className="card-text">${price}</h5>
                </div>
                <Link to= {`/itemDetail/${id}`}>
                    <button className="btn btn-primary">Ver Más</button>
                </Link>
            </div>
        </div>
        
    )
}




export default Item   



