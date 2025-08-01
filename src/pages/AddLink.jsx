import { useState } from "react";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
import styles from "./AddLink.module.css";

function AddLink() {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const shortUrl = nanoid(6);
    const apiUrl = `${import.meta.env.VITE_API_URL}/urls/add`;
    const access_token = localStorage.getItem("access_token");

    const body = {
      long_url: linkUrl,
      short_url: shortUrl,
      title: linkName,
      user_id: 1,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      const data = await response.json();
      console.log("DATA: ", data);
      navigate("/links");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      method="POST"
      className={styles.add_link}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={styles.text_input}>
        <label>
          Name of Link
          <input
            type="text"
            name="linkName"
            placeholder="Name..."
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
          />
        </label>
        <label>
          URL of Link
          <input
            type="text"
            name="linkUrl"
            placeholder="URL..."
            className={styles.link_url}
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">ZAP IT!</button>
    </form>
  );
}

export default AddLink;
