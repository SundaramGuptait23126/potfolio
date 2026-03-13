import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <header id="hero" className="section hero-section">
            <div className="hero-content">
                <div className="profile-img-container" data-aos="zoom-in" data-aos-duration="1000">
                    <img src={profileImg} alt="Sundaram Gupta" className="profile-img" />
                    <div className="profile-glow"></div>
                </div>
                <p className="greeting" data-aos="fade-down" data-aos-delay="100">Hello, I'm</p>
                <div className="name-wrapper" data-aos="zoom-in" data-aos-delay="200">
                    <h1 className="name">Sundaram Gupta</h1>
                </div>
                <h2 className="role" data-aos="fade-up" data-aos-delay="300">
                    Backend Developer <span className="highlight">|</span> Cyber Security Enthusiast
                </h2>
                <div className="hero-btns" data-aos="fade-up" data-aos-delay="500">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact</a>
                </div>
            </div>
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
        </header>
    );
};

export default Hero;
