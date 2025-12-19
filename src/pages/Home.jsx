import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fleet } from '../data/fleet'
import { trips } from '../data/trips'
import { FleetCard } from '../components/FleetCard'
import { TripCard } from '../components/TripCard'

export function Home() {
  useEffect(() => {
    document.title = 'Aloha Turismo | Frota própria e viagens divulgadas'
  }, [])

  const featuredTrips = trips.slice(0, 3)

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Frota própria • Transporte rodoviário</div>
            <h1>
              Conectando você aos melhores destinos com conforto e segurança.
            </h1>
            <p className="lead">
              Aloha Turismo opera com frota própria e divulga viagens de
              parceiros selecionados. Profissionalismo, pontualidade e cuidado
              com cada passageiro.
            </p>
            <div className="hero-actions">
              <Link className="pill-button" to="/frota">
                Conhecer a Frota
              </Link>
              <Link className="pill-button ghost" to="/viagens">
                Ver Viagens
              </Link>
            </div>
            <div className="hero-tags">
              <span className="tag">Conforto</span>
              <span className="tag">Segurança</span>
              <span className="tag">Experiência</span>
              <span className="tag">Parcerias confiáveis</span>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="images/fronteira.jpg"
              alt="Ônibus Aloha Turismo em viagem"
            />
            <div className="hero-overlay">
              <div>
                <p className="muted">Mais de 10 anos</p>
                <strong>Experiência em transporte rodoviário</strong>
              </div>
              <div>
                <p className="muted">Operação dedicada</p>
                <strong>Frota própria e manutenção preventiva</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-header">
          <div>
            <p className="pill light">Frota Aloha</p>
            <h2>Ônibus preparados para cada tipo de viagem</h2>
            <p className="muted">
              Conforto, manutenção em dia e configuração sob medida para grupos
              de diferentes tamanhos.
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
      </section>

      <section className="section alt">
        <div className="container section-header">
          <div>
            <p className="pill light">Viagens divulgadas</p>
            <h2>Destinos em destaque operados por parceiros</h2>
            <p className="muted">
              Selecionamos viagens de parceiros confiáveis. A Aloha atua na
              divulgação e garante transporte seguro.
            </p>
          </div>
          <Link className="text-button" to="/viagens">
            Ver todas as viagens →
          </Link>
        </div>
        <div className="container trips-grid">
          {featuredTrips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container cta-block">
          <div>
            <p className="pill light">Pronto para embarcar?</p>
            <h3>Solicite um orçamento ou fale direto com nossa equipe</h3>
            <p className="muted">
              Atendimento rápido para fretamentos, eventos corporativos e
              excursões.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="pill-button"
              href="https://wa.me/5547999999999?text=Quero+um+or%C3%A7amento"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
            <Link className="pill-button ghost" to="/contato">
              Ver contatos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

