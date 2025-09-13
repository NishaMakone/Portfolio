import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import DynamicTerminal from "./DynamicTerminal";
import { User } from "lucide-react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-wrapper">
          <h2 className="about-title">
            <User size={30} className="iconA" />
            About Me
          </h2>
          <div className="title-underline"></div>
          <br />
          <br />
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* About Text */}
            <p className="about-text">
              Hey there! 👋 I'm <strong>Nisha Makone</strong>, a{" "}
              <strong>Java Backend Developer</strong> with{" "}
              <strong>2 years of experience</strong> building clean, scalable
              applications using{" "}
              <strong>
                <em>Java</em>
              </strong>
              ,{" "}
              <strong>
                <em>Spring Boot</em>
              </strong>
              , and{" "}
              <strong>
                <em>REST APIs</em>
              </strong>
              . I enjoy crafting efficient{" "}
              <strong>
                <em>Microservices</em>
              </strong>
              , managing databases (hello{" "}
              <strong>
                <em>MySQL</em>
              </strong>{" "}
             /* <strong>
                <em>Oracle</em>
              </strong> {" "} */
              👋), and occasionally dabbling in{" "}
              <strong>
                <em>React</em>
              </strong>{" "}
              too.
              <br />
              From{" "}
              <strong>
                <em>Maven</em>
              </strong>{" "}
              to{" "}
             /* <strong>
                <em>Docker</em>
              </strong>*/
              ,{" "}
              <strong>
                <em>Git</em>
              </strong>{" "}
              to{" "}
              <strong>
                <em>Jenkins</em>
              </strong>
              , and a dash of{" "}
              <strong>
                <em>AWS</em>
              </strong>{" "}
              magic, these are my daily tools of the trade. Writing clean,
              maintainable code is my craft. Bonus points if it works on the
              first try (it usually doesn’t, but I act surprised 😄).
              <br />
              <br />
              <strong>Outside work</strong>, I'm a{" "}
              <strong>Yoga Enthusiast🧘‍♀️</strong> (still mastering the art of not falling asleep in savasana) 
              devotion, a <strong>Wanderluster 🌍</strong>chasing mountains, starlit skies, and beaches while collecting “deep” travel stories no one asked for,
               <strong>Foodie 🍕</strong>proudly eating my way through life one bite at a time.
              <br />
              Love <strong>spontaneous road trips 🛣️</strong>,{" "}
              <strong>binge-worthy TV shows 📺</strong>, and you've got the perfect mix of{" "}
              <strong>code</strong> and <strong>chaos</strong>.
              <br />
              <strong>Fun fact:</strong>I’ve mastered the art of opening 99 Chrome tabs without losing my sanity (mostly) 🖥️.
            </p>

            {/* My Coding Mantra Terminal Box */}
            <div className="mt-4">
              {/*<h3 className="text-2xl font-semibold mb-3">💻 My Coding Mantra</h3>*/}
              <DynamicTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
