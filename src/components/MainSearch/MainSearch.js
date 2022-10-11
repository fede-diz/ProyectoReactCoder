import { useState } from "react"
import './MainSearch.css'

const MainSearch = () => {
    const [input, setInput] = useState()
    // const [products, setProducts] = useState([])              impacto en líneas 14 y 22

    const handleSearch = () => {
        // Agregar un loader? por el retraso?
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then((response) => {
            return response.json()
        }).then((resp) => {
            console.log(resp.results);
            // setProducts(resp.results);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    return (
        // {products.map(prod => { -> return( -> <div key={prod.id}> -> <h1>{prod.title}</h1> -> <img src={prod.thumbnail} alt={prod.title} /> -> <p>$ {prod.price}</p> -> </div> -> ) -> })}
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="No está funcional" aria-label="Search" value={input} onChange={(e) => {setInput(e.target.value)}}/>
                <button className="button" type="button" onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" role="img" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                </button>
            </form>
        </div>
    )
}

export default MainSearch