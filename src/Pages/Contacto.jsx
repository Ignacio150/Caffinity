import { useState } from 'react';
import "../Style/Style.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Solicitud enviada:", formData);
    setEnviado(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-success text-center mb-4">Contacto</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm" data-aos="zoom-in">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Enviar solicitud
            </button>

            {enviado && (
              <div className="alert alert-success mt-3 text-center" role="alert">
                ¡Gracias por contactarte! Tu solicitud fue enviada correctamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
