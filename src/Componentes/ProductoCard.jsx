import { Link } from 'react-router-dom';
import '../Style/Style.css';

function ProductoCard({ producto, addToCart }) {
  return (
    <div className="producto-col mb-4" data-aos="zoom-in">
      <Link to={`/cafe/${producto.id}`} className="text-decoration-none text-dark">
        <div className="card producto-card h-100 card-clickable" role="button" aria-label={`Producto ${producto.title}`}>
          {producto.image && (
            <img src={producto.image} className="card-img-top" alt={producto.title} />
          )}

          <div className="card-body d-flex flex-column">
            <div className="card-header d-flex align-items-start">
              <h5 className="card-title">{producto.title}</h5>
            </div>

            <p className="card-text text-muted-2 small">{producto.description}</p>

            <div className="card-actions mt-auto d-flex justify-content-between align-items-center">
              <span className="price">AR$ {producto.precio}</span>
              <button
                className="btn-buy"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(producto);
                }}
                type="button"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductoCard;
