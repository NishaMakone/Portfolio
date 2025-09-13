import React from "react";
import "../styles/Experience.css";
import amdocsLogo from "../assets/amdocsLogo.png";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineering Associate",
    company: "Amdocs",
    logo: amdocsLogo,
    date: "May 2022 - Nov 2023",
    client: "Client: AT&T - DTV Billing System",
    responsibilities: [
      "Developed and enhanced core billing modules, improving processing speed by 25% through optimized backend logic",
      "Implemented scalable microservices to manage offers and billing rules, increasing maintainability and system clarity",
      "Designed REST APIs and integrated them with the React frontend, achieving 35% faster API response times.",
      "Resolved 95% of production issues within 24 hours via root-cause analysis and performance debugging.",
      "Automated CI/CD workflows with Jenkins, cutting manual efforts by 40% and release cycles by 30%",
      "-	Automated CI/CD workflows with Jenkins, cutting manual efforts by 40% and release cycles by 30%"
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="timeline-section">
      <br />
      <h2 className="timeline-title">
        <Briefcase size={30} className="iconE" />
        Experience
      </h2>
      <div className="title-underline"></div>
      <br />
      <br />
      <br />
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experienceData.map((item, idx) => (
          <motion.div
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="timeline-left">
              <div className="flip-card">
                <div className="flip-card-inner-wrapper">
                  <div className="flip-card-inner">
                    <div className="flip-card-front experience-card">
                      <div className="role-company-stack">
                        <h3>{item.role}</h3>
                        <h4>{item.company}</h4>
                      </div>
                      <div>
                        <h4>{item.client}</h4>
                      </div>
                    </div>
                    <div className="flip-card-back experience-card">
                      <h4>Responsibilities:</h4>
                      <ul>
                        {item.responsibilities.map((res, i) => (
                          <li key={i}>{res}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-middle">
              <div className="timeline-icon">
                <img src={item.logo} alt={`${item.company} logo`} />
              </div>
            </div>
            <div className="timeline-right">
              <span>{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
