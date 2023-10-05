import { NavLink, Outlet } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";

function RooterLayout() {
  return (
    <>
      <header>
        <nav className="bg-slate-200 py-5 mb-9">
          <div className="align-element flex justify-between">
            <h1 className="text-4xl">Articles</h1>
            <div className="flex items-center gap-4">
              <NavLink
                className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
                to="articles"
              >
                Articles
              </NavLink>
              <NavLink
                className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
                to="/About"
              >
                About
              </NavLink>
              <NavLink
                className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
                to="/Contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
        <BreadCrumps />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RooterLayout;
