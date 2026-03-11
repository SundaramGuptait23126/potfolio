import React from 'react';
import { FaCode, FaTerminal, FaServer, FaUserSecret, FaSearchLocation, FaMicrochip, FaCamera, FaTools } from 'react-icons/fa';
import { SiJavascript, SiNodedotjs, SiLinux } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Technical Skills</h2>
                    <div className="line"></div>
                </div>
                <div className="skills-grid">

                    {/* Programming */}
                    <div className="skill-card glass-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="skill-icon"><FaCode /></div>
                        <h3>Programming</h3>
                        <ul className="skill-list">
                            <li><FaTerminal /> C++</li>
                            <li><SiJavascript /> JavaScript</li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="skill-card glass-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="skill-icon"><FaServer /></div>
                        <h3>Backend</h3>
                        <ul className="skill-list">
                            <li><SiNodedotjs /> MERN Stack</li>
                        </ul>
                    </div>

                    {/* Cyber Security Tools */}
                    <div className="skill-card glass-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="skill-icon"><FaUserSecret /></div>
                        <h3>Cyber Security Tools</h3>
                        <ul className="skill-list">
                            <li><SiLinux /> Kali Linux</li>
                            <li><FaSearchLocation /> Wireshark</li>
                        </ul>
                    </div>

                    {/* Hardware / IoT */}
                    <div className="skill-card glass-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="skill-icon"><FaMicrochip /></div>
                        <h3>Hardware / IoT</h3>
                        <ul className="skill-list">
                            <li><FaCamera /> ESP32-CAM</li>
                            <li><FaTools /> Hardware Configuration</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
