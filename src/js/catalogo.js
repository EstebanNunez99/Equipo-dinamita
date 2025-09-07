const gridProducto = document.querySelector("grid-productos")

async function cargarProducto() {

      try {
        
        const respuesta = await fetch("../json/catalogo_hermanos_jota.json"); // trgo el archivo JSON
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

        const productos = await respuesta.json(); // convierto el json a array de objetos que se llama productos
        
        for (const prodcuto of productos) {
            const cardProducto = document.createElement("div")
            cardProducto.className = "card-producto"
            
            const imgProducto = document.createElement("img")
            imgProducto.src = prodcuto.imagen
            imgProducto.alt = prodcuto.nombre

            const bodyProducto = document.createElement("div")
            bodyProducto.className = "card-body"

            const tituloProducto = document.createElement("h2")
            tituloProducto.textContent = prodcuto.nombre


            const breveDescripcionProducto = document.createElement("p")
            breveDescripcionProducto.textContent = prodcuto.materiales

            cardProducto.app
        }
        

        //cargo la parte del contenedor del producto
        nombrePagina.textContent = "Producto | " + producto.nombre // le pongo nombresito a la pag :D
        imagenDelProducto.src = encodeURI(producto.imagen); // cargo la imagen
        imagenDelProducto.alt = producto.nombre || "Producto";
        nombre.textContent = producto.nombre || "";
        descripcion.textContent = producto.descripcion || "";
        descripcionTexto.textContent = producto.descripcion || "";
        precio.textContent = "$ " + producto.precio || ""
        
        // console.log(producto)

        //cargo la tabla de caracateristicas
        //Verificar los encabezados, no todos tienen las mismas caracteristicas

        const clavesDelProdcuto = [] // voy a guardar las claves del producto para despues comparar con las que no quiero mostrar
        Object.keys(producto).forEach(clave => {
          clavesDelProdcuto.push(clave) // voy agregando las claves al arreglo
        });

        const claveNoMostrar = [
          "id",
          "nombre",
          "descripcion",
          "imagen",
          "precio"
        ] //en este objeto cargo las claves que no quiero mostrar en la tabla
        let contadorTabla = 1
        for (let i = 0; i < clavesDelProdcuto.length; i++) {
          
          if (!claveNoMostrar.includes(clavesDelProdcuto[i])) { //sino está en el arreglo claveNoMostrar entra
            // console.log("holaaa")  
            // console.log(clavesDelProdcuto[i]) // esta es la clave
            // console.log(producto[clavesDelProdcuto[i]]) //esto es el contenido o valor
            // console.log(contadorTabla)
            
            const tituloDelth =  clavesDelProdcuto[i].charAt(0).toUpperCase() + clavesDelProdcuto[i].slice(1); // convierto la primer letra en mayuscula, se podria converir y renderizar al mismo tiempo pero queda mas prolijo usando otra variable
            caracteristicasThs[contadorTabla].textContent = tituloDelth
            caracteristicasTds[contadorTabla].textContent = producto[clavesDelProdcuto[i]]
            contadorTabla = contadorTabla + 1
          }
        }
        // caracteristicasTds[1].textContent = producto.medidas || "";
        // caracteristicasTds[2].textContent = producto.materiales || producto.estructura || "";
        // caracteristicasTds[3].textContent = producto.acabado || "";
        // caracteristicasTds[4].textContent = producto.peso || producto.carga_maxima || "";
        // caracteristicasTds[5].textContent = producto.capacidad || producto.incluye || producto.apilables || "";
    

      } catch (err) {
        console.error("Error al cargar productos:", err);
        contenedorProducto.innerHTML = "<p>Ocurrió un error al cargar el producto.</p>";
      }
    }
    cargarProducto();