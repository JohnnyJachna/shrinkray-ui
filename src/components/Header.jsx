import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>SHRINK RAY!</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/links">Links</Link></li>
          <li><Link to="/addLink">Add a Link</Link></li>
        </ul>
      </nav>
      <h2>PEW PEW!</h2>
    </header>
  )
}

export default Header;