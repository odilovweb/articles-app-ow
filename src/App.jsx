import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RooterLayout from "./layouts/RooterLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactLayout from "./layouts/ContactLayout";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import ArticlesLayout from "./layouts/ArticlesLayout";
import Articles from "./pages/articles/Articles";
import ArticleDetail from "./pages/articles/ArticleDetail";

function App() {
  const [url, setUrl] = useState("http://localhost:3000/articles");

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RooterLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact/" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="articles/" element={<ArticlesLayout />}>
          <Route index element={<Articles />} />
          <Route path=":id" element={<ArticleDetail />} />
        </Route>
        {/*PAGE NOT FOUND - PAGE*/}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
