import React from "react";
import "./BurgerMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCat } from "@fortawesome/free-solid-svg-icons";

function BurgerMenu({
  handleBurgerClick,
  burgerState,
  catSavings,
  setCatSavings,
  setCatMultiplier,
  setCatsPS,
}) {
  const handleBuyItem = (price, multiplierIncrease, itemType) => {
    {
      if (catSavings >= price) {
        if (itemType === "clickItem") {
          setCatMultiplier((prev) => prev + multiplierIncrease);
        } else if (itemType === "autoItem") {
          setCatsPS((prev) => prev + multiplierIncrease);
        }

        setCatSavings((prev) => prev - price);
      }
    }
  };

  return (
    <div
      className="burger-wrapper noSelect"
      style={burgerState ? { display: "block" } : { display: "none" }}
    >
      <div className="burger-banner">
        <FontAwesomeIcon
          icon={faBars}
          className="burger-banner-bars"
          onClick={handleBurgerClick}
        />
        <div className="cat-savings">
          <FontAwesomeIcon icon={faCat} className="banner-icon" />
          <h1>{catSavings} cats</h1>
        </div>
      </div>
      <br />
      <br />
      <h1 className="shop-title">Flea Market</h1>
      <br />
      <br />
      <div className="burger-shop-items">
        <div
          className="shop-item"
          onClick={() => handleBuyItem(10, 1, "clickItem")}
        >
          <div className="item-name-price">
            <h1>Catnip</h1>
            <h3>10 cats</h3>
          </div>
          <p>+1 cats per click</p>
        </div>
        <div
          className="shop-item"
          onClick={() => handleBuyItem(100, 5, "clickItem")}
        >
          <div className="item-name-price">
            <h1>Lasagna</h1>
            <h3>100 cats</h3>
          </div>
          <p>+5 cats per click</p>
        </div>
        <div className="shop-item">
          <div
            className="item-name-price"
            onClick={() => handleBuyItem(500, 15, "autoItem")}
          >
            <h1>Cat toys</h1>
            <h3>500 cats</h3>
          </div>
          <p>+15 cats per second</p>
        </div>
        <div className="shop-item">
          <div
            className="item-name-price"
            onClick={() => handleBuyItem(5000, 45, "autoItem")}
          >
            <h1>Cat orphange</h1>
            <h3>5000 cats</h3>
          </div>
          <p>+45 cats per second</p>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
