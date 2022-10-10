import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import MainSearch from '../MainSearch/MainSearch'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={'/'}>
                    <h4 className="navbar-brand">Diz ClotheZ</h4>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="btn-group me-auto mb-2 mb-lg-0" role="group" aria-label="Default button group">
                        <NavLink to={'type/Abrigos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Abrigos</NavLink>
                        <NavLink to={'type/Accesorios'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                        <NavLink to={'type/Calzado'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Calzado</NavLink>
                        <NavLink to={'type/Camisas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camisas</NavLink>
                        <NavLink to={'type/Pantalones'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                        <NavLink to={'type/Remeras'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                    </div>
                    <MainSearch />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar