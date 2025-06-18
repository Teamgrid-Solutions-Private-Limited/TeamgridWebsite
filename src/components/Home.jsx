import React, { useState } from "react";
import styles from "../style/Home.module.css";
import { BsArrowRight } from "react-icons/bs";
import teamgridLogo from "../assets/Group 8.svg"; // Replace with your logo asset

const techIcons = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    name: "Figma",
    info: "Figma is a collaborative design tool for UI and UX.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    name: "Bootstrap",
    info: "Bootstrap is a CSS framework for responsive design.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    name: "WordPress",
    info: "WordPress is a CMS for building websites.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    name: "Shopify",
    info: "Shopify is an e-commerce platform.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    name: "React",
    info: "React is a JavaScript library for building UI.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    name: "PostgreSQL",
    info: "PostgreSQL is an advanced open-source database.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    name: "Material UI",
    info: "Material UI is a React UI framework based on Material Design.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919842.png",
    name: "Expo",
    info: "Expo is a framework for React Native apps.",
  },
];

function OrbitHero() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.mainBox}>
      <div className={styles.heroBox}>
        <div className={styles.taglineBox}>
          <p className={styles.tagline}>Powering growth through talent</p>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.headingBox}>
            <p className={styles.heading}>
              Extend Your Team, Accelerate Your Growth
            </p>
          </div>
          <div className={styles.descriptionBox}>
            <p className={styles.description}>
              We help agencies and startups scale smarter — with dedicated
              professionals, high-quality solutions, and flexible engagement
              models that fit your workflow and goals.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>
              <p className={styles.primaryBtnText}>Let’s Talk</p>
            </button>
            <button className={styles.secondaryBtn}>
              <p className={styles.secondaryBtnText}>Explore Services</p>
              <BsArrowRight size={16} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.orbitContainer}>
        <div className={styles.orbit}>
          {techIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.name}
              className={styles.orbitImg}
              style={{ "--i": index }}
              onClick={() => setSelected(icon)}
            />
          ))}

          <div className={styles.upperLayer2}>
            <div className={styles.upperLayer}>
              <div className={styles.centerLogo}>
                <img
                  src={teamgridLogo}
                  alt="center logo"
                  className={styles.teamgridLogo}
                />
              </div>
            </div>
          </div>
        </div>

        {selected && (
          <div className={styles.descriptionOverlay}>
            <h2>{selected.name}</h2>
            <p>{selected.info}</p>
            <span onClick={() => setSelected(null)}>&times; Close</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrbitHero;
