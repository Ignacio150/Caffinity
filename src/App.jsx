import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Pages/Home';
import Catalogo from './Pages/Catalogo';
import Carrito from './Pages/Carrito';
import About from './Pages/About';
import Contacto from './Pages/Contacto';
import CafeDetalle from './Pages/CafeDetalle';
import './Style/Style.css';

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('caffinity_cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('caffinity_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  function addToCart(producto) {
    setCart(prev => {
      const found = prev.find(p => p.id === producto.id);
      if (found) {
        return prev.map(p => p.id === producto.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...producto, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function updateQty(id, qty) {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <Router>
      <Header cartCount={cart.reduce((s, p) => s + p.qty, 0)} />
      <main style={{ minHeight: 'calc(100vh - 160px)' }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/catalogo" element={<Catalogo addToCart={addToCart} />} />
          <Route path="/carrito" element={<Carrito cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} clearCart={clearCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cafe/:id" element={<CafeDetalle addToCart={addToCart} />} />
          <Route path="*" element={
            <div className="container text-center mt-5">
              <h2 className="text-success">Página no encontrada</h2>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
