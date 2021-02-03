import React from "react";
import { Link } from "react-router-dom";

const Discussion = () => {
  return (
    <div>
      <h1>Discussion</h1>
      <Link to="/discussion/post">
        <p>post a new topic</p>
      </Link>
    </div>
  );
};

export { Discussion };
