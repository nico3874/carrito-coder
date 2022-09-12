

import ItemList from "./itemList"


const ItemListContainer = ({greeting, color}) =>{
    return (
        <div>   
            <h2 className={color}>{greeting}</h2>
            <ItemList/> 
       </div>     
    )
}

export default ItemListContainer