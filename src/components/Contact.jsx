import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock API call delay
        setTimeout(() => {
            alert('Thank you for reaching out! Your message has been sent successfully.');
            e.target.reset();
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Contact Me</h2>
                    <div className="line"></div>
                </div>
                <div className="contact-wrapper glass-card">
                    <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
                        <h3>Get In Touch</h3>
                        <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="c-icon"><FaEnvelope /></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:sundaramgupta990@gmail.com">sundaramgupta990@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="c-icon"><FaLinkedin /></div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/sundaram-gupta-a29545283/" target="_blank" rel="noopener noreferrer">Sundaram Gupta</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container" data-aos="fade-left" data-aos-delay="200">
                        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <><span>Sending...</span> <FaSpinner className="fa-spin" /></>
                                ) : (
                                    <><span>Send Message</span> <FaPaperPlane /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
