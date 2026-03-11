import React from 'react';
import { FaCar, FaCheckCircle } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Featured Projects</h2>
                    <div className="line"></div>
                </div>
                <div className="projects-grid">

                    <div className="project-card glass-card" data-aos="zoom-in" data-aos-delay="100">
                        <div className="project-content">
                            <div className="project-icon"><FaCar /></div>
                            <h3>Self Driving Car using ESP32-CAM and Arduino UNO</h3>
                            <ul className="project-list-desc">
                                <li><FaCheckCircle /> Object detection using COCO dataset</li>
                                <li><FaCheckCircle /> Vehicle and pedestrian detection</li>
                                <li><FaCheckCircle /> Lidar sensor for obstacle detection</li>
                            </ul>
                            <div className="project-tech">
                                <span>ESP32-CAM</span>
                                <span>Arduino UNO</span>
                                <span>IoT</span>
                                <span>Lidar</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
