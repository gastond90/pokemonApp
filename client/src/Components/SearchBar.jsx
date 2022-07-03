import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemonsByName } from "../actions";
import "./SearchBar.css";

export function SearchBar() {
  const dispacht = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [name, setName] = useState("");
  const [render, setRender] = useState(false);

 /*  console.log("ELPOKE", allPokemons) */

  function handleInputName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispacht(getPokemonsByName(name));
    setName("");
    setRender(true)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => handleInputName(e)}
        />
        <button
          className="botonbuscar"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </div>
      {render && (
        <div id="pokedex">
          <div id="left">
            <div id="logo"></div>
            <div id="bg_curve1_left"></div>
            <div id="bg_curve2_left"></div>
            <div id="curve1_left">
              <div id="buttonGlass">
                <div id="reflect"> </div>
              </div>
              <div id="miniButtonGlass1"></div>
              <div id="miniButtonGlass2"></div>
              <div id="miniButtonGlass3"></div>
            </div>
            <div id="curve2_left">
              <div id="junction">
                <div id="junction1"></div>
                <div id="junction2"></div>
              </div>
            </div>
            <div id="screen">
              <div id="topPicture">
                <div id="buttontopPicture1"></div>
                <div id="buttontopPicture2"></div>
              </div>
              <div id="picture">
                <img src={allPokemons[0]?.image} alt="psykokwak" height="170" />
              </div>
              <div id="buttonbottomPicture"></div>
              <div id="speakers">
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
              </div>
            </div>
            <div id="bigbluebutton"></div>
            <div id="barbutton1"></div>
            <div id="barbutton2"></div>
            <div id="cross">
              <div id="leftcross">
                <div id="leftT"></div>
              </div>
              <div id="topcross">
                <div id="upT"></div>
              </div>
              <div id="rightcross">
                <div id="rightT"></div>
              </div>
              <div id="midcross">
                <div id="midCircle"></div>
              </div>
              <div id="botcross">
                <div id="downT"></div>
              </div>
            </div>
          </div>
          <div id="right">
            <div id="stats">
              <strong>Name:</strong>
              {capitalizeFirstLetter(`${allPokemons[0]?.name}`)}
              <br />
              <br />
              <strong>Type:</strong> {capitalizeFirstLetter(`${allPokemons[0]?.type}`)}
              <br />
              <br />
              <strong>Height:</strong>
              {allPokemons[0]?.height}
              <br />
              <strong>Weight:</strong> {allPokemons[0]?.weight} lbs.
              <br />
              <strong>Speed:</strong> {allPokemons[0]?.speed}
              <br />
              <br />
              <strong>HP:</strong> {allPokemons[0]?.hp}
              <br />
              <br />
            </div>
            <div id="blueButtons1">
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
            </div>
            <div id="blueButtons2">
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
              <div className="blueButton"></div>
            </div>
            <div id="miniButtonGlass4"></div>
            <div id="miniButtonGlass5"></div>
            <div id="barbutton3"></div>
            <div id="barbutton4"></div>
            <div id="yellowBox1"></div>
            <div id="yellowBox2"></div>
            <div id="bg_curve1_right"></div>
            <div id="bg_curve2_right"></div>
            <div id="curve1_right"></div>
            <div id="curve2_right"></div>
          </div>
        </div>
      )}
    </div>
  );
}
