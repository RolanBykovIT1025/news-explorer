import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; 2024 Supersite, Powered by News API
        </p>
        <div className="footer__links">
          <a href="/" className="footer__link">Home</a>
          <a href="https://tripleten.com" className="footer__link" target="_blank" rel="noopener noreferrer">TripleTen</a>
          <a href="https://github.com" className="footer__social" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#222">
              <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.77c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="footer__social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#222">
              <path d="M0 1.146C0 .513.526 0 1.175 0h17.65C19.474 0 20 .513 20 1.146v17.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 20 0 19.487 0 18.854V1.146zm4.943 15.337V7.695H2.542v8.788h2.401zm-1.2-9.985c.837 0 1.358-.555 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.823 0-1.359.54-1.359 1.248 0 .693.52 1.248 1.327 1.248h.016zm4.908 9.985V11.65c0-.246.019-.493.09-.668.198-.493.649-1.002 1.406-1.002.992 0 1.389.756 1.389 1.864v4.639h2.401V11.5c0-2.535-1.353-3.714-3.158-3.714-1.456 0-2.108.8-2.47 1.362h-.02v-1.17h-2.388c.03.776 0 8.505 0 8.505h2.39v-.015z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
