import React from "react";
import "./delivery.css";
import saxiyshop from "../img/saxiyshop.mp4";
const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__wrapper container">
        <div className="delivery__cards">
          <div className="delivery__left">
            <h4 className="delivery__title">Buyurtma holati</h4>
            <p className="delivery__text">
              Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma
              raqami sizning raqamingizga SMS-xabar shaklida yuborilgan
            </p>
            <div className="delivery__inputt">
              <p className="delivery__script">Buyurtma raqami</p>
              <input className="input__text" type="text" />
            </div>
            <div className="delivery__input">
              <p className="delivery__script">
                Buyurtma berilgandagi telefon raqami
              </p>
              <input className="input__text" type="number" name="tel" id="" />
            </div>
            <p className="sign">Rasmdagi belgilarni kiriting</p>
            <div className="sign__div">
              <input className="input__sign" type="text" />
              <img
                src="https://login.kundalik.com/captcha/true/61a2d1c6-5da3-4ac2-be74-7019b6c07be8"
                alt="logo"
              />
            </div>
            <button className="delivery__dispatch">Jo`natish</button>
          </div>
          <div className="delivery__right">
            <video
              className="video"
              width={475}
              src={saxiyshop}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
