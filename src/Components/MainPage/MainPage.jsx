import React, { useEffect, useState, useRef, useMemo } from "react";
import Banner from "../Banner/Banner";
import "./MainPage.css";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function MainPage() {
  const getInitSavings = () => {
    const savings = localStorage.getItem("catSavings");
    return savings ? JSON.parse(savings) : 0;
  };
  const getInitMultiplier = () => {
    const multiplier = localStorage.getItem("catMultiplier");
    return multiplier ? JSON.parse(multiplier) : 0;
  };
  const getInitCatsPS = () => {
    const catsPS = localStorage.getItem("catsPS");
    return catsPS ? JSON.parse(catsPS) : 0;
  };

  const [catSavings, setCatSavings] = useState(getInitSavings);
  const [burgerState, setBurgerState] = useState(false);
  const [catMultiplier, setCatMultiplier] = useState(getInitMultiplier);
  const [catsPS, setCatsPS] = useState(getInitCatsPS);

  useEffect(
    () => localStorage.setItem("catSavings", JSON.stringify(catSavings)),
    [catSavings]
  );
  useEffect(
    () => localStorage.setItem("catMultiplier", JSON.stringify(catMultiplier)),
    [catMultiplier]
  );
  useEffect(
    () => localStorage.setItem("catsPS", JSON.stringify(catsPS)),
    [catsPS]
  );

  useEffect(() => {
    const intID = setInterval(
      () => setCatSavings((prev) => prev + catsPS),
      1000
    );
    return () => {
      clearInterval(intID);
    };
  });

  const handleCatClick = () => {
    setCatSavings((prev) => prev + (1 + catMultiplier));
  };

  const handleBurgerClick = () => {
    console.log("clicked burger");
    setBurgerState((prev) => !prev);
  };

  return (
    <div className="main-page-wrapper">
      <BurgerMenu
        handleBurgerClick={handleBurgerClick}
        burgerState={burgerState}
        catSavings={catSavings}
        setCatSavings={setCatSavings}
        setCatMultiplier={setCatMultiplier}
        setCatsPS={setCatsPS}
      />

      <Banner catSavings={catSavings} handleBurgerClick={handleBurgerClick} />
      <button
        className="reset-debug"
        onClick={() => {
          setCatMultiplier(0);
          setCatSavings(0);
          setCatsPS(0);
        }}
      >
        reset
      </button>
      <button className="reset-debug" onClick={() => setRefreshCatTimer(true)}>
        Bug
      </button>
      <div className="cat-clicker">
        <FontAwesomeIcon
          icon={faCat}
          className="cat-clicker-icon"
          onClick={handleCatClick}
        />
      </div>
      <h3 className="cat-multiplier noSelect">
        {1 + catMultiplier} cats per click. {catsPS} cats per second
      </h3>
    </div>
  );
}

export default MainPage;
