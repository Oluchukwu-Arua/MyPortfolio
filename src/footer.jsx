import { FaTwitter, FaLinkedinIn, FaGooglePlusG, FaGithub } from "react-icons/fa";
import "./assets/css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-title">Have me make stuff for you.</h2>
        <p className="footer-text">
          To hire me, you can reach out via email: 
          <a href="mailto:aruaoluchilaw@gmail.com" className="footer-email">
            aruaoluchilaw@gmail.com
          </a>
        </p>

        <h3 className="footer-subtitle">Find me on</h3>

        <ul className="footer-social">
          <li>
            <a href="https://x.com/Oluchukwuarua" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/oluchukwu-arua-39b053301" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>

          <li>
            <a href="#">
              <FaGooglePlusG />
            </a>
          </li>

          <li>
            <a href="https://github.com/Oluchukwuarua" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>

        <hr className="footer-line" />

        <ul className="footer-copy">
          <li>© {new Date().getFullYear()} All rights reserved: Arua Oluchukwu Lawrencia</li>
          <li>Designed by Soft Nation </li>
        </ul>

      </div>
    </footer>
  );
}
