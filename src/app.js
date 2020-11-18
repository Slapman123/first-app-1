console.log("aca");

//JSX original
let template = (
  <div>
    <p>Aleksandar</p>
    <p>Mihajlovic</p>
  </div>
);
//JSX za vezbu 
let template2 = (
  <div>
    <p>Aleksandar</p>
    <p>Godine: 24</p>
  </div>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
