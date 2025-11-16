import { useState, useEffect } from 'react';
import ProductoCard from '../Componentes/ProductoCard';
import { productos as productosLocales } from '../data/Producto';
import '../Style/Style.css';

export default function Catalogo({ addToCart }) {
  const [productos, setProductos] = useState(productosLocales);
  const [busqueda, setBusqueda] = useState('');
  const [filtroOrigen, setFiltroOrigen] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Enriquecer productos locales con datos de la API
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(data => {
        const enriquecidos = productosLocales.map(local => {
          const match = data.find(apiItem =>
            apiItem.title.toLowerCase().includes(local.title.toLowerCase().split(' ')[0])
          );
          return {
            ...local,
            description: local.description || match?.description || 'Sin descripción',
            image: local.image || match?.image || '',
            origen: local.origen || match?.ingredients?.[0] || 'Desconocido',
          };
        });
        setProductos(enriquecidos);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('No se pudo cargar datos externos.');
        setLoading(false);
      });
  }, []);

  // Filtrado por búsqueda y origen
  const productosFiltrados = productos.filter(p => {
    const coincideBusqueda = p.title.toLowerCase().includes(busqueda.toLowerCase());
    const coincideOrigen = filtroOrigen ? p.origen === filtroOrigen : true;
    return coincideBusqueda && coincideOrigen;
  });

  const origenesUnicos = [...new Set(productos.map(p => p.origen).filter(Boolean))];

  return (
    <main className="container my-5">
      <h2 className="text-success mb-4 text-center fw-bold">Catálogo de Cafés</h2>

      {/* Búsqueda y filtro */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar café por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={filtroOrigen}
            onChange={(e) => setFiltroOrigen(e.target.value)}
          >
            <option value="">Todos los orígenes</option>
            {origenesUnicos.map((origen, index) => (
              <option key={index} value={origen}>{origen}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Resultado */}
      {loading ? (
        <p className="text-center text-muted">Cargando cafés...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <div className="row">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div key={producto.id} className="col-md-4">
                <ProductoCard producto={producto} addToCart={addToCart} />
              </div>
            ))
          ) : (
            <p className="text-muted text-center">No se encontraron productos.</p>
          )}
        </div>
      )}
    </main>
  );
}
