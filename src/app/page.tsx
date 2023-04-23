import Image from "next/image";
import styles from "./page.module.css";
import { MdOutlineLuggage } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cover}>
        <Image
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3231&q=80"
          alt="luggage"
          width={1157}
          height={769}
          className={styles.image}
        />
        <span>by @anete_lusina on Unplash</span>
      </div>
      <div className={styles.title}>
        <h1>Bem-vinde ao Arrume Minha Mala</h1>
        <h2>Seu assistente virtual para ajudar a organizar sua viagem</h2>
      </div>
      <div className={styles.tableSection}>
        <h3 className={styles.supportText}>
          <span>
            Responda nossos formulários para que possamos indicar a melhor
            bagagem para sua viagem!
          </span>
          <span>
            Diremos quais itens sugerimos levar e qual o peso total de sua
            bagagem.
          </span>
        </h3>
        <div className={styles.tableContent}>
          <h3 className={styles.tableHeader}>Resumo da mala</h3>
          <div className={styles.tableData}>
            <h4>Básicos</h4>
            <ul className={styles.list}>
              <li className={styles.option}>
                <span>1x Passaporte</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Carteira</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Celular</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Fones de ouvido</span>
                <span>300g</span>
              </li>
            </ul>
          </div>
          <div className={styles.tableData}>
            <h4>Higiene</h4>
            <ul className={styles.list}>
              <li className={styles.option}>
                <span>1x Escova de dentes</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Desodorante</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Shampoo</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Maquiagem</span>
                <span>300g</span>
              </li>
            </ul>
          </div>
          <div className={styles.tableData}>
            <h4>Roupas</h4>
            <ul className={styles.list}>
              <li className={styles.option}>
                <span>1x Camisa</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Calça</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Vestido</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Pijama</span>
                <span>300g</span>
              </li>
            </ul>
          </div>
          <div className={styles.tableData}>
            <h4>Calçados & Acessórios</h4>
            <ul className={styles.list}>
              <li className={styles.option}>
                <span>1x Par de tênis</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Par de meias</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Relógio</span>
                <span>300g</span>
              </li>
              <li className={styles.option}>
                <span>1x Boné</span>
                <span>300g</span>
              </li>
            </ul>
          </div>
          <h3>Total: 5kg</h3>
          <span>Tipo de bagagem: Cabine</span>
        </div>
      </div>
      <div className={styles.cover}>
        <Image
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=6000&q=80"
          alt="travel"
          width={1157}
          height={769}
          className={styles.image}
        />
        <span>by @directormesut on Unplash</span>
        <Link className={styles.callToAction} href="/form">
          Vamos começar! <MdOutlineLuggage size={28} />
        </Link>
      </div>
    </main>
  );
}
