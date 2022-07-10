/* eslint-disable no-undef */
import React from "react";
import {render} from "react-dom";


const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
   
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, {
      name: "maria",
      animal: "cat",
      breed: "don't know",
    }),
    React.createElement(Pet, {
      name: "jack",
      animal: "dog",
      breed: "still don't know",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
