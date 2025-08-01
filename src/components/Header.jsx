import { Link } from "react-router";
import { useAuth } from "../AuthContext";

import styles from "./Header.module.css";

const Header = () => {
  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        SHRINK RAY!
      </Link>
      <nav>
        <ul>
          {isAuth ? (
            <>
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
              <li>
                <Link to="/logout" className={styles.link}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className={styles.link}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className={styles.link}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <h2>PEW PEW!</h2>
    </header>
  );
};

export default Header;

// // Import useAuth Hook

// const Header = () => {
//     // Import isAuth variable from useAuth hook
//     const { isAuth } = useAuth();
//     // Add conditional rendering to current nav items
//     {isAuth ? (
//         <>
//             <li>
//                 <Link to='/links'>Links</Link>
//             </li>
//             <li>
//                 <Link to='/addLink'>Add a Link</Link>
//             </li>
//             <li>
//                 <Link to='/logout'>Logout</Link>
//             </li>
//         </>
//         ) : (
//         <>
//             <li>
//                 <Link to='/login'>Login</Link>
//             </li>
//             <li>
//                 <Link to='/register'>Register</Link>
//             </li>
//         </>
//     )}
