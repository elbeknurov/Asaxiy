import "./Cards.css";
import React, { useEffect, useState } from "react";
// import Shopping from "../img/Shopping.svg";
// import StarAsaxiy from "../img/StarAsaxiy.svg";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const [card, setCard] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCard(data.products);
      });
  }, []);

  return (
    <div className="cards ">
      <div className="cards__wrapper container">
        <div className="cardsss">
          <p className="cards__item">Yangi chegirmalar</p>

          <div className="cards__discounts">
            {card.map((item) => {
              return (
                <div className="card">
                  <div className="img__div">
                    <a href="/">
                      <img
                        width={160}
                        height={160}
                        src={item.thumbnail}
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="card__items">
                    <p className="card__item">{item.title}</p>
                    <a href="/">{item.rating}</a>

                    <p className="price__item">{item.price}</p>
                    <button
                      onClick={() => navigate(`/single/${item.id}`)}
                      className="one__click"
                    >
                      Sotib olish{" "}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
