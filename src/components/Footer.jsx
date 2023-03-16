import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer-expand-lg footer-custom">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <p style= {{color: 'white' }}> Todos los derechos reservados © {new Date().getFullYear()}</p>
                    </div>
                    <div className="col-md-6 text-end">
                    <p>Desarrollado por CristianMorales | 
                        <a className="icon-color" href="https://www.linkedin.com/in/cristian-morales-87311b18a/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a className="icon-color" href="https://github.com/caml02/" target="_blank" rel="noreferrer">
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