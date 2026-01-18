import styles from './about.module.css';

export const metadata = {
  title: 'About - NYU Computer Science',
  description: 'Learn about the CS Department at NYU',
};

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About the Department</h1>
            <p className={styles.heroSubtitle}>
              Advancing the frontiers of computer science education and research at the heart of New York City.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.missionSection}>
            <p className={styles.missionText}>
              The Computer Science Department at New York University's Courant Institute of Mathematical Sciences
              is a world-renowned center for research and education. We are located in the heart of Greenwich Village,
              one of the most vibrant and creative neighborhoods in New York City.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Our Location</h3>
              <p>
                Situated in Warren Weaver Hall and 60 Fifth Avenue, our facilities provide a
                collaborative environment where students and faculty interact daily, surrounded by
                the energy of downtown Manhattan.
              </p>
            </div>

            <div className={styles.card}>
              <h3>World-Class Faculty</h3>
              <p>
                Our faculty members are recipients of numerous prestigious awards, including
                Turing Awards, National Medals of Science, and more. They are leaders driving
                innovation in AI, Theory, Systems, and beyond.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Diverse Community</h3>
              <p>
                We are committed to fostering a diverse and inclusive community. Our students
                come from all backgrounds, bringing unique perspectives that drive creative
                solutions to complex global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
