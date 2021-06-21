import styles from "../styles/Home.module.css";
import Head from "next/head";
import MainFeatures from "../components/MainFeatures";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RayWare Trainer</title>
        <link rel="icon" href="/sprintray-icon.png" />
      </Head>
      {/* make an intro page here asking "what do you want to learn?" and then branch out to pages from there */}
    </div>
  );
}
