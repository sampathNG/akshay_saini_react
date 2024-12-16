import React from "react";
import ReactDom from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
// const JsxHeading = <h1>Hello World from JSX</h1>;
const JsxHeading = () => <h1>Hello World from JSX</h1>;
// FUNCTIONAL COMPONENTENT
const truth = true;

const title = (
  <div>
    <h1>sampath title</h1>
  </div>
);
const HeadingComponent = () => {
  return (
    <>
      {title}
      <h2>{truth + 1}</h2>
      <JsxHeading />
      <h1>Hello World from Functional Component</h1>
    </>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);
