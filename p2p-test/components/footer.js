import Link from "next/link"
import styles from "./footer.module.css"
//if you want to do js stuff put it in /public and link it like this
//change the localhost links in prod

export default function Footer() {
  return (
    <footer >
      <hr/>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="/about.html">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/send.html">webrtc sendtest </a>
        </li>
        <li className={styles.navItem}>
          <a href="/receive.html">webrtc receivetest</a>
        </li>
      </ul>
    </footer>
  )
}
