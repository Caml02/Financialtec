import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid text-center py-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer-text"> © {new Date().getFullYear()}. Todos los derechos reservados a FinancialTec</p>
                    </div>
                    <div className="col-md-6">
                        <p className="footer-text">Desarrollado por CristianMorales | 
                            <a href="https://www.linkedin.com/in/cristian-morales-87311b18a/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Caml02/Financialtec" target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
