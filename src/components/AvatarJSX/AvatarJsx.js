import './AvatarJsx.css'     // Al tener que importar un CSS, se importa el archivo completo, por eso no tengo que hacer un "export default xxx"

const AvatarJsx = ({ id, color, component }) => {  // 1. Puedo recibir las propiedades desestructuradas directamente para usarlos como "propiedadXXX" (ejemplo"{{color: color}}")
// const AvatarJsx = (props) => {                  // 2.A Puedo recibir "props" como parámetro inventado para usarlos con "props.propiedadXXX" (ejemplo: "{{color: props.color}}")
    // const { color, component } = props          // 2.B Puedo recibir "props" y desestructurarlo para usarlos directo como "propiedadXXX" (ejemplo: "{{color: color}}")

    const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`

    return (                  // Puedo definir un styling sobre la misma línea usando {{}} (la 1°{} define que es un objetoJS y la 2°{} es el detalle de la propiedad)
        <picture style={{color: color, display: 'flex'}}>
            <img src = {src} className='avatar' alt='avatar'/>
            {component}
        </picture>
    )
}

export default AvatarJsx    
// esto me permite exportar la función de un JS como un módulo para poder usarla en otro lado
// En este ejemplo -> Lo uso en "src\App.js" -> Va a ir a "src\index.js" -> Y va a "public\index.html"

// *****************************

// Para insertar este AvatarJsx.js como componente en otro lado, tengo que:

// 1) agregar arriba de todo ->           import AvatarJsx from "../AvatarJSX(explicaciones)/AvatarJsx";
// 2) agregar donde quiero verlo ->       <AvatarJsx id={xxxx} color={xxxx} component={xxxx}/>
