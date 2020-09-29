import React from "react";
import "../App.css";
import Api from "../Api";

export default ({ list }) => {
  return (
    <div className="movie--title">
      {list.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};
