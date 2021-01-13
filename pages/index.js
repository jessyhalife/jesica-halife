import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesica Halife</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          <h1 className={styles.title} style={{textAlign:"left", marginBottom: "0.5em"}}>Hi 👋🏻</h1>
          <h2 className={styles.title}>I'm Jesica Halife</h2>
          <h2>
            I build <span className={styles.marker}>things.</span>
          </h2>
          <code className={styles.code}>
            Software Engineer, 10+ years of experience
          </code>
        </p>
        <div style={{ textAlign: "center" }}>
          <div className={styles.contact}>
            <a href="https://www.linkedin.com/in/jesica-halife/">Linkedin</a>
            <a href="https://github.com/jessyhalife">Github</a>
          </div>
          <h3 className={styles.mail}>
            or reach me at{" "}
            <a href="mailto:halife.jessy@gmail.com">halife.jessy@gmail.com</a>{" "}
            🚀
          </h3>
        </div>
      </main>
    </div>
  );
}
