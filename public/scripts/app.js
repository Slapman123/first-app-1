console.log("aca");

//JSX
// let template = <p>Ovo je nasa kompoenta</p>
let template = React.createElement(
    "p",
    null,
    "Ovo je nasa kompoenta"
);
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);