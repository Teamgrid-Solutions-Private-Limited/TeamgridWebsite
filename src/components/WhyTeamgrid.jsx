import React from 'react';
import styles from '../style/WhyTeamgrid.module.css';
import teamImage from '../assets/Rectangle 51.png';

function WhyTeamgrid() {
  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
        <div className={styles.headingWrapper}>
          <div className={styles.titleGroup}>
            <h2 className={styles.heading}>Why Teamgrid</h2>
            <p className={styles.subheading}>Flexible Talent. Reliable Delivery. Scalable Results.</p>
          </div>
          <button className={styles.exploreButton}>
            <span className={styles.buttonText}>Explore Services</span> <span className={styles.buttonArrow}>→</span>
          </button>
        </div>
        
        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <img src={teamImage} alt="Team collaboration" className={styles.teamImage} />
          </div>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Right Talent, Matched Your Needs</h3>
                <p className={styles.featureDescription}>
                  We align expertise with your business objectives and workflows.
                </p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Flexible Engagement Models</h3>
                <p className={styles.featureDescription}>
                  Work the way you prefer — retainers, sprints, or fixed-cost projects.
                </p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Trustworthy and Confidential</h3>
                <p className={styles.featureDescription}>
                  NDA-backed, process-driven, and fully aligned with your brand.
                </p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Optional Project Oversight</h3>
                <p className={styles.featureDescription}>
                  NDA-backed, process-driven, and fully aligned with your brand.
                </p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Seamless Collaboration</h3>
                <p className={styles.featureDescription}>
                  Slack, Trello, GitHub, or your tools — we work your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTeamgrid; 