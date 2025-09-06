// const contendorProducto = document.getElementById("contenedor-producto")
// const iamgenDelProducto = document.getElementById("imagen-del-producto")

// const idProducto = 1

// async function traerProductos() {

//     try {
//         const respuesta  = await fetch("../json/catalogo_hermanos_jota.json") //traigo el archivo json
//         if (!respuesta.ok) throw new Error("Error al cargar el JSON"); //sino hay repuesta del json se muestra un error

//         const productos = await respuesta.json() // convierto el json en un arreglo llamado productos

//         const productoDelJSON = productos.find(idProducto)

//         iamgenDelProducto.src = productoDelJSON.imagen

//         contendorProducto.appendChild(iamgenDelProducto)

//     }

//     catch (error) {
//     console.error("Error al cargar cursos:", error);
//     const msg = document.createElement("p");
//     msg.textContent = "No se pudieron cargar los cursos 😢";
//     courseList.appendChild(msg);
//   }
// }

// traerProductos() vamo de nuevo de cerito acá

const contenedorProducto = document.getElementById("contenedor-producto");
const imagenDelProducto = document.getElementById("imagen-del-producto");
const nombrePagina = document.getElementById("nombre-de-la-pagina");

const nombre = document.querySelector(".nombre-producto");
const descripcion = document.querySelector(".descripcion-producto");
const precio = document.querySelector(".precio");
const descripcionTexto = document.querySelector(".descripcion-texto p");
const caracteristicasTds = document.querySelectorAll(
  ".caracteristicas-prodcuto tbody tr td"
);

const params = new URLSearchParams(window.location.search); // lleva al producto que el cual seleccionamos en el catalogo
const idProducto = parseInt(params.get("id")); // lleva al producto que el cual seleccionamos en el catalogo

async function cargarProducto() {
  try {
    const respuesta = await fetch("../json/catalogo_hermanos_jota.json"); // trgo el archivo JSON
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

    const productos = await respuesta.json(); // convierto el json a array de objetos

    const producto = productos.find((p) => p.id === idProducto); // busco el producto

    if (!producto) {
      // si no existe, mostramos mensaje y salimos
      contenedorProducto.innerHTML = "<p>Producto no encontrado</p>";
      return;
    }

    nombrePagina.textContent = "Producto | " + producto.nombre; // para que aparezca en la página el nombre del producto nms :D

    // acá rellenamos los "campos" que dejamos sin contenido en el html
    imagenDelProducto.src = encodeURI(producto.imagen); // cargo la imagen
    imagenDelProducto.alt = producto.nombre || "Producto";
    nombre.textContent = producto.nombre || "";
    descripcion.textContent = producto.descripcion || "";
    descripcionTexto.textContent = producto.descripcion || "";

    precio.textContent = "$ " + producto.precio || "";

    //Verificar los encabezados, no todos tienen las mismas caracteristicas
    //agregado
    const contenedorTabla = document.querySelector(".caracteristicas-prodcuto");
    contenedorTabla.innerHTML = ""; // Limpiamos el contenido

    const caracteristicasAExcluir = [
      "id",
      "nombre",
      "descripcion",
      "imagen",
      "precio",
    ];
    const caracteristicas = Object.keys(producto).filter(
      (key) => !caracteristicasAExcluir.includes(key)
    );

    const tablaHTML = `
      <table>
          <caption>Características del producto</caption>
          <thead>
              <tr>
                  ${caracteristicas
                    .map(
                      (key) =>
                        `<th>${key
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}</th>`
                    )
                    .join("")}
              </tr>
          </thead>
          <tbody>
              <tr>
                  ${caracteristicas
                    .map((key) => `<td>${producto[key]}</td>`)
                    .join("")}
              </tr>
          </tbody>
      </table>
    `;
    contenedorTabla.innerHTML = tablaHTML;

    //final
  } catch (err) {
    console.error("Error al cargar productos:", err);
    contenedorProducto.innerHTML =
      "<p>Ocurrió un error al cargar el producto.</p>";
  }
}

// ejecutamos la función
cargarProducto();
