import styles from '../page.module.css';

export const metadata = {
  title: 'About - NYU Computer Science',
  description: 'Learn about the CS Department at NYU',
};

export default function About() {
  return (
    <div className={styles.main}>
      <section className="section">
        <div className="container">
          <h1 className={styles.sectionTitle}>About the Department</h1>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.8' }}>
              The Computer Science Department at New York University's Courant Institute of Mathematical Sciences 
              is a world-renowned center for research and education. We are located in the heart of Greenwich Village, 
              one of the most vibrant and creative neighborhoods in New York City.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our faculty are leaders in their fields, receiving numerous awards and honors. 
              We offer a wide range of undergraduate and graduate programs, including degrees in 
              Computer Science, Data Science, and Information Systems.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              We are committed to fostering a diverse and inclusive community where students from all backgrounds 
              can thrive and innovate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
