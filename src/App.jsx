import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Home } from './pages/Home'
import { Fleet } from './pages/Fleet'
import { Trips } from './pages/Trips'
import { TripDetail } from './pages/TripDetail'
import { Contact } from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frota" element={<Fleet />} />
        <Route path="/viagens" element={<Trips />} />
        <Route path="/viagens/:slug" element={<TripDetail />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
