const products = [
    {id: '1', name: 'Buzo Ancla', price: 5220, category: 'Buzo', img: '/images/Abrigos/buzo-ancla.jpg', stock: 4},
    {id: '2', name: 'Buzo Ketle', price: 7300, category: 'Buzo', img: '/images/Abrigos/buzo-ketle.jpg', stock: 5},
    {id: '3', name: 'Buzo Lyon', price: 6120, category: 'Buzo', img: '/images/Abrigos/buzo-lyon.jpg', stock: 8},
    {id: '4', name: 'Buzo Morris', price: 6120, category: 'Buzo', img: '/images/Abrigos/buzo-morris.jpg', stock: 2},
    {id: '5', name: 'Buzo Travis', price: 6480, category: 'Buzo', img: '/images/Abrigos/buzo-travis.jpg', stock: 4},
    {id: '6', name: 'Campera Malba', price: 8100, category: 'Campera', img: '/images/Abrigos/campera-malba.jpg', stock: 2},
    {id: '7', name: 'Sweater Blud', price: 6200, category: 'Sweater', img: '/images/Abrigos/sweater-blud.jpg', stock: 3},
    {id: '8', name: 'Cinturon Genoma', price: 4500, category: 'Cinturon', img: '/images/Accesorios/cinturon-genoma.jpg', stock: 7},
    {id: '9', name: 'Cinturon Jacinto', price: 4000, category: 'Cinturon', img: '/images/Accesorios/cinturon-jacinto.jpg', stock: 6},
    {id: '10', name: 'Cinturon Serrano', price: 4000, category: 'Cinturon', img: '/images/Accesorios/cinturon-serrano.jpg', stock: 7},
    {id: '11', name: 'Borcegos Ozzy', price: 15600, category: 'Borcegos', img: '/images/Calzado/borcegos-ozzy.jpg', stock: 6},
    {id: '12', name: 'Botas Macallan Chocolate', price: 22050, category: 'Botas', img: '/images/Calzado/botas-macallan-chocolate.jpg', stock: 3},
    {id: '13', name: 'Botas Macallan Negro', price: 22000, category: 'Botas', img: '/images/Calzado/botas-macallan-negro.jpg', stock: 4},
    {id: '14', name: 'Botas Macallan Suela', price: 22000, category: 'Botas', img: '/images/Calzado/botas-macallan-suela.jpg', stock: 5},
    {id: '15', name: 'Botas Steve Raspado', price: 19500, category: 'Botas', img: '/images/Calzado/botas-steve-raspado.jpg', stock: 2},
    {id: '16', name: 'Zapatillas Amadeo', price: 15900, category: 'Zapatillas', img: '/images/Calzado/zapatillas-amadeo.jpg', stock: 1},
    {id: '17', name: 'Zapatillas Luigi', price: 15900, category: 'Zapatillas', img: '/images/Calzado/zapatillas-luigi.jpg', stock: 6},
    {id: '18', name: 'Zapatillas Ozzy', price: 16900, category: 'Zapatillas', img: '/images/Calzado/zapatillas-ozzy.jpg', stock: 7},
    {id: '19', name: 'Camisa Barry', price: 6570, category: 'Camisa', img: '/images/Camisas/camisa-barry.jpg', stock: 3},
    {id: '20', name: 'Camisa Bing', price: 7300, category: 'Camisa', img: '/images/Camisas/camisa-bing.jpg', stock: 4},
    {id: '21', name: 'Camisa Fisher', price: 7300, category: 'Camisa', img: '/images/Camisas/camisa-fisher.jpg', stock: 3},
    {id: '22', name: 'Camisa Mauri', price: 6800, category: 'Camisa', img: '/images/Camisas/camisa-mauri.jpg', stock: 2},
    {id: '23', name: 'Camisa Monroe', price: 6910, category: 'Camisa', img: '/images/Camisas/camisa-monroe.jpg', stock: 4},
    {id: '24', name: 'Camisa Pistacho', price: 7150, category: 'Camisa', img: '/images/Camisas/camisa-pistacho.jpg', stock: 3},
    {id: '25', name: 'Camisa Sour', price: 7800, category: 'Camisa', img: '/images/Camisas/camisa-sour.jpg', stock: 3},
    {id: '26', name: 'Bermuda Floyd', price: 6300, category: 'Bermuda', img: '/images/Pantalones/bermuda-floyd.jpg', stock: 2},
    {id: '27', name: 'Chino Azul', price: 8900, category: 'Chino', img: '/images/Pantalones/chino-azul.jpg', stock: 3},
    {id: '28', name: 'Chino Negro', price: 8900, category: 'Chino', img: '/images/Pantalones/chino-negro.jpg', stock: 4},
    {id: '29', name: 'Chino Verde', price: 8900, category: 'Chino', img: '/images/Pantalones/chino-verde.jpg', stock: 6},
    {id: '30', name: 'Dixon Gris', price: 8250, category: 'Dixon', img: '/images/Pantalones/dixon-gris.jpg', stock: 7},
    {id: '31', name: 'Jean Blend', price: 7900, category: 'Jean', img: '/images/Pantalones/jean-blend.jpg', stock: 4},
    {id: '32', name: 'Jean Cube', price: 7900, category: 'Jean', img: '/images/Pantalones/jean-cube.jpg', stock: 5},
    {id: '33', name: 'Jean Curry', price: 7900, category: 'Jean', img: '/images/Pantalones/jean-curry.jpg', stock: 5},
    {id: '34', name: 'Remera Cougar', price: 3200, category: 'Remera', img: '/images/Remeras/remera-cougar.jpg', stock: 7},
    {id: '35', name: 'Remera Not Dead', price: 3200, category: 'Remera', img: '/images/Remeras/remera-not-dead.jpg', stock: 8},
    {id: '36', name: 'Remera Rose', price: 3060, category: 'Remera', img: '/images/Remeras/remera-rose.jpg', stock: 9},
    {id: '37', name: 'Remera Stones', price: 2890, category: 'Remera', img: '/images/Remeras/remera-stones.png', stock: 7},
    {id: '38', name: 'Remera Tradi', price: 3340, category: 'Remera', img: '/images/Remeras/remera-tradi.png', stock: 3}   
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000);
    })
}