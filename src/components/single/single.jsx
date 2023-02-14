import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Single.css";

const Single = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});

  useEffect(() => {
    const data = fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setSingle(res));
  }, []);

  return (
    <div>
      <div class="single container ">
        <div className="single__text ">
          <div class="single__div">
            <a href="/">
              <img
                className="single__img"
                width="393"
                height="262"
                src={single.thumbnail}
                alt="logo"
              />
            </a>
          </div>
          <div class="single__items">
            <p class="single__item">{single.title}</p>
            <p class="single__text">{single.price} $</p>
            <p>
              <a className="single__rating" href="/">
                Rating: {single.rating}
              </a>
            </p>
            <p className="single__model">Model:{single.brand}</p>
            <p className="single__pay">● Sotuvda bor</p>
            <Link to="/" class="single__click">
              Ortga qaytish{" "}
            </Link>
            <button className="single__basket">Savatga qo'shish</button>
          </div>
        </div>
        <div className="definition ">
          <h4 className="definition__item">Mahsulot ta'rifi</h4>
          <p className="definition__text">{single.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
