import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

function ArticleDetail() {
  const id = useParams().id;
  let apiUrl = "http://localhost:3000/articles/" + id;
  const { data, error, isPending } = useFetch(apiUrl);

  return (
    <div className="align-element text-center py-9">
      <h1 className="text-center text-xl font-bold mb-6 ">Article Detail</h1>
      {isPending && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {data && (
        <>
          <div className="flex card w-96 bg-base-100 shadow-xl mx-auto">
            <figure>
              <img srcSet={data.image} alt="Article Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <h3>
                <span className="font-bold">Author:</span> {data.author}
              </h3>
              <p>{data.body}</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" to="../">
                  All Articles
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleDetail;
