import { useState, useEffect } from "react";

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState()                        // Manejo de input
    const [loading, setLoading] = useState(false)               // Manejo de loading

    useEffect(() => {
        // fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone').then((response) => {
        //     return response.json()
        // }).then((resp) => {
        //     console.log(resp.results);
        //     setProducts(resp.results)
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    }, [])

    const handleSearch = () => {
        setLoading(true)                                                                                // TENER EN CUENTA 
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then((response) => {          // 1) Fetch devuelve UNA PROMESA, que tengo que atrapar con un THEN para
            return response.json()                                                                      // para poder manipularla y retornar un JSON con  xxx.json()
        }).then((resp) => {                                                                             // 2) Ese JSON devuelve OTRA PROMESA, por lo que tengo que agregar
            console.log(resp.results);                                                                  // otro THEN para poder usar los resultados de adentro
            setProducts(resp.results)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return <h1>Buscando...</h1>
    }

    return (
        <div>
            <h1>MercadoLibre</h1>
            <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
            <button onClick={handleSearch}>search</button>
            {products.map(prod => {
                return(                             // key={prod.id} es para que no tire error de child en la consola (tengo que buscar el id de cada producto que mapeo)
                    <div key={prod.id}>
                        <h1>{prod.title}</h1>
                        <img src={prod.thumbnail} alt={prod.title} />
                        <p>$ {prod.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MercadoLibre