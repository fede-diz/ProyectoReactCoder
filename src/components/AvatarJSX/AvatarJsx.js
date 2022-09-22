import './AvatarJsx.css'     // Al tener que importar un CSS, se importa el archivo completo, por eso no tengo que hacer un "export default xxx"

const AvatarJsx = () => {
    const src = `https://randomuser.me/api/portraits/lego/2.jpg`
    return (                  // Puedo definir un styling sobre la misma línea usando {{}} (la 1°{} define que es un objetoJS y la 2°{} es el detalle de la propiedad)
        <picture style={{color: 'red'}}>
            <img src = {src} alt='avatar'/>
            Andres
        </picture>
    )
}

export default AvatarJsx    // esto me permite exportar la función de un JS como un módulo para poder usarla en otro lado
                            // En este ejemplo, la tengo que usar en "src\App.js" para que vaya a "src\index.js" para que vaya a "public\index.html"