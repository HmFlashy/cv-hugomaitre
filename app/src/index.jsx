import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header"

const Index = () => {
  return (
    <div>
      <Header>fdflk</Header>
      <div>Hello React!</div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("content"));