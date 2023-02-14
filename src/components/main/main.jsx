import React from "react";
import Play from "../asaxiy app/asaxiyapp";
import Cards from "../cards/cards";
import Slider from "../slider/slider";
import Pagination from "../pagination/pagination";

const Main = () => {
  return (
    <div>
      <Slider />
      <Cards />
      <Play />
      <Pagination />
    </div>
  );
};

export default Main;
