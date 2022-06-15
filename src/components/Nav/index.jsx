import { Link } from "react-router-dom"
import styles from "./Nav.module.sass"

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link to="users" className={styles.join_us} >Join us</Link>
      <Link to="/">Homepage</Link>
    </nav>
  )
}