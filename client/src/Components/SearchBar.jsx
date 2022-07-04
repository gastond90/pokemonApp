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
        
        <form className="flex items-center">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-80">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" onChange={(e) => handleInputName(e)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
    <button type="submit" onClick={(e) => handleSubmit(e)} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
</form>
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
                <img src={allPokemons[0]?.image} alt="Searching..." height="170" />
              </div>
              <div id="buttonbottomPicture"></div>
              <div id="speakers">
                <div classNameName="sp"></div>
                <div classNameName="sp"></div>
                <div classNameName="sp"></div>
                <div classNameName="sp"></div>
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
            {/* <div id="blueButtons1">
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
            </div> */}
            {/* <div id="blueButtons2">
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
              <div classNameName="blueButton"></div>
            </div> */}
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
