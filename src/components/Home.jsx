import React from "react";
import styles from "../style/Home.module.css";

function Home() {
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
              We helps agencies and startups scale smarter — with dedicated
              professionals, high-quality solutions, and flexible engagement
              models that fit your workflow and goals.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>Let’s Talk</button>
            <button className={styles.secondaryBtn}>Explore Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
