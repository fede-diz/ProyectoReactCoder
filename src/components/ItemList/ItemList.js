import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 container-sm">
            {products.map((prod) => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList