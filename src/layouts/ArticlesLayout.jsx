import { Outlet } from "react-router-dom";

function ArticlesLayout() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mb-3">My Articles</h2>
      <hr />
      <Outlet />
    </div>
  );
}

export default ArticlesLayout;
