import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productos as productosLocales } from '../data/Producto';
import '../Style/Style.css';

export default function CafeDetalle({ addToCart }) {
  const { id } = useParams();
  const productoLocal = productosLocales.find(p => p.id === parseInt(id));
  const [producto, setProducto] = useState(productoLocal);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (!productoLocal) return;

    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(data => {
        const match = data.find(apiItem =>
          apiItem.title.toLowerCase().includes(productoLocal.title.toLowerCase().split(' ')[0])
        );
        if (match) {
          setApiData(match);
          setProducto(prev => ({
            ...prev,
            description: prev.description || match.description,
            image: prev.image || match.image,
            origen: prev.origen || match.ingredients?.[0] || 'Desconocido',
          }));
        }
      })
      .catch(err => console.error('Error al cargar datos externos:', err));
  }, [productoLocal]);

  if (!producto) {
    return <p className="text-center text-danger mt-5">Producto no encontrado.</p>;
  }

  return (
    <main className="container my-5">
      <div className="card mb-4 shadow-sm" data-aos="zoom-in">
        {producto.image && (
          <img
            src={producto.image}
            className="card-img-top"
            alt={producto.title}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h3 className="card-title text-success fw-bold">{producto.title}</h3>
          <p className="card-text">{producto.description}</p>

          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>Origen:</strong> {producto.origen}
            </li>
            <li className="list-group-item">
              <strong>Precio:</strong> AR$ {producto.precio}
            </li>
            {apiData?.ingredients && (
              <li className="list-group-item">
                <strong>Ingredientes:</strong> {apiData.ingredients.join(', ')}
              </li>
            )}
          </ul>

          <button
            className="btn btn-success"
            onClick={() => addToCart(producto)}
          >
            Comprar
          </button>
        </div>
      </div>
    </main>
  );
}