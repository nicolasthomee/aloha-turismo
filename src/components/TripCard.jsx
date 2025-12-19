import { Link } from 'react-router-dom'

export function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <div className="trip-image">
        <img src={trip.cover} alt={trip.destination} />
        {trip.isNew && <span className="chip chip-new">Novo</span>}
      </div>
      <div className="trip-body">
        <h3>{trip.destination}</h3>
        <p className="muted">{trip.date}</p>
        <p>{trip.description}</p>
        <div className="trip-actions">
          <Link className="pill-button secondary" to={`/viagens/${trip.slug}`}>
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  )
}

