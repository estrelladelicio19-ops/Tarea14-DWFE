import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listarDestinos } from '../services/destinoService';

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);

 useEffect(() => {
  async function cargarDatos() {
    try {
      const datos = await listarDestinos();
      setDestinos(datos);
    } catch (error) {
      console.error(error);
    }
  }

  cargarDatos();
}, []);

  return (
    <section className="destinos-seccion">
  <h2 className="destinos-titulo">Destinos Turísticos</h2>
  
  <div className="contenedor-tarjetas">
    {destinos.map((destino) => (
      <article className="tarjeta" key={destino.id}>
        <img className="tarjeta-img" src={destino.imagen} alt={destino.nombre} />
        <h3 className="tarjeta-titulo">{destino.nombre}</h3>
        <p className="tarjeta-ciudad">{destino.ciudad}</p>
        
        <Link to={`/destinos/${destino.id}`} className="btn-detalle">
          Más detalle
        </Link>
      </article>
    ))}
  </div>
</section>
  );
}