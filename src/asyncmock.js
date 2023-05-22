const productos = [
    { nombre: "Zapatillas", precio: 500, id: "1", img: "", idCat: "2" },
    { nombre: "", precio: 180, id: "2", img: "", idCat: "2" },
    { nombre: "", precio: 200, id: "3", img: "", idCat: "3" },
    { nombre: "A", precio: 400, id: "4", img: "", idCat: "3" },
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