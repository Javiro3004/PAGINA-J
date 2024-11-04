const agregarCarrito = document.querySelectorAll('.agregar-carrito');

let carrito = [];

function agregarProductoAlCarrito(producto, precio) {
    const productoObj = {
        producto: producto,
        precio:1000
    };

    carrito.push(productoObj);

    mostrarCarrito();
}

function eliminarProductoDelCarrito(indice) {
    carrito.splice(indice, 1);

    mostrarCarrito();
}

function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');

    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto, indice) => {
        const elemento = document.createElement('li');
        elemento.classList.add('list-group-item');
        elemento.textContent = `${producto.nombre} - $${producto.precio}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn', 'btn-danger', 'float-end');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => {
            eliminarProductoDelCarrito(indice);
        };

        elemento.appendChild(botonEliminar);
        contenedorCarrito.appendChild(elemento);
    });

    const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);
    const elementoTotal = document.createElement('li');
    elementoTotal.classList.add('list-group-item');
    elementoTotal.textContent = `Total: $${total}`;
    contenedorCarrito.appendChild(elementoTotal);

    const contenedorCartProducts = document.querySelector('.container-cart-products');
    contenedorCartProducts.classList.remove('hidden-cart');
}

agregarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        const producto = boton.getAttribute('data-producto');
        const precio = parseInt(boton.getAttribute('data-precio'));
        agregarProductoAlCarrito(producto, precio);
    });
});