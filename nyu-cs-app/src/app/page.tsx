import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>
            Innovating at the Intersection of <br />
            <span className={styles.highlight}>Theory and Practice</span>
          </h1>
          <p className={styles.heroSubtitle}>
            The Department of Computer Science at NYU's Courant Institute 
            is a leader in research and education.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/admissions" className="btn">Apply Now</Link>
            <Link href="/research" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Explore Research</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Why NYU CS?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>World-Class Research</h3>
              <p>
                From AI and Machine Learning to Cybersecurity and Systems, 
                our faculty are pioneering new frontiers in technology.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Prime Location</h3>
              <p>
                Located in the heart of Greenwich Village, we are connected 
                to NYC's vibrant tech ecosystem.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Interdisciplinary</h3>
              <p>
                Collaborate with other departments like Math, Data Science, 
                and the Tandon School of Engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
