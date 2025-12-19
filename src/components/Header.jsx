import { NavLink, Link } from 'react-router-dom'
import logoAloha from "../assets/logo.png";

const navLinkClass = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link'

export function Header() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link to="/" className="brand hidden md:block">
          <img 
            src={logoAloha}
            alt="Aloha Turismo"
            className="brand-logo"
            style={{ height: "80px", width: "auto" }}
          />
        </Link>
        <nav className="nav">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/frota" className={navLinkClass}>
            Frota
          </NavLink>
          <NavLink to="/viagens" className={navLinkClass}>
            Viagens
          </NavLink>
          <NavLink to="/contato" className={navLinkClass}>
            Contato
          </NavLink>
        </nav>
        <a
          className="pill-button hidden md:inline-flex"
          href="https://wa.me/5547999999999?text=Quero+um+or%C3%A7amento+de+transporte"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar orçamento
        </a>
      </div>
    </header>
  )
}

