import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        SHRINK RAY!
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/links" className={styles.link}>
              Links
            </Link>
          </li>
          <li>
            <Link to="/addLink" className={styles.link}>
              Add a Link
            </Link>
          </li>
        </ul>
      </nav>
      <h2>PEW PEW!</h2>
    </header>
  );
};

export default Header;
