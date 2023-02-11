import "./asaxiyapp.css";

const Play = () => {
  return (
    <div className="play container">
      <div className="play__wrapper ">
        <div className="play__left">
          <img
            width={250}
            src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png"
            alt="logo"
          />
        </div>
        <div className="play__right">
          <img
            className="play__img"
            src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
            alt="logo"
          />
          <p className="play__item">Sizning internet do'koningiz</p>
          <div className="play__btn">
            <a
              href="https://apps.apple.com/uz/app/asaxiy-books/id1486109975"
              target="_blank"
            >
              <img
                src="https://asaxiy.uz/custom-assets/images/app-store.svg"
                alt="logo"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=uz.asaxiy.asaxiybooks"
              target="_blank"
            >
              <img
                src="https://asaxiy.uz/custom-assets/images/google-play.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
