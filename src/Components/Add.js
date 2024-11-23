import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Add() {
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
    <form action="/addArticles" method="post">
      <input type="number" name="" placeholder="id" id="" />
      <br />
      <input type="text" name="" placeholder="Name of Article" id="" />
      <br />
      <input type="text" name="" placeholder="Category Of Article" id="" />
      <br />
      <input type="date" name="" placeholder="Date of Creation" id="" />
      <br />
      <input type="text" name="" placeholder="Name Of Creator" id="" />
      <br />

      <button onClick={Add()} type="submit" class="btn btn-primary">
        Add Article
      </button>
    </form>
  );
}
