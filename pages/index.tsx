import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>π Portal</title>
        <meta name="description" content="Wave Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the
          <br />
          ποΈππΎπ
          <br />
          Neighbor Wave Portal
        </h1>
      </main>

      <footer className={styles.footer}>Powered by{" π¦"}</footer>
    </div>
  );
};

export default Home;
