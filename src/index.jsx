import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
// import Slider from "./components/slider/slider";
import Cards from "./components/cards/cards";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      {/* <Slider /> */}
      <Cards />
    </div>
  </React.StrictMode>
);
