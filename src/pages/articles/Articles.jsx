import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

function Articles() {
  const { data, error, isPending } = useFetch("http://localhost:3000/articles");
  return (
    <div className="align-element">
      {isPending && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      {data && (
        <ul className="flex gap-5 flex-col py-9">
          {data.map((item) => {
            return (
              <li className="card  bg-base-100 shadow-xl w-100" key={item.id}>
                <div className="card-body">
                  <h2 className="card-title ">{item.title}</h2>
                  <p>
                    <span className="font-bold">Author:</span> {item.author}
                  </p>
                  <div className="card-actions justify-end">
                    <NavLink to={item.id} className="btn btn-primary">
                      Read More
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Articles;
