import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="align-element text-center">
      <h1 className="items-center mb-4 font-bold text-5xl">
        Page Not Found :(
      </h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non illo
        dolorem ipsa labore explicabo quae quaerat, error maiores! Tenetur?
      </p>
      <Link to="/" className="btn btn-secondary">
        Home 🔚
      </Link>
    </div>
  );
}

export default PageNotFound;
