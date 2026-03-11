import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>About Me</h2>
                    <div className="line"></div>
                </div>
                <div className="about-content">
                    <div className="about-text glass-card" data-aos="fade-up" data-aos-delay="100">
                        <FaQuoteLeft className="quote-icon" />
                        <p>
                            I am a passionate <strong>Backend Developer</strong> with a strong foundation in building
                            secure, scalable systems. My core interests lie at the intersection of modern web
                            development, <strong>IoT (Internet of Things)</strong>, and <strong>Cyber Security</strong>.
                        </p>
                        <p>
                            I love tackling complex problems, whether it's configuring hardware modules like ESP32-CAM,
                            securing network communications, or building robust MERN stack applications. I am constantly
                            learning and exploring new ways to integrate software with hardware seamlessly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
