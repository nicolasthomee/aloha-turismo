import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FleetCard } from '../components/FleetCard'
import { fleet } from '../data/fleet'

export function Fleet() {
  useEffect(() => {
    document.title = 'Frota | Aloha Turismo'
  }, [])

  return (
    <main className="section">
      <div className="container section-header">
        <div>
          <p className="pill light">Frota própria</p>
          <h1>Ônibus preparados para levar seu grupo com tranquilidade</h1>
          <p className="muted">
            Manutenção preventiva, motoristas experientes e recursos de conforto
            para trajetos curtos ou longos.
          </p>
        </div>
        <Link className="text-button" to="/contato">
          Solicitar orçamento →
        </Link>
      </div>

      <div className="container fleet-grid">
        {fleet.map((item) => (
          <FleetCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

