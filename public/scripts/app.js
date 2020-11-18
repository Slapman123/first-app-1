"use strict";

console.log("aca");

//JSX original
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "Aleksandar"
  ),
  React.createElement(
    "p",
    null,
    "Mihajlovic"
  )
);
//JSX za vezbu 
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "Aleksandar"
  ),
  React.createElement(
    "p",
    null,
    "Godine: 24"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
