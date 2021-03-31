// var React = require("react");
import React from "react";
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

// ReactDOM.render(what to SharedWorker, where to show it);

ReactDOM.render(
  <div>
    <h1> what to show</h1>
    <p> here we try to have two elements in a div</p>
  </div>,
  document.getElementById("root")
);

// Vanella javaScript
var h1 = document.createElement("h1");
h1.innerHTML = "This way is like how we used to do it using vanella javaScript";
document.getElementById("root").appendChild(h1);
