import Item from "../Item/Item"
import './ItemDetail.css'

const ItemDetail = ({ products }) => {

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 container-sm">
            {products.map((prod) => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemDetail