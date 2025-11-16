import React from 'react';
import '../Style/Style.css';

export default function Carrito({ cart, removeFromCart, updateQty, clearCart }) {
  const total = cart.reduce((s, p) => {
    const precioNum = parseFloat(String(p.precio).replace('.', '').replace(',', '.'));
    return s + precioNum * p.qty;
  }, 0).toFixed(2);

  return (
    <main className="container my-5">
      {/* Encabezado ya lo agregaste */}

      {cart.length === 0 ? (
        <p className="text-center text-muted">El carrito está vacío.</p>
      ) : (
        <>
          {/* Tarjetas de productos */}
          {cart.map((p) => (
            <div key={p.id} className="card mb-3 shadow-sm rounded">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{p.title}</h5>
                  <p className="text-muted small mb-0">AR$ {p.precio}</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={p.qty}
                    onChange={(e) => updateQty(p.id, parseInt(e.target.value))}
                    className="form-control form-control-sm"
                    style={{ width: '60px' }}
                  />
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(p.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total corregido */}
          <div className="bg-light p-3 rounded text-end mb-4">
            <h4 className="mb-0 text-success fw-bold">Total: AR$ {total}</h4>
          </div>

          {/* Botones finales */}
          <div className="d-flex justify-content-end gap-3">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              🗑️ Vaciar
            </button>
            <button className="btn btn-success">
              💳 Pagar
            </button>
          </div>
        </>
      )}
    </main>
  );
}
