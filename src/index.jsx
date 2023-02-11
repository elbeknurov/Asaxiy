import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/slider";
import Cards from "./components/cards/cards";
import Footer from "./components/footer/footer";
import Play from "./components/asaxiy app/asaxiyapp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Slider />
      <Cards />
      <Play />
      <Footer />
    </div>
  </React.StrictMode>
);
