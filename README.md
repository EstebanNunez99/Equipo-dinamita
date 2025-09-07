# Nombre del Proyecto: Vidriera Hermanos Jota
# **N° Grupo: 12 - Nombre del Grupo: Equipo dinamita**

## 📌 Integrantes
-González Lourdes
-Martinez Federico Agustin
-Nuñez Esteban
-Puebla Máximo Nahuel
-Valdéz Milagros



## 📝 Descripción del proyecto
Este proyecto consiste en el desarrollo de un **catálogo de productos dinámico para la web**.  
La aplicación permite:

- **Renderizar productos** de manera automática desde un archivo `JSON`.
- **Visualizar el detalle de un producto específico**, incluyendo nombre, imagen, descripción, precio y características.
- **Realizar búsquedas** en el catálogo filtrando productos por nombre o materiales desde un cuadro de búsqueda interactivo.

El objetivo es simular el catálogo de una tienda online, cargando los datos de forma dinámica con **JavaScript**.

---

## ⚙️ Funcionalidad implementada
1. **Catálogo de productos dinámico**:  
   Todos los productos se cargan automáticamente en la página `catalogo.html` a partir del archivo `catalogo_hermanos_jota.json`.

2. **Detalle de producto**:  
   Desde el catálogo se puede acceder a la página `producto.html` para ver más información sobre un producto específico, usando el `id` pasado por la URL.

3. **Buscador en tiempo real**:  
   Un input en el encabezado permite filtrar productos a medida que el usuario escribe, mostrando únicamente los que coinciden con la búsqueda.

---

## 💻 Tecnologías utilizadas
- **HTML5** → para la estructura de las páginas (`index.html`, `catalogo.html`, `producto.html`, etc.).
- **CSS3** → para los estilos, con archivos modulares (`styles.css`, `catalogo.css`, `style-producto.css`, etc.).
- **JavaScript (ES6+)** → para la lógica dinámica del catálogo, renderizado de productos, detalle de producto y búsqueda.
- **JSON** → utilizado como fuente de datos (`catalogo_hermanos_jota.json`).

---

## 🚀 Cómo usar el proyecto
1. Clonar el repositorio.
2. Abrir `catalogo.html` en el navegador para visualizar todos los productos.
3. Usar el cuadro de búsqueda para filtrar productos.
4. Hacer clic en “Detalle del producto” para acceder a la vista individual de cada uno.

---

## 📂 Estructura del proyecto
/css
├── styles.css
├── headerStyles.css
├── footer.css
├── catalogo.css
├── Presentacion.css
└── style-producto.css
/js
├── catalogo.js
└── producto.js
/json
└── catalogo_hermanos_jota.json
/img
└── (imagenes de los productos y recursos)
index.html
catalogo.html
producto.html
README.md