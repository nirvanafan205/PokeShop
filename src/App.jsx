import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <div className="text-sky-200">Hello World</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
