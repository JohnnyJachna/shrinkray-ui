import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.main_layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
