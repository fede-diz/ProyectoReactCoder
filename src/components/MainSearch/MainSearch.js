const MainSearch = () => {
    return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                <a className="link-secondary" href="#top" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" className="mx-3" role="img" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                </a>
            </form>
        </div>
    )
}

export default MainSearch