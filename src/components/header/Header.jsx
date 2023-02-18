import "./header.css";
import Burger from "../img/Burger.svg";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper ">
        <div className="border">
          <div className="header__top container ">
            <nav className="header__nav">
              <Link to="/">
                <img
                  width={150}
                  src="https://txt.1001fonts.net/img/txt/dHRmLjQwLjAwOGRmZi5VMkY0YVhrLjA/eavm.regular.webp"
                  alt="logo"
                />
              </Link>
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
                  <Link to="/pay">
                    <svg
                      className="user"
                      width="50"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="13"
                        rx="2"
                        stroke="#33363F"
                        stroke-width="2"
                      />
                      <path
                        d="M7 15H7.01"
                        stroke="#33363F"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M4 11H21"
                        stroke="#33363F"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <br />
                    <span className="sapn__pay">To'lov</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to="/delivery">
                    <svg
                      className="user"
                      width={50}
                      height={35}
                      data-name="Your Icons"
                      id="Your_Icons"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <path
                        class="cls-1"
                        d="M43.52,26.17,41.21,22l-1.12-2a3.82,3.82,0,0,0-3.34-2H29.19A5.77,5.77,0,0,1,28,19.46a5.92,5.92,0,0,1-.91.67l-.21.11a5.85,5.85,0,0,1-.84.39A6,6,0,0,1,24,21a6,6,0,0,1-6-6,6.53,6.53,0,0,1,.08-1H8a4,4,0,0,0-4,4V33a4,4,0,0,0,4,4H8.1a5,5,0,0,0,9.8,0H30.1a5,5,0,0,0,9.8,0h.28A3.82,3.82,0,0,0,44,33.18V28A3.73,3.73,0,0,0,43.52,26.17ZM40,24l1.1,2,.56,1H35a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1ZM13,39a3,3,0,0,1-2.94-2.45A2.51,2.51,0,0,1,10,36a3,3,0,0,1,6,0,2.51,2.51,0,0,1-.06.55A3,3,0,0,1,13,39Zm4.9-4h0l0-.09a5.16,5.16,0,0,0-.24-.79l-.16-.32a3.67,3.67,0,0,0-.26-.48L17,33a3.79,3.79,0,0,0-.32-.38,2.65,2.65,0,0,0-.29-.29L16,32a4,4,0,0,0-.34-.23l-.46-.25-.35-.16a4.75,4.75,0,0,0-.57-.18L14,31.1a4.56,4.56,0,0,0-1.9,0l-.31.08a4.75,4.75,0,0,0-.57.18l-.35.16-.46.25A4,4,0,0,0,10,32l-.38.32a2.65,2.65,0,0,0-.29.29A3.79,3.79,0,0,0,9,33l-.24.33a3.67,3.67,0,0,0-.26.48c0,.11-.11.21-.16.32a5.16,5.16,0,0,0-.24.79l0,.09H8a2,2,0,0,1-2-2V18a2,2,0,0,1,2-2h8.09a7.87,7.87,0,0,0,2.35,4.72A8,8,0,0,0,24,23a8.36,8.36,0,0,0,2-.25V27H11a1,1,0,0,0,0,2H26v6ZM35,39a3,3,0,0,1-2.94-2.45A2.51,2.51,0,0,1,32,36a3,3,0,0,1,6,0,2.51,2.51,0,0,1-.06.55A3,3,0,0,1,35,39Zm7-5.82A1.83,1.83,0,0,1,40.18,35H39.9l0-.09a5.16,5.16,0,0,0-.24-.79l-.16-.32a3.67,3.67,0,0,0-.26-.48L39,33a3.79,3.79,0,0,0-.32-.38,2.65,2.65,0,0,0-.29-.29L38,32a4,4,0,0,0-.34-.23l-.46-.25-.35-.16a4.75,4.75,0,0,0-.57-.18L36,31.1a4.56,4.56,0,0,0-1.9,0l-.31.08a4.75,4.75,0,0,0-.57.18l-.35.16-.46.25A4,4,0,0,0,32,32l-.38.32a2.65,2.65,0,0,0-.29.29A3.79,3.79,0,0,0,31,33l-.24.33a3.67,3.67,0,0,0-.26.48l-.16.32a5.16,5.16,0,0,0-.24.79l0,.09H28V21.92a7.8,7.8,0,0,0,1.33-1,7.39,7.39,0,0,0,.91-.95h6.51a1.82,1.82,0,0,1,1.59.94L38.93,22H35a3,3,0,0,0-3,3v1a3,3,0,0,0,3,3h7Z"
                      />
                      <path
                        class="cls-2"
                        d="M24,7a8,8,0,1,0,8,8A8,8,0,0,0,24,7Z"
                      />
                      <path
                        class="cls-3"
                        d="M23.38,18.06a1,1,0,0,1-.69-.28L20.81,16a1,1,0,1,1,1.39-1.44l1.18,1.13,2.43-2.33a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41l-3.13,3A1,1,0,0,1,23.38,18.06Z"
                      />
                    </svg>
                    <br />
                    <span className="sapn__pay">Trek</span>
                  </Link>
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
                    <svg
                      className="user"
                      width="50"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5"
                        stroke="#222222"
                        stroke-linecap="round"
                      />
                      <path
                        d="M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5"
                        stroke="#222222"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z"
                        stroke="#222222"
                        stroke-linecap="round"
                      />
                      <circle cx="17" cy="20" r="1" fill="#222222" />
                      <circle cx="9" cy="20" r="1" fill="#222222" />
                    </svg>
                  </a>
                  <span className="sapn__pay">Savatcha</span>
                </li>
                <li className="item">
                  <a href="#">
                    <svg
                      className="user"
                      width="50"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                        stroke="#33363F"
                        stroke-width="2"
                      />
                    </svg>
                  </a>
                  <span className="sapn__pay">Sevimlilar</span>
                </li>
                <li className="item">
                  <Link to="/login">
                    <svg
                      className="user"
                      width="50"
                      height="33"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
                        stroke="#222222"
                        stroke-linecap="round"
                        fill="none"
                      />
                      <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke="#222222"
                        stroke-linecap="round"
                      />
                    </svg>
                    <br />
                    <span className="sapn__pay">Kabinet</span>
                  </Link>
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
