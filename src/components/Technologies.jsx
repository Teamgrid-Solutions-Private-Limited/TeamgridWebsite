import React from 'react';
import styles from '../style/Technologies.module.css';
import reactIcon from '../assets/Group 16.svg';
import wordpressIcon from '../assets/Group 17.svg';
import woocommerceIcon from '../assets/vector.svg';
import shopifyIcon from '../assets/Group 19.svg';
import nodejsIcon from '../assets/Group 20.svg';
import postgresqlIcon from '../assets/postgresql.svg';
import mongodbIcon from '../assets/Group 22.svg';
import figmaIcon from '../assets/Group 23.svg';
import postmanIcon from '../assets/Group 24.svg';

const technologies = [
  {
    icon: reactIcon,
    title: 'ReactJS',
    desc: 'Build fast, interactive UIs with component-based architecture.'
  },
  {
    icon: wordpressIcon,
    title: 'WordPress',
    desc: 'Flexible CMS for custom websites and content-rich platforms.'
  },
  {
    icon: woocommerceIcon,
    title: 'WooCommerce',
    desc: 'Power your online store with WordPress integration.'
  },
  {
    icon: shopifyIcon,
    title: 'Shopify',
    desc: 'Launch beautiful, high-converting e-commerce stores with ease.'
  },
  {
    icon: nodejsIcon,
    title: 'Node.js',
    desc: 'Build fast, scalable servers with non-blocking architecture.'
  },
  {
    icon: postgresqlIcon,
    title: 'PostgreSQL',
    desc: 'Reliable, powerful open-source relational database.'
  },
  {
    icon: mongodbIcon,
    title: 'MongoDB',
    desc: 'Flexible NoSQL database for modern applications.'
  },
  {
    icon: figmaIcon,
    title: 'Figma',
    desc: 'Collaborative UI/UX design and prototyping platform.'
  },
  {
    icon: postmanIcon,
    title: 'Postman',
    desc: 'Simplify API development, testing, and collaboration.'
  },
];

function Technologies() {
  return (
    <div className={styles.technologiesSection}>
      <div className={styles.headerRow}>
        <div className={styles.headerText}>
          <h2 className={styles.title}>Our Capabilities</h2>
          <p className={styles.subtitle}>Modern Technologies & Collaborative Tools</p>
        </div>
        <button className={styles.ctaButton}>Get a Quote →</button>
      </div>
      <div className={styles.cardsGrid}>
        {technologies.map((tech, idx) => (
          <div className={styles.card} key={tech.title}>
            <img src={tech.icon} alt={tech.title} className={styles.icon} />
            <div className={styles.cardText}>
              <div className={styles.cardTitle}>{tech.title}</div>
              <div className={styles.cardDesc}>{tech.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies; 