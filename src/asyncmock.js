const productos = [
    { nombre: "Clavos 2'", precio: 500, id: "1", img: "../img/clavosdospulgadas.jpg", idCat: "2" },
    { nombre: "Clavos 2' y 1/2", precio: 180, id: "2", img: "../img/clavosdosymedia.jpg", idCat: "2" },
    { nombre: "Alambre fardo", precio: 200, id: "3", img: "../img/alambre fardo.jpg", idCat: "3" },
    { nombre: "Alambre 1.6", precio: 400, id: "4", img: "../img/alamabre 1.6.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}