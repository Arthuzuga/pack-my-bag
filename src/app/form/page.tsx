import styles from "./page.module.css";
import Link from "next/link";

const FormPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>
          Para podermos te ajudar melhor, selecione qual a melhor experiência
          para você
        </h1>
        <div className={styles.path}>
          <Link href="/form/manual" className={styles.link}>
            Deixa que escolho meus itens
          </Link>
          <Link href="/form/automatic" className={styles.link}>
            Escolha os itens por mim
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FormPage;
