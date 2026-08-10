export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__mark">Jean Baptiste</span>
      <span>Coiffeur — partout où vous êtes</span>
      <a className="footer__legal" href="#/mentions">
        Mentions légales &amp; CGV
      </a>
      <span>© {new Date().getFullYear()} Nudes London Limited</span>
    </footer>
  )
}
