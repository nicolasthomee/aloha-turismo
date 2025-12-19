import { Link } from 'react-router-dom'

export function FleetCard({ item }) {
  return (
    <div className="fleet-card">
      <div className="fleet-image">
        <img src={item.image} alt={`Ônibus ${item.name}`} />
      </div>
      <div className="fleet-body">
        <div className="fleet-header">
          <h3>{item.name}</h3>
          <span className="muted">{item.year}</span>
        </div>
        <p className="muted">Capacidade: {item.capacity} passageiros</p>
        <div className="tags">
          {item.features.map((feature) => (
            <span key={feature} className="tag">
              {feature}
            </span>
          ))}
        </div>
        <Link className="text-button" to="/contato">
          Solicitar orçamento →
        </Link>
      </div>
    </div>
  )
}

