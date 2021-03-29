import Link from "next/link"
import styles from "./footer.module.css"
//if you want to do js stuff put it in /public and link it like this
//change the localhost links in prod

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr/>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="http://localhost:3000/about.html">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="http://localhost:9000/send.html">test send</a>
        </li>
        <li className={styles.navItem}>
          <a href="http://localhost:9000/receive.html">test receive</a>
        </li>
      </ul>
    </footer>
  )
}
