import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { trips } from '../data/trips'

export function TripDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const trip = trips.find((item) => item.slug === slug)

  useEffect(() => {
    if (trip) {
      document.title = `${trip.destination} | Viagem divulgada por parceiro`
    }
  }, [trip])

  if (!trip) {
    return (
      <main className="section">
        <div className="container">
          <h1>Viagem não encontrada</h1>
          <p className="muted">
            Não encontramos a viagem solicitada. Confira a lista completa ou
            fale conosco.
          </p>
          <div className="hero-actions">
            <button className="pill-button" onClick={() => navigate(-1)}>
              Voltar
            </button>
            <Link className="pill-button ghost" to="/viagens">
              Ver todas
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <div className="hero-detail">
        <img src={trip.cover} alt={trip.destination} />
        <div className="hero-detail-overlay">
          <p className="pill light">Viagem divulgada por parceiro</p>
          <h1>{trip.destination}</h1>
          <p className="muted">{trip.date}</p>
        </div>
      </div>

      <div className="container detail-grid">
        <div>
          <div className="alert">
            Viagem organizada por parceiro terceiro. Aloha Turismo atua apenas
            na divulgação e transporte rodoviário quando contratado.
          </div>
          <p>{trip.description}</p>
          <h4>O que está incluso</h4>
          <ul className="included-list">
            {trip.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Contato do organizador</h3>
          <p className="muted">{trip.organizer.name}</p>
          <div className="cta-actions">
            <a
              className="pill-button"
              href={`https://wa.me/${trip.organizer.whatsapp}?text=Tenho+interesse+em+${encodeURIComponent(trip.destination)}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="pill-button ghost"
              href={trip.organizer.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="small-card">
            <p className="muted">
              Precisa de transporte para seu grupo? Fale com a Aloha para
              fretar um ônibus sob medida.
            </p>
            <Link className="text-button" to="/contato">
              Solicitar transporte →
            </Link>
          </div>
        </div>
      </div>

      <div className="container gallery">
        {trip.gallery.map((src, index) => (
          <img key={src} src={src} alt={`${trip.destination} ${index + 1}`} />
        ))}
      </div>
    </main>
  )
}

