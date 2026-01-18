import styles from "../page.module.css";

export const metadata = {
  title: "About - NYU Computer Science",
  description: "Learn about the CS Department at NYU",
};

export default function About() {
  return (
    <div className={styles.main}>
      <section className="section">
        <div className="container">
          <h1 className={styles.sectionTitle}>About the Department</h1>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p
              style={{
                marginBottom: "20px",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              The Computer Science Department at New York University's Courant
              Institute of Mathematical Sciences is a world-renowned center for
              research and education. We are located in the heart of Greenwich
              Village, one of the most vibrant and creative neighborhoods in New
              York City.
            </p>
            <p>Highlight me</p>
            <p>Hey there</p>
          </div>
        </div>
      </section>
    </div>
  );
}
