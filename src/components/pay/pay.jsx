import React from "react";
import "./pay.css";
const Pay = () => {
  return (
    <div className="pay">
      <div className="pay__wrapper container">
        <div className="pay__card">
          <h5 className="pay__title">To'lov</h5>
          <p className="pay__text">
            Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting
          </p>
          <div className="pay__input">
            <input
              className="pay__namuna"
              type=" text"
              placeholder="Namuna: A777 yoki B999 yoki M333"
            />
          </div>

          <button className="pay__button">Tasdiqlash</button>
          <p className="pay__b">B - buyurtma uchun</p>
          <p className="pay__b"> A - akkount uchun</p>
          <p className="pay__b">M - rassrochkani so'ndirish uchun</p>
        </div>
      </div>
    </div>
  );
};

export default Pay;
