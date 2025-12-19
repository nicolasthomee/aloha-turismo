export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">Aloha Turismo</div>
          <p className="muted">
            Conectando pessoas aos melhores destinos com segurança e
            profissionalismo.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <div className="footer-title">Contato</div>
            <a href="https://wa.me/5542999850000" target="_blank" rel="noreferrer">
              WhatsApp
            </a> <br></br>
            <a href="https://www.instagram.com/alohaturismoguarapuava/" target="_blank" rel="noreferrer">
              Instagram
            </a> 
          </div>
          <div>
            <div className="footer-title">Endereço</div>
            <p className="muted">Guarapuava/PR</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Frota própria • Transporte rodoviário de passageiros • Atendimento em todo Paraná
      </div>
    </footer>
  )
}

