import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Update() {
  const [id, setId] = useState(" ");
  const [name, setName] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [date, setDate] = useState(" ");
  const [creatorName, setCreatorName] = useState(" ");

  useEffect(function updateArticles(id) {
    setId(id);
    setName(name);
    setCategory(category);
    setDate(date);
    setCreatorName(creatorName);
  }, []);

  axios
    .put("http://localhost:9011/updateArticles", {
      id: id.current.value,
      name: name.current.value,
      category: category.current.value,
      date: date.current.value,
      creatorName: creatorName.current.value,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <form action="/updateArticles" method="post">
      <input type="number" name="" value={id} placeholder="id" id="" />
      <br />
      <input
        type="text"
        name=""
        value={name}
        placeholder="Name of Article"
        id=""
      />
      <br />
      <input
        type="text"
        name=""
        value={category}
        placeholder="Category Of Article"
        id=""
      />
      <br />
      <input
        type="date"
        name=""
        value={date}
        placeholder="Date of Creation"
        id=""
      />
      <br />
      <input
        type="text"
        name=""
        value={creatorName}
        placeholder="Name Of Creator"
        id=""
      />
      <br />

      <button
        onClick={updateArticles(id)}
        type="submit"
        class="btn btn-primary"
      >
        Update Article
      </button>
    </form>
  );
}
