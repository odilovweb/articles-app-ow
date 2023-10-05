import React from "react";

function Form() {
  return (
    <div className="align-element">
      <form className="flex flex-col items-center pt-5">
        <label className="mb-5">
          <span>Your Gmail:*</span>
          <input type="email" placeholder="article@support.me" required />
        </label>
        <label>
          <span className="flex flex-col">Your Question:*</span>
          <textarea required></textarea>
        </label>
        <button className="btn btn-circle">Send</button>
      </form>
    </div>
  );
}

export default Form;
