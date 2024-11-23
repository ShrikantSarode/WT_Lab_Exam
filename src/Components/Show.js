import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Show() {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9011/getArticles")
      .then((response) => {
        console.log(response.data);
        setarticles(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form action="/getArticles" method="get">
      <input type="number" name="" placeholder="id" id="" />
      <br />
      <button onClick={Show()} type="submit" class="btn btn-primary">
        Show Articles
      </button>
    </form>
  );
}
