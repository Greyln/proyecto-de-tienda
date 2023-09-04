//@ts-check

function retornarTablaHTML(producto) {
	return `
        <tr>
            <td>${producto.imagen}</td>
            <td>${producto.nombre}</td>
            <td>$ ${producto.precio}</td>
            <td><img src="images/icon-fruits-64.png" width="24px"></td>
        </tr>`
}

function mostrarCarrito() {
    const productos = recuperarCarrito()
    const tableBody = document.querySelector('tbody')
	const btnComprar = document.querySelector("#btnComprar")

	if (!tableBody) {
		console.error("Cannot find container for checkout.")
        return
	}
	if (!btnComprar) {
		console.error("Cannot find button for buying.")
        return
	}

	if (productos.length > 0) {
        const tableRows = productos.map(retornarTablaHTML).join('');
        tableBody.innerHTML = tableRows;
		console.table(productos)
		//productos.forEach((producto) => tableBody.innerHTML += retornarTablaHTML(producto))
	};


	btnComprar.addEventListener('click', () => {
		if (productos.length <=0) {
			alert("No hay productos en el carrito aun.")
			return
		}

		alert("Gracias por tu compra!")
		productos.length = 0
		localStorage.removeItem(carritoID)
		tableBody.innerHTML = ""
	})
}

mostrarCarrito()