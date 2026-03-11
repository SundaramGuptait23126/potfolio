import React from 'react';
import { FaShieldAlt, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <section className="section wrapper-section">
            <div className="container split-container">

                <div className="split-column" id="certifications" data-aos="fade-right">
                    <div className="section-header">
                        <h2>Certifications</h2>
                        <div className="line"></div>
                    </div>
                    <div className="timeline">
                        <a href="/Network_Security_Fundamentals_Student_Certificate.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="timeline-item glass-card" style={{ cursor: 'pointer' }}>
                                <div className="timeline-icon"><FaShieldAlt /></div>
                                <div className="timeline-content">
                                    <h3>Palo Alto Cybersecurity Foundation</h3>
                                    <p className="timeline-issuer">Palo Alto Networks</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="split-column" id="education" data-aos="fade-left">
                    <div className="section-header">
                        <h2>Education</h2>
                        <div className="line"></div>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item glass-card">
                            <div className="timeline-icon"><FaGraduationCap /></div>
                            <div className="timeline-content">
                                <h3>Bachelor's Degree</h3>
                                <p className="timeline-issuer">G.L. Bajaj Institute of Technology and Management, Greater Noida</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
