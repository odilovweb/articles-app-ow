import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <>
      <div className="align-element">
        <h1 className="text-3xl font-bold">Contact</h1>
        <h1>
          <span className="font-bold">Phone: </span>{" "}
          <a href="tel:998337180008">+998 33 718 00 08</a>
        </h1>
        <h1>
          <span className="font-bold">Gmail: </span>
          <a href="mailto:mirzohidodilov@gmail.com">mirzohidodilov@gmail.com</a>
        </h1>
        <h1>
          <span className="font-bold">Location: </span>
          <span className="italic">Uzbekistan Fegrana Altiarik</span>
        </h1>
      </div>
      <div className="align-element">
        <h1 className="font-bold">
          <NavLink to="faq" className="underline">
            FAQ
          </NavLink>
        </h1>
        <h1 className="font-bold">
          <NavLink className="underline" to="form">
            Any Questions
          </NavLink>
        </h1>
        <br />
        <hr />
      </div>
      <div className="align-content">
        <Outlet />
      </div>
    </>
  );
}

export default ContactLayout;
