// components/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Marjorie`&apos;`'s Portfolio | Tous droits réservés
          </p>
          <p>
            <a
              href="/"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
            Mentions légales
            </a>
          </p>
          <div className="social_icons">
            
            <a
              href="https://github.com/Zwina"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/marjorie-kehil/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-8 h-8 text-white" />
            </a>
            
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;