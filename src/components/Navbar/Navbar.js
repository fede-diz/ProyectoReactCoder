import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import MainSearch from '../MainSearch/MainSearch'
import Sheets from '../Sheets/Sheets'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h4 className="navbar-brand">Diz ClotheZ</h4>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="btn-group me-auto mb-2 mb-lg-0" role="group" aria-label="Default button group">
                        <Sheets sheetName={'Abrigos'} />
                        <Sheets sheetName={'Accesorios'} />
                        <Sheets sheetName={'Calzado'} />
                        <Sheets sheetName={'Camisas'} />
                        <Sheets sheetName={'Pantalones'} />
                        <Sheets sheetName={'Remeras'} />
                    </div>
                    <MainSearch />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar