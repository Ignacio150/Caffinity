import React from 'react';
import ProductoCard from '../Componentes/ProductoCard';
import { productos } from '../data/Producto';
import '../Style/Style.css';
import { BrowserRouter } from 'react-router-dom';

export default function Home({ addToCart }) {
  return (
    <main className="container my-4">
      {/* Intro */}
      <section className="intro my-5 text-center">
        <h1 className="mb-3" style={{ fontWeight: 800, color: 'var(--primary-green)' }}>
          Bienvenidos a Caffinity
        </h1>
        <h2 className="mb-3" style={{ fontWeight: 600, color: '#333' }}>
          Café de especialidad, directo de origen
        </h2>
        <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#555' }}>
          En Caffinity celebramos el café de especialidad. Cada variedad fue seleccionada por su perfil único de sabor, buscando que cada taza exprese el origen, el proceso y la pasión detrás del grano.
        </p>
      </section>

      {/* Productos destacados */}
      <h2 className="mb-4 text-center" style={{ color: 'var(--primary-green)', fontWeight: 800 }}>
        Nuestros productos destacados
      </h2>
      <div className="row">
        {productos.slice(0, 4).map((producto) => (
          <div key={producto.id} className="col-12 col-sm-6 col-md-3">
            <ProductoCard producto={producto} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </main>
  );
}
