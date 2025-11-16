import '../Style/Style.css';

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-success text-center mb-4">Acerca de Caffinity</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="text-muted">
            En Caffinity celebramos el café de origen. Seleccionamos cada pack por su sabor, aroma y trazabilidad, trabajando junto a pequeños productores que cultivan con pasión y respeto por la tierra.
          </p>

          <div className="card bg-light p-3 mb-4">
            <h5 className="text-success">Nuestra misión</h5>
            <p className="mb-0">
              Democratizar el acceso al café de especialidad, conectando personas con historias detrás de cada grano.
            </p>
          </div>

          <ul className="list-group mb-4">
            <li className="list-group-item"><strong>🌱 Sostenibilidad:</strong> Apoyamos prácticas responsables</li>
            <li className="list-group-item"><strong>🤝 Comunidad:</strong> Valoramos el vínculo con productores</li>
            <li className="list-group-item"><strong>☕ Calidad:</strong> Cada café pasa por una curaduría experta</li>
          </ul>

          <p className="text-muted">
            Operamos desde Argentina y enviamos a todo el país. Cada pack está pensado para acompañarte en tus momentos favoritos.
          </p>

          <div className="alert alert-success text-center mt-4" role="alert">
            “El café no es solo una bebida, es una experiencia que conecta.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
