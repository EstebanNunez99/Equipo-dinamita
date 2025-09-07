const gridProducto = document.querySelector(".grid-productos"); // ahora ya lo creamos acá asi que no hace falta traerlo del html

async function cargarTodosLosProductos() {
  try {
    const respuesta = await fetch("../json/catalogo_hermanos_jota.json"); // trgo el archivo JSON
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

    const productos = await respuesta.json(); // convierto el json a array de objetos que se llama productos

    for (const prodcuto of productos) { //itero sobre todos los productos y voy cargando al html y lo renderizo
      
      const cardProducto = document.createElement("div"); // esto lo que hace es crear un div en el html, este div es el que va a contener despues la imagen, y el otro div (el divsito)
      cardProducto.className = "card-producto"; //le pongo el atributo class

      const imgProducto = document.createElement("img"); // creo la iamgen en el html
      imgProducto.src = prodcuto.imagen; //le paso la url de la imagen
      imgProducto.alt = prodcuto.nombre; //

      const bodyProducto = document.createElement("div"); //este el el divsito, que va a contener el nombre y una breve descripcion del producto
      bodyProducto.className = "card-body"; //le pongo el atributo class

      const tituloProducto = document.createElement("h2"); //creo un h2
      tituloProducto.textContent = prodcuto.nombre; // le asigno al h2 el nombre del producto

      const breveDescripcionProducto = document.createElement("p"); // creo un parrafo p
      breveDescripcionProducto.textContent = prodcuto.materiales; // 🚸le asigno materiales al parrafo, hay que reveer esto

      const precioProducto = document.createElement("p")
      precioProducto.textContent = "$" + prodcuto.precio


      const detalleProdcuto = document.createElement("a");
      detalleProdcuto.textContent = "Detalle del producto";
      detalleProdcuto.href = `producto.html?id=${prodcuto.id}`;
      //aca lo que hago es agregar los "hijos" es decir los descendiente en el arbol del DOM

      bodyProducto.appendChild(tituloProducto); // le agrego la al bodyProducto el titulo
      bodyProducto.appendChild(breveDescripcionProducto); // le agrego la al bodyProducto la descripcionsita
      bodyProducto.appendChild(precioProducto)
      bodyProducto.appendChild(detalleProdcuto);
      cardProducto.appendChild(imgProducto); //imagen es hijo de cardProducto, o sea que está dentro de ese div
      cardProducto.appendChild(bodyProducto); // este es el div que contiene el titulo, la descripsionsita y el enlace "ver detalle"
      gridProducto.appendChild(cardProducto); // Le agrego al gridProducto todo lo anterior, porque este es el que va a contener toda la estructura, porqeu es la tarjetita principal y esto se va a repetir para todos los otros productos
    }
  } catch (err) {
    console.error("Error al cargar productos:", err);
    contenedorProducto.innerHTML =
      "<p>Ocurrió un error al cargar el producto.</p>";
  }
}
cargarTodosLosProductos();

// >>>>>>>>>>>>>>>>>>>>>>>>> Codigo de Mili <<<<<<<<<<<<<<<<<<<<<<<<<<<<

