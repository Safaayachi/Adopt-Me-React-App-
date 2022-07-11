

import React from "react";
import { render } from "react-dom";

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      
      <SearchParams/>
    </div>
  );
};

/*const App = () => {
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
};*/
//ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App/>,document.getElementById("root"));
