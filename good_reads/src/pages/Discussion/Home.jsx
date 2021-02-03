import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>this is home</h1>
      <Link to="/discussion">dis</Link>
      <Link to="/trivia">Reiva</Link>
    </div>
  );
};

export { Home };
