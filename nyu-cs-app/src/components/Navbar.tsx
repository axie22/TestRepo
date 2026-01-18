import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>NYU</span> | Computer Science
        </Link>
        <div className={styles.links}>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/academics" className={styles.link}>
            Academics
          </Link>
          <Link href="/research" className={styles.link}>
            Research
          </Link>
          <Link href="/admissions" className={styles.btnLink}>
            Apply
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
