import React from 'react';
import ReactDOM from "react-dom";

const Ajax = (props) => {
  const { category, clue, score } = props;
  return (
    <div className="card">
      <h2>{category}</h2>
      <h2>{clue}</h2>
      <h3>{score}</h3>
    </div>
  );
};

export default Ajax;