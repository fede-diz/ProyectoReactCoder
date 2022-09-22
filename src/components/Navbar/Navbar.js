import './Navbar.css'

const Navbar = () => {
    const carritoSRC = `https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg`
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h4 className="navbar-brand">Diz ClotheZ</h4>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="btn-group me-auto mb-2 mb-lg-0" role="group" aria-label="Default button group">
                        <button className="btn" type="button">Abrigos</button>
                        <button className="btn" type="button">Accesorios</button>
                        <button className="btn" type="button">Calzados</button>
                        <button className="btn" type="button">Camisas</button>
                        <button className="btn" type="button">Pantalones</button>
                        <button className="btn" type="button">Remeras</button>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <a className="link-secondary" href="#top" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                        </a>
                    </form>
                    <a href="#top" className="link-secondary">
                        <img src= { carritoSRC } className='carrito-logo' alt='carrito'/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar