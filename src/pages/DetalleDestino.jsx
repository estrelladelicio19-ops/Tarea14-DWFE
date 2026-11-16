import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerDestino } from '../services/destinoService';

export default function DetalleDestino() {
  const { id } = useParams();
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    obtenerDestino(id)
      .then((dato) => setDestino(dato))
      .catch((error) => console.error(error));
  }, [id]);

  if (!destino) {
    return <p>Cargando información del destino...</p>;
  }

  return (
    <section className="detalle-seccion">
  <img className="detalle-img" src={destino.imagen} alt={destino.nombre} />
  <h2 className="detalle-titulo">{destino.nombre}</h2>
  <p className="detalle-dato"><strong>Ciudad:</strong> {destino.ciudad} ({destino.region})</p>
  <p className="detalle-dato"><strong>Categoría:</strong> {destino.categoria}</p>
  <p className="detalle-dato"><strong>Precio de entrada:</strong> S/ {destino.precioEntrada}</p>
  <p className="detalle-dato"><strong>Duración de visita:</strong> {destino.duracionVisita}</p>
  <p className="detalle-descripcion">{destino.descripcion}</p>
  
  <Link className="detalle-btn-volver" to="/destinos">Volver a Destinos</Link>
</section>
  );
}