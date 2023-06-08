import React from "react";
import "./CSS/App.css";
function About() {
  return (
    <div className="container">
      <div className="reserve-table">
        <img
          className="header-reserve"
          src={require("../assets/background.jpg")}
          alt="Fried chicken"
        ></img>
        <div className="reserve-header-text">
          <h1>About us</h1>
        </div>
      </div>
      <div className="about-text">
        <p>
          In 2023 we began our journey, opening our first concept store in 2025
          which was soon to become the Egyptian Fried chicken brand. we are a
          team run business, that has blossomed out of the love we have for both
          excellent food and providing an fantastic service to our franchiees as
          well as users. We started our concept of excellent and delicious home
          made fried chicken so we built our website and we took advantage of
          being full stack web developers to make a fully responsive website
          using React & Bootstrap & HTML5 % CSS3 & JS.
        </p>
      </div>
    </div>
  );
}

export default About;
