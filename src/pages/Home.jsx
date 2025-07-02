import styles from "./Home.module.css";
import shrinkray from "../assets/shrinkray.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <img
        src={shrinkray}
        className="shrinkray-image"
        alt="Image of a shrink ray"
      />
      <small>
        <a href="https://www.vecteezy.com/free-png/space">
          Space PNGs by Vecteezy
        </a>
      </small>
    </div>
  );
};

export default Home;
