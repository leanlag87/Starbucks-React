import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container-user">
        <a className="footer__link-user" href="#">
          iniciar sesion
        </a>
        <a className="footer__link-user" href="#">
          registrarse
        </a>
      </div>

      <div className="footer__container-redes">
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
      </div>

      <div className="footer__container-contacto">
        <a className="footer__link-contacto" href="#">
          contactanos aqui
        </a>
      </div>
    </footer>
  );
};

export default Footer;
