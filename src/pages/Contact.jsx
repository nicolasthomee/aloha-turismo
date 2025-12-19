import { useEffect } from 'react'

export function Contact() {
  useEffect(() => {
    document.title = 'Contato | Aloha Turismo'
  }, [])

  return (
    <main className="section">
      <div className="container section-header">
        <div>
          <p className="pill light">Contato direto</p>
          <h1>Fale conosco</h1>
          <p className="muted">
            Orçamentos de fretamento, dúvidas sobre a frota e suporte às viagens
            divulgadas.
          </p>
        </div>
      </div>

      <div className="container contact-grid">
        <div className="card">
          <h3>Contatos oficiais</h3>
          <ul className="contact-list">
            <li>
              <span>WhatsApp</span>
              <a href="https://wa.me/5542999850000" target="_blank" rel="noreferrer">
                (42) 99985-0000
              </a>
            </li>
            <li>
              <span>Instagram</span>
              <a href="https://www.instagram.com/alohaturismoguarapuava/" target="_blank" rel="noreferrer">
                @alohaturismoguarapuava
              </a>
            </li>
            <li>
              <span>E-mail</span>
              <a href="mailto:alohaturismo@hotmail.com">alohaturismo@hotmail.com</a>
            </li>
          </ul>
          <div className="small-card">
            <p className="muted">
              Precisa divulgar sua viagem? Envie os detalhes e retornamos
              rapidamente.
            </p>
          </div>
        </div>
        <form className="card contact-form">
          <h3>Solicitar orçamento</h3>
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" required />
          </label>
          <label>
            Telefone
            <input type="tel" name="phone" placeholder="(xx) xxxxx-xxxx" required />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows="4" placeholder="Conte sobre sua necessidade" />
          </label>
          <button type="submit" className="pill-button-contact">
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}

