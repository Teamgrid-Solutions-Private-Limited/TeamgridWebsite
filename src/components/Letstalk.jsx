import styles from '../style/Letstalk.module.css';

function Letstalk() {
  return (
    <div className={styles.letstalkContainer}>
      <div className={styles.contentBox}>
        <h1 className={styles.mainHeading}>Let's Build Together</h1>
        <p className={styles.subHeading}>— Efficiently, Flexibly, and Reliably</p>
        <p className={styles.description}>Whether you're scaling a team or shipping a project, Teamgrid is your partner in dependable delivery.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonWhite}>Let's Talk</button>
          <button className={styles.buttonOrange}>Request a Free Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Letstalk; 