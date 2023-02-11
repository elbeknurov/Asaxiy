import "./header.css";
import Burger from "../img/Burger.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper ">
        <div className="border">
          <div className="header__top container ">
            <nav className="header__nav">
              <img
                src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                alt="logo"
              />
              <form className="form" action="#">
                <input
                  className="header__input"
                  type="search"
                  placeholder="Qidirish..."
                />
                <button className="header__btn">Qidirish</button>
              </form>
              <ul className="list">
                <li className="item">
                  <a href="#">
                    <img
                      className="svg"
                      width={31}
                      height={24}
                      src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                      alt="logo"
                    />
                  </a>
                  <span className="sapn__pay">To'lov</span>
                </li>
                <li className="item">
                  <a href="#">
                    <img
                      width={29}
                      height={24}
                      src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                      alt="logo"
                    />
                  </a>
                  <span className="sapn__pay">Trek</span>
                </li>
                <li className="item">
                  <a href="#">
                    <img
                      width={35}
                      height={24}
                      src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
                      alt="logo"
                    />
                  </a>
                  <span className="sapn__pay">To'lov</span>
                </li>
                <li className="item">
                  <a href="#">
                    <img
                      width={23}
                      height={24}
                      src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                      alt=""
                    />
                  </a>
                  <span className="sapn__pay">Savatcha</span>
                </li>
                <li className="item">
                  <a href="#">
                    <img
                      width={27}
                      height={24}
                      src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                      alt=""
                    />
                  </a>
                  <span className="sapn__pay">Sevimlilar</span>
                </li>
                <li className="item">
                  <a href="#">
                    <img
                      width={27}
                      height={24}
                      src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                      alt=""
                    />
                  </a>
                  <span className="sapn__pay">Kabinet</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header__bottom container">
          <div className="bottom__wrapper">
            <div className="b">
              <a href="/">
                <img width={24} src={Burger} alt="" />
              </a>
              <p className="news">Barcha bo'limlar</p>
            </div>
            <p>
              <a className="news" href="/">
                Yangiliklar
              </a>
            </p>

            <p>
              <a className="news" href="/">
                Yangi kelganlar
              </a>
            </p>

            <p>
              <a className="news" href="/">
                Chegirmalar
              </a>
            </p>

            <p>
              <a className="news" href="/">
                Kitoblar
              </a>
            </p>

            <p>
              <a className="news" href="/">
                Telefonlar va gadjetlar
              </a>
            </p>

            <p>
              <a className="news" href="/">
                Televizorlar{" "}
              </a>
            </p>

            <p>
              <a className="news" href="/">
                Sport buyumlari{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
