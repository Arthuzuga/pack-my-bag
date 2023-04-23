import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterLine,
  RiBallPenLine,
} from "react-icons/ri";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.name}>
        <span>&#169; 2023 Todos os direitos reservados.</span>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <Link href="/">
            <span className={styles.link}>Home</span>
            <RiBallPenLine className={styles.icon} />
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link
            href="https://www.linkedin.com/in/joao-arthur-tavares/"
            target="_blank"
          >
            <span className={styles.link}>LinkedIn</span>
            <RiLinkedinLine className={styles.icon} />
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href="https://github.com/arthuzuga" target="_blank">
            <span className={styles.link}>Github</span>
            <RiGithubLine className={styles.icon} />
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link
            href="https://www.instagram.com/joaoarthurtavares/"
            target="_blank"
          >
            <span className={styles.link}>Instagram</span>
            <RiInstagramLine className={styles.icon} />
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href="https://twitter.com/JoaoA_Tavares" target="_blank">
            <span className={styles.link}>Twitter</span>
            <RiTwitterLine className={styles.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
