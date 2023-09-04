//@ts-check

const carritoID = 'almacenarEnCarrito'

const almacenarCarrito = () => {
    if (carritoFrutas.length > 0) {
        localStorage.setItem(carritoID, JSON.stringify(carritoFrutas))
    }
}

const recuperarCarrito = () => {
    const item = localStorage.getItem(carritoID) ?? "[]"
    return JSON.parse(item) || [];
}

const carritoFrutas = recuperarCarrito()

const agregarAlCarrito = (frutaID) => {
    if (frutaID <= 0) return

    const resultado = productos.find((producto) => producto.id === parseInt(frutaID))

    if (!resultado) {
        console.warn(`No se encontro el producto ${frutaID} 😥`)
        return
    }

    console.info(`Se añadio el producto ${frutaID} al carrito`)
    carritoFrutas.push(resultado)
    almacenarCarrito()
}