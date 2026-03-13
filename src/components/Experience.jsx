import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import drdoLogo from '../assets/drdo-logo.webp';

const Experience = () => {
    return (
        <section className="section wrapper-section" id="experience">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Experience</h2>
                    <div className="line"></div>
                </div>
                <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <a href="/drdo_internship.pdf" target="_blank" rel="noreferrer" className="cert-link">
                        <div className="timeline-item glass-card cert-card">
                            <div className="timeline-icon" style={{ overflow: 'hidden', padding: '5px', backgroundColor: 'white' }}>
                                <img 
                                    src={drdoLogo} 
                                    alt="DRDO Logo" 
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                                />
                            </div>
                            <div className="timeline-content">
                                <h3>DRDO Internship</h3>
                                <p className="timeline-issuer">Defence Research and Development Organisation</p>
                                <p style={{ marginTop: '10px', fontSize: '14px', color: '#ccc' }}>
                                    Click here to view the DRDO Internship details.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
