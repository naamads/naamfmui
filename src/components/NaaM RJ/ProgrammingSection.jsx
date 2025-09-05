import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Mic, Radio, Headphones } from "lucide-react";
import programsData from "/src/data/programs.json";
import "./ProgrammingSection.scss";

const ProgrammingSection = () => {
  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="programming-section">
      <div className="bg-overlay" />

      {/* Floating Icons */}
      <div className="floating-icon mic">
        <Mic className="w-8 h-8" />
      </div>
      <div className="floating-icon radio" style={{ animationDelay: "1s" }}>
        <Radio className="w-10 h-10" />
      </div>

      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>
            <span className="neon-gradient">Live Programming</span>
          </h2>
          <p>
            Meet our talented radio jockeys who bring you the best in music,
            entertainment, and engaging conversations.
          </p>
        </motion.div>

        {/* Program Blocks */}
        {programsData.map((program, i) => (
          <motion.div
            key={program.id}
            ref={i === 0 ? ref1 : i === 1 ? ref2 : ref3}
            variants={containerVariants}
            initial="hidden"
            animate={
              i === 0
                ? inView1
                  ? "visible"
                  : "hidden"
                : i === 1
                ? inView2
                  ? "visible"
                  : "hidden"
                : inView3
                ? "visible"
                : "hidden"
            }
            className={`program-block ${i % 2 === 1 ? "reverse-layout" : ""}`}
          >
            <div className="grid-block">
              {/* RJ Card */}
              <motion.div variants={itemVariants} className="rj-card">
                <div className={`card neon-${program.color}`}>
                  <div className="profile">
                    <img src={program.image} alt={program.name} />
                    <div className="live-indicator">
                      <div className="dot" />
                    </div>
                  </div>
                  <div>
                    <h3>{program.name}</h3>
                    <p className={`show ${program.color}`}>{program.show}</p>
                  </div>
                </div>

                <div className="info-row">
                  <div className="badge">
                    <Clock className="icon" />
                    <span>{program.time}</span>
                  </div>
                  <div className="badge">
                    <Headphones className="icon" />
                    <span>{program.experience}</span>
                  </div>
                </div>

                <div className="specialty">
                  <p className="label">Specialty</p>
                  <p className={`text-${program.color}`}>{program.specialty}</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants} className="program-content">
                <h4>{program.show}</h4>
                <p>{program.description}</p>
                <div className="buttons">
                  <button className="btn-gradient">Listen Live</button>
                  <button className={`btn-outline-${program.color}`}>
                    View Schedule
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammingSection;
