import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import MainSearch from '../MainSearch/MainSearch'
import { Link, NavLink } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../services/firebase';

const Navbar = () => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'types')
        
        getDocs(collectionRef).then((response) => {
            const typesAdapted = response.docs.map((doc) => {
                const data = doc.data()
                const id = doc.id

                return { id, ...data }
            })
            setTypes(typesAdapted)
        })                                                  
    }, [])

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={'/'} className="brand">Diz ClotheZ</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="btn-group me-auto mb-2 mb-lg-0" role="group" aria-label="Default button group">
                        {
                            types.map((type) => (
                                <NavLink key={type.id} to={`type/${type.slug}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{type.label}</NavLink>
                            ))
                        }
                    </div>
                    <MainSearch />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar