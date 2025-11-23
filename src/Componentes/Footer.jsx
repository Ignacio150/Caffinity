import React from 'react';
import '../Style/Footer.css'; 

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="brand-sm">
          <span className="brand-mark" aria-hidden>☕</span>
          <span className="text-white fw-bold ms-2">Caffinity</span>
        </div>
        <div className="meta">
          <p className="mb-0">&copy; {new Date().getFullYear()} Caffinity</p>
          <small>Café de especialidad, trazabilidad y sostenibilidad.</small>
        </div>
        <div className="links">
          <a href="/catalogo">Catálogo</a>
          <a href="/Contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
