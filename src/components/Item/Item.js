import './Item.css'

const Item = ({ name, price, category, img, stock }) => {

    return (
        <div className="col">
            <div className="card border-0">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h1 className="card-title display-6">{name}</h1>
                    <p className="card-text"><strong>{category}: ${price}</strong></p>
                    <p className="card-stock blockquote">Stock: {stock}</p>
                </div>
            </div>
        </div>
    )
}

export default Item