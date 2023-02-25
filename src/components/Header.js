import React from "react";
import Form from "./Form";
import Login from "./Login";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <Login/>
      <h1>Hackathon Global Inc.™</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
