import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; <span id="year">{new Date().getFullYear()}</span> Sundaram Gupta. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="mailto:sundaramgupta990@gmail.com"><FaEnvelope /></a>
                    <a href="https://www.linkedin.com/in/sundaram-gupta-a29545283/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
