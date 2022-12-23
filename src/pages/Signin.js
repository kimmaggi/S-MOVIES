import React from "react";
import "../styles/Signin.css";

function Signin() {
  return (
    <div className="signin">
      <div className="rightSide">
        <h1> Sign In</h1>
        <form id="signin-form" method="POST">
        <label htmlFor="email">Email</label> <br/>
          <input name="email" placeholder="Enter email..." type="email" /> <br/>
          <label htmlFor="name">password</label> <br/>
          <input name="name" placeholder="Enter password..." type="text" /> <br/>
          <p>did you forget your password ?</p>
          <button type="submit"> Registration </button> <br/>
        </form>
      </div>
    </div>
  );
}

export default Signin;
