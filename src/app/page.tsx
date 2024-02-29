import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "../components/styles";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>ola mundo</h1>
      <Button>
        botão
      </Button>
    </main>
  );
}
