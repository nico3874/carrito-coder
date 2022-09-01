const Item = ({ id, title, price, picture }) => {
    return (
        <div className="card m-5" style={{"width": "18rem"}}>
            <img src={picture} className="card-img-top" alt="image_product"/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5 className="card-text">${price}</h5>
                </div>
        </div>
    )
}

export default Item   