import React from "react";
import "./Banner.css";
import { faCat, faBars, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner({ catSavings, handleBurgerClick }) {
  return (
    <div className="banner noSelect">
      <FontAwesomeIcon
        icon={faBars}
        className="banner-icon"
        id="shop-burger"
        onClick={handleBurgerClick}
      />
      <div className="cat-savings">
        <FontAwesomeIcon icon={faCat} className="banner-icon" />
        <h1>{catSavings} cats</h1>
      </div>
      <div className="quiz-icon">
        <FontAwesomeIcon icon={faLightbulb} />
      </div>
    </div>
  );
}

export default Banner;
