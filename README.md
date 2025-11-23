# ☕ Caffinity — Tienda digital de café

Caffinity es una tienda online de café desarrollada como proyecto final para Práctica Profesional II. Combina diseño moderno, experiencia de usuario fluida y datos reales para ofrecer una experiencia completa de compra. El sitio está construido con React, Bootstrap 5 y animaciones suaves, y cuenta con funcionalidades como carrito persistente, modo oscuro, y detalle de productos enriquecido con API externa.

> 🚧 Proyecto en estado beta. En constante mejora.

---

## 🌐 Enlaces

- **Sitio online:** [Caffinity](https://ignacio150.github.io/Caffinity/)
- **Repositorio:** [Ignacio150/Caffinity](https://github.com/Ignacio150/Caffinity)

---

## 🎨 Paleta de colores

- Verde principal: `#2e7d32`
- Verde oscuro: `#256029`
- Gris claro: `#f3f4f6`
- Fondo claro: `#ffffff`
- Fondo oscuro: `#121212`
- Texto oscuro: `#111`
- Texto claro: `#f1f1f1`

---

## 🧩 Componentes y Props

| Componente         | Props principales                  | Descripción                                                                 |
|--------------------|-------------------------------------|-----------------------------------------------------------------------------|
| `Header.jsx`       | `cartCount`                         | Encabezado con navegación, carrito y botón de modo oscuro                   |
| `Footer.jsx`       | —                                   | Pie de página con enlaces y branding                                       |
| `ProductoCard.jsx` | `producto`, `addToCart`             | Card individual para cada producto con botón de compra                     |
| `Catalogo.jsx`     | —                                   | Página con grilla de productos, búsqueda y filtro por país                 |
| `CafeDetalle.jsx`  | `:id` (vía `useParams`)             | Página de detalle con datos locales + API externa                          |
| `Carrito.jsx`      | —                                   | Página de carrito con listado, totales y botón de compra                   |
| `Contacto.jsx`     | —                                   | Formulario con validación HTML y estructura semántica                      |

---

## 🔌 APIs utilizadas

- [SampleAPIs Coffee API](https://api.sampleapis.com/coffee/hot)  
  Se utiliza para enriquecer los datos locales de los productos con descripciones reales de cafés por ID.

---

## 🛠️ Tecnologías y librerías

- **React SPA** con React Router
- **Bootstrap 5** para diseño responsive
- **CSS modular** con variables y estructura clara
- **AOS (Animate On Scroll)** para animaciones suaves
- **LocalStorage** para carrito persistente y modo oscuro
- **Vite** como bundler para desarrollo rápido

---

## 📦 Funcionalidades destacadas

- ✅ Catálogo con búsqueda y filtro por país
- ✅ Detalle de producto con datos locales + API externa
- ✅ Carrito funcional con persistencia
- ✅ Modo oscuro con toggle 
- ✅ Animaciones suaves al hacer scroll
- ✅ Diseño responsive y visualmente atractivo
- ✅ Página de contacto con validación
- ✅ Página 404 personalizada

---

src/ ├── Componentes/ │   ├── Header.jsx │   ├── Footer.jsx │   ├── ProductoCard.jsx ├── Pages/ │   ├── Home.jsx │   ├── Catalogo.jsx │   ├── Carrito.jsx │   ├── CafeDetalle.jsx │   ├── About.jsx │   ├── Contacto.jsx ├── data/ │   └── Producto.js ├── Style/ │   ├── Style.css │   ├── Header.css ├── App.jsx
---


## 🗣️ Autor

**Ignacio Ismael Morales**  
Apasionado por el diseño centrado en el usuario, la claridad visual y la experiencia fluida.  
Este proyecto refleja una combinación de estética, funcionalidad y código limpio.


---

## 🎥 Video demo

> (Agregá el link a tu video de presentación cuando esté listo)


## 📁 Estructura del proyecto

[Estructura del proyecto](https://github.com/Ignacio150/Caffinity/blob/main/public/img/Estructura%20Completa..png)

Caffinity/ ├── public/ │ └── img/ # Imágenes de productos (packs de café) ├── src/ │ ├── Componentes/ # Componentes reutilizables │ │ ├── Header.jsx # Encabezado con navegación y modo oscuro │ │ ├── Footer.jsx # Pie de página con branding │ │ ├── ProductoCard.jsx # Card individual para cada producto │ │ └── PackCard.jsx # Card para packs (si está separado) │ │ ├── Pages/ # Páginas principales del sitio │ │ ├── Home.jsx # Página de inicio │ │ ├── Catalogo.jsx # Catálogo con búsqueda y filtros │ │ ├── Carrito.jsx # Página de carrito │ │ ├── CafeDetalle.jsx # Detalle de producto con API externa │ │ ├── About.jsx # Página “Acerca” │ │ ├── Contacto.jsx # Formulario de contacto │ │ └── NotFound.jsx # Página 404 personalizada │ │ ├── data/ │ │ └── Producto.js # Array de productos con imágenes y datos │ │ ├── Style/ # Archivos CSS │ │ ├── Style.css # Estilos globales y de producto │ │ ├── Header.css # Estilos del header │ │ └── Footer.css # Estilos del footer (si está separado) │ │ ├── App.jsx # Componente raíz con rutas │ └── main.jsx # Punto de entrada de React ├── README.md # Documentación del proyecto ├── package.json # Dependencias y scripts └── vite.config.js # Configuración de Vite
