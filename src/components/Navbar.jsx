import React from 'react'
import styles from '../style/Navbar.module.css'
import logo from "../assets/Layer_1.png";
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.innerBox}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.menu}>
          <ul className={styles.menuBox}>
            <li className={styles.menuItemBox}>
              <div className={styles.menuItem}>Home</div>
            </li>
            <li className={styles.menuItemBox}>
              <div className={styles.menuItem}>About Us</div>
            </li>
            <li className={styles.menuItemBox} style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"}}>
              <div className={styles.menuItem}>What We Do</div>
              <FaAngleDown size={15} color="#0B3C7B" />
            </li>
            <li className={styles.menuItemBox}>
              <div className={styles.menuItem}>Technologies We Use</div>
            </li>
            <li className={styles.menuItemBox}>
              <div className={styles.menuItem}>How we work</div>
            </li>
            <li className={styles.menuItemBox}>
              <div className={styles.menuItem}>Let’s Talk</div>
            </li>
          </ul>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonText}>Get a Quote</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar