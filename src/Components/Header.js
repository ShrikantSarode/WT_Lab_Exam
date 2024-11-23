import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="container">
        <nav class="nav">
          <Link class="nav-link active" aria-current="page" to="/addArticles">
            Add
          </Link>
          <Link class="nav-link" href="#">
            Update
          </Link>
          <a class="nav-link" href="#">
            Show
          </a>
        </nav>
      </div>
    </>
  );
}
