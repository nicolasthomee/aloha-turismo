import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trips } from '../data/trips'
import { TripCard } from '../components/TripCard'

export function Trips() {
  useEffect(() => {
    document.title = 'Viagens divulgadas | Aloha Turismo'
  }, [])

  return (
    <main className="section">
      <div className="container section-header">
        <div>
          <p className="pill light">Viagens com parceiros</p>
          <h1>Destinos em destaque</h1>
          <p className="muted">
            As viagens abaixo são organizadas por parceiros selecionados. A
            Aloha Turismo atua na divulgação e fornece transporte com frota
            própria.
          </p>
        </div>
        <Link className="text-button" to="/contato">
          Quero divulgar minha viagem →
        </Link>
      </div>
      <div className="container trips-grid">
        {trips.map((trip) => (
          <TripCard key={trip.slug} trip={trip} />
        ))}
      </div>
    </main>
  )
}

