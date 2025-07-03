import { useState, useEffect } from "react";
import styles from "./LinkList.module.css";

const LinkList = () => {
  const [linkItems, setLinkItem] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const url = "https://bzzt.fun/api/urls";
      const data = await fetch(url).then((response) => response.json());

      setLinkItem(data);
    };
    getQuotes();
  }, []);

  return (
    <>
      {linkItems && linkItems.length > 0 ? (
        <ul className={styles.linkList}>
          {linkItems.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={`https://bzzt.fun/${link.short_url}`}
                  title={`Short URL for ${link.title}`}
                  className={styles.listLink}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Links did not load...</p>
      )}
    </>
  );
};

export default LinkList;
