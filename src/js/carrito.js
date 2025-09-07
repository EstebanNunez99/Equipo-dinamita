// 🛒 Carrito: inicialización y lógica de interfaz
document.addEventListener("DOMContentLoaded", () => {
  const botonAnadirCarrito = document.querySelector(".aniadir-carrito");
  const contadorCarrito = document.querySelector(".cart-count");
  const carritoMenu = document.querySelector(".carrito-menu");
  const iconoCarrito = document.querySelector(".carrito");

  let productoActual = null;

  const productoGuardado = localStorage.getItem("productoActual");
  if (productoGuardado) {
    productoActual = JSON.parse(productoGuardado);
  }

  function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }

  function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    if (contadorCarrito) {
      contadorCarrito.textContent = carrito.length;
    }
  }

  function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
  }

  function anadirAlCarrito() {
    if (!productoActual) return;

    const carrito = obtenerCarrito();

    const productoCarrito = {
      id: productoActual.id,
      nombre: productoActual.nombre,
      precio: productoActual.precio,
      imagen: productoActual.imagen,
    };

    carrito.push(productoCarrito);
    guardarCarrito(carrito);
    renderizarCarrito();
  }

  function renderizarCarrito() {
    const carrito = obtenerCarrito();
    carritoMenu.textContent = "";

    if (carrito.length === 0) {
      const msg = document.createElement("p");
      msg.textContent = "Tu carrito está vacío 🛒";
      carritoMenu.appendChild(msg);
      return;
    }

    carrito.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("carrito-item");

      const img = document.createElement("img");
      img.src = item.imagen;
      img.alt = item.nombre;

      const info = document.createElement("div");
      const nombre = document.createElement("h4");
      nombre.textContent = item.nombre;

      const precio = document.createElement("p");
      precio.textContent = `$${item.precio}`;

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("eliminar-producto");
      botonEliminar.addEventListener("click", () => {
        eliminarProductoDelCarrito(index);
      });

      info.appendChild(nombre);
      info.appendChild(precio);
      info.appendChild(botonEliminar);

      div.appendChild(img);
      div.appendChild(info);
      carritoMenu.appendChild(div);
    });
  }

  function eliminarProductoDelCarrito(indice) {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);
    guardarCarrito(carrito);
    renderizarCarrito();
  }

  if (iconoCarrito) {
    iconoCarrito.addEventListener("click", () => {
      carritoMenu.classList.toggle("mostrar");
    });
  }

  // 🔔 Escuchar evento personalizado desde otras páginas
  document.addEventListener("carritoActualizado", () => {
    actualizarContadorCarrito();
    renderizarCarrito();
  });

  // 🧼 Inicialización
  actualizarContadorCarrito();
  renderizarCarrito();
});
