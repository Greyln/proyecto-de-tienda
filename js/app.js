
addEventListener("DOMContentLoaded", () => {
		const btn_menu = document.querySelector(".btn_menu")
		if(btn_menu){
			btn_menu.addEventListener("click", () => {
				const menu_items = document.querySelector(".menu_items")
				menu_items.classList.toggle("mostrar")
			})
		}
	})


function searchItem(text) {

}

function createCardHTML(producto) {
    let template = `
    <div class="card">
        <div class="card-image">${producto.imagen}</div>
        <div class="card-name">${producto.nombre}</div>
        <div class="card-price">\$ ${producto.precio}</div>
        <div class="card-button">
        <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">-</button>
        <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
        </div>
    </div>`;
    
    return template;
}

function loadProducts(array) {
    const container = document.querySelector('.container');
    array.forEach(element => {
        let card = document.createElement('div');
        card.innerHTML = createCardHTML(element);
        
        container.appendChild(card);
    });
}

{
    console.table(productos);

    const errorCard = document.getElementById('errorCard');
    
    if (productos.length == 0) {
        errorCard.className = "card-error";
        
    } else {
        errorCard.className = "card-error ocultar";
    
        loadProducts(productos);
    }
}
