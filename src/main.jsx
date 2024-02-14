import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Alta from './pages/Alta.jsx'
import Carrito from './pages/Carrito.jsx'
import Contacto from './pages/Contacto.jsx'
import Nosotros from './pages/Nosotros.jsx'
import { ProductoProvider } from './contexts/ProductoContext'
import { CarritoProvider } from './contexts/CarritoContext.jsx'
import Calendario from './pages/Calendario.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvider>
      <ProductoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/alta" element={<Alta />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/calendario" element={<Calendario />} />
          </Routes>
          <Footer />

        </BrowserRouter>
      </ProductoProvider>
    </CarritoProvider>
  </React.StrictMode>,
)
