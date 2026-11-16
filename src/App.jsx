import { Routes, Route } from 'react-router-dom';
import LayoutPrincipal from './layouts/LayoutPrincipal';
import Inicio from './pages/Inicio';
import Destinos from './pages/Destinos';
import DetalleDestino from './pages/DetalleDestino';
import Nosotros from './pages/Nosotros';
import NoEncontrado from './pages/NoEncontrado';
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="destinos" element={<Destinos />} />
        <Route path="destinos/:id" element={<DetalleDestino />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="*" element={<> {<NoEncontrado />} </>} />
      </Route>
    </Routes>
  );
}