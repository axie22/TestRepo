import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h3>New York University</h3>
          <p>Courant Institute of Mathematical Sciences</p>
          <p>Department of Computer Science</p>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Faculty</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Locations</h4>
          <p>251 Mercer Street</p>
          <p>New York, NY 10012</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} New York University. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
