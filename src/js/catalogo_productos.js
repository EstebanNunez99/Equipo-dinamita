function obtenerProductos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productos = [
                { id: 1, nombre: "Aparador Uspallata", descripcion: "Aparador de seis puertas fabricado en nogal...", imagen: "../img/Aparador Uspallata.png", precio: 340000 },
                { id: 2, nombre: "Biblioteca Recoleta", descripcion: "Sistema modular de estantes abierto con...", imagen: "../img/Biblioteca Recoleta.png", precio: 120000 },
                { id: 3, nombre: "Butaca Mendoza", descripcion: "Butaca tapizada en bouclé Dusty Rose...", imagen: "../img/Butaca Mendoza.png", precio: 85000 },
                { id: 4, nombre: "Sillón Copacabana", descripcion: "Sillón lounge en cuero cognac con...", imagen: "../img/Sillón Copacabana.png", precio: 150000 },
                { id: 5, nombre: "Mesa de Centro Araucaria", descripcion: "Mesa de centro circular con sobre...", imagen: "../img/Mesa de Centro Araucaria.png", precio: 90000 },
                { id: 6, nombre: "Mesa de Noche Aconcagua", descripcion: "Mesa de noche con cajón oculto...", imagen: "../img/Mesa de Noche Aconcagua.png", precio: 45000 },
                { id: 7, nombre: "Cama Neuquén", descripcion: "Cama plataforma con cabecero flotante tapizado...", imagen: "../img/Cama-neuquén(sin fondo).png", precio: 340000 },
                { id: 8, nombre: "Sofá Patagonia", descripcion: "Sofá de tres cuerpos tapizado en...", imagen: "../img/Sofá Patagonia.png", precio: 750000 },
                { id: 9, nombre: "Mesa Comedor Pampa", descripcion:"Mesa extensible de roble macizo con...", imagen: "../img/Mesa Comedor Pampa.png", precio: 120000 },
                { id: 10, nombre: "Sillas Córdoba", descripcion: "Set de 4 sillas apilables en...", imagen: "../img/Sillas Córdoba.png", precio: 120000 },
                { id: 11, nombre: "Escritorio Costa", descripcion: "Escritorio compacto con cajón organizador...", imagen: "../img/Escritorio Costa.png", precio: 120000 },
                { id: 12, nombre: "Silla de Trabajo Belgrano", descripcion: "Silla ergonómica regulable en altura con...", imagen: "../img/Silla de Trabajo Belgrano.png", precio: 85000 }
            ];
            resolve(productos);
        }, 1500); 
    });
}

let productosGlobal = [];
let carrito = [];

function renderCatalogo(lista) {
    const contenedor = document.querySelector(".grid-productos");
    contenedor.innerHTML = ""; 

    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    lista.forEach(prod => {
        const card = document.createElement("article");
        card.classList.add("card-producto");

        card.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <div class="card-body">
        <h2>${prod.nombre}</h2>
        <p>${prod.descripcion}</p>
        <p><strong>$${prod.precio}</strong></p>
        <div class="card-buttons">
            <a href="#" class="btn-agregar" data-id="${prod.id}">Agregar</a>
            <a href="#" class="btn-detalles" data-id="${prod.id}">Detalles</a>
        </div>
    </div>
`;
contenedor.appendChild(card);
    });

    document.querySelectorAll(".btn-agregar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            agregarAlCarrito(id);
        });
    });

    document.querySelectorAll(".btn-detalles").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            mostrarDetalles(id);
        });
    });
}

function mostrarDetalles(idProducto) {
window.location.href = `../page/producto.html?id=${idProducto}`; 
}





    document.querySelectorAll(".btn-agregar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            agregarAlCarrito(id);
        });
    });

function agregarAlCarrito(idProducto) {
    const producto = productosGlobal.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        actualizarContadorCarrito();
    }
}

function actualizarContadorCarrito() {
    const contador = document.querySelector(".cart-count");
    contador.textContent = carrito.length;
}

function configurarBuscador() {
    const input = document.querySelector(".search input");
    input.addEventListener("input", () => {
        const texto = input.value.toLowerCase();
        const filtrados = productosGlobal.filter(p =>
            p.nombre.toLowerCase().includes(texto) ||
            p.descripcion.toLowerCase().includes(texto)
        );
        renderCatalogo(filtrados);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const contenedor = document.querySelector(".grid-productos");
    contenedor.innerHTML = "<p>Cargando productos...</p>";

    productosGlobal = await obtenerProductos();
    renderCatalogo(productosGlobal);
    configurarBuscador();
});