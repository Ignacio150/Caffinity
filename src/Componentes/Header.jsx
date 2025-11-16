import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

function Header({ cartCount = 0 }) {
  const [shrink, setShrink] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShrink(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const dark = localStorage.getItem('caffinity_dark') === 'true';
    setDarkMode(dark);
    if (dark) document.body.classList.add('dark-mode');
  }, []);

  function toggleDarkMode() {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('caffinity_dark', next);
    document.body.classList.toggle('dark-mode', next);
  }

  return (
    <header className={`site-header ${shrink ? 'header--shrink' : ''}`}>
      <div className="header-inner container">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden>☕</span>
          <span className="brand-name">Caffinity</span>
        </Link>

        <nav className="nav-main">
          <ul className="nav-list">
            <li><Link className="nav-link" to="/catalogo">Catálogo</Link></li>
            <li><Link className="nav-link" to="/about">Acerca</Link></li>
            <li><Link className="nav-link" to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-darkmode" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
          </button>

          <Link className="cart-btn" to="/carrito" aria-label="Carrito">
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
