import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

import indexStyle from "./index.css"

const Index = () => {
  return (
    <div id={ indexStyle.index }>
      <Header>fdflk</Header>
      <div>Hello React! ye</div>
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById("content"));
