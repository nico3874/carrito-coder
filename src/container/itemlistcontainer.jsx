
import ItemCount from "./itemCount"
import ItemList from "./itemList"


const ItemListContainer = ({greeting, color}) =>{
    return (
        <div>   
            <h2 className={color}>{greeting}</h2>
            <ItemCount initial={1} stockInit={10} product="Luces inteligentes" />
            <ItemList/> 
       </div>     
    )
}

export default ItemListContainer