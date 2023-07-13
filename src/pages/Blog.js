import React, { useEffect } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { useState } from "react";
import axios from "axios";
import Articles from "../components/Articles";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [content, SetContent] = useState("");
  const [error, setError] = useState(false);

  const change = (e) => {
    console.log(e.target.value);
    SetContent(e.target.value);
  };

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChangeCapture={(e) => change(e)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData.map((article) => (
          <Articles key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default Blog;
