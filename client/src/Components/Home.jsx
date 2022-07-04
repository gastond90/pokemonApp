import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  orderByName,
  orderByAttack,
  orderByDefense,
  orderBySpeed,
  orderByHp,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import { Paginated } from "./Paginated";
import { FilterByType } from "./FilterByType";
import "./Home.css";
import { FilterByAttack } from "./FilterByAttack";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
 /*  const allPokemons = useSelector((state) => state.allPokemons); */
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentPokemons = allPokemons?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  console.log("LOSPOKES", allPokemons);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleSortAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }
  function handleSortDefense(e) {
    e.preventDefault();
    dispatch(orderByDefense(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }
  function handleSortSpeed(e) {
    e.preventDefault();
    dispatch(orderBySpeed(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }
  function handleSortHp(e) {
    e.preventDefault();
    dispatch(orderByHp(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  return (
    <div className="home">
      <div className="home">
        <div className="content-select">
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            /* className="botonver" */
            className="bg-indigo-800 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded-md dark:border-gray-600 "
          >
            Reset Filters
          </button>
          {/*  {" "}
            Clean Filters{" "}
          </button> */}
        </div>

        <div className="content-select">
          <Link to={"/home/pokedex"}>
            {" "}
            
            <button className="bg-indigo-800 hover:bg-blue-700  text-sm text-white font-bold py-2 px-4 rounded-md">
              Pokédex
            </button>
          </Link>
        </div>
        <div className="content-select">
          <Link to={"/home/movies"}>
            {" "}
            <button className="bg-indigo-800 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded-md  ">
              Movies
            </button>
          </Link>
        </div>

        <div className="content-select">
          <Link to={"/home/games"}>
            {" "}
            <button className="bg-indigo-800 hover:bg-blue-700  text-sm text-white font-bold py-2 px-4 rounded-md ">
              Games
            </button>
          </Link>
        </div>
      </div>

      <div>
        
        <FilterByType />
       
        <div className="content-select">
        <select
        onChange={(e) => handleSort(e)}
          id="small"
          className="block p-2 mb-6 text-sm text-gray-900 font-bold bg-indigo-800 rounded-lg border border-indigo-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-800 dark:border-gray-600 dark:placeholder-indigo-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
         
            <option hidden={true}>Alphabetically</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        <div className="content-select">
     {/* <select
        onChange={(e) => handleSortAttack(e)}
          id="small"
          className="block p-2 mb-6 text-sm text-gray-900 font-bold bg-indigo-800 rounded-lg border border-indigo-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-800 dark:border-gray-600 dark:placeholder-indigo-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option hidden={true}>By Attack</option>
            <option value="Max-Min">Strongest</option>
            <option value="Min-Max">Weakest</option>
          </select>  */}
           <FilterByAttack/>
        </div>

        <div className="content-select">
        <select
        onChange={(e) => handleSortDefense(e)}
          id="small"
          className="block p-2 mb-6 text-sm text-gray-900 font-bold bg-indigo-800 rounded-lg border border-indigo-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-800 dark:border-gray-600 dark:placeholder-indigo-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option hidden={true}>By Defense</option>
            <option value="Max-Min">Strongest</option>
            <option value="Min-Max">Weakest</option>
          </select>
        </div>

        <div className="content-select">
        <select
        onChange={(e) => handleSortSpeed(e)}
          id="small"
          className="block p-2 mb-6 text-sm text-gray-900 font-bold bg-indigo-800 rounded-lg border border-indigo-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-800 dark:border-gray-600 dark:placeholder-indigo-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option hidden={true}>By Speed</option>
            <option value="Max-Min">Fastest</option>
            <option value="Min-Max">Slowest</option>
          </select>
        </div>

        <div className="content-select">
        <select
        onChange={(e) => handleSortHp(e)}
          id="small"
          className="block p-2 mb-6 text-sm text-gray-900 font-bold bg-indigo-800 rounded-lg border border-indigo-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-800 dark:border-gray-600 dark:placeholder-indigo-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option hidden={true}>By HP</option>
            <option value="Max-Min">Strongest</option>
            <option value="Min-Max">Weakest</option>
          </select>
        </div>


        <Paginated
          videogamesPerPage={videogamesPerPage}
          allPokemons={allPokemons.length}
          paginated={paginated}
        />
        <div className="videogames">
          {currentPokemons[0] === "NO" ? (
            <img
              className="imgerr"
              src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
              alt=""
              width="630px"
              height="630px"
            />
          ) : allPokemons[0] === "No existe el juego" ? (
            <img
              className="imgerr"
              src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
              alt=""
            />
          ) : currentPokemons.length === 0 ? (
            <div>
              <button className="loader">LOADING...</button>
            </div>
          ) : (
            currentPokemons &&
            currentPokemons.map((e) => {
              return (
                <div key={e.id}>
             
                    <Card
                      className="cards"
                      key={e.id}
                      name={capitalizeFirstLetter(`${e.name}`)}
                      abilities={capitalizeFirstLetter(
                        `${e.abilities?.join(",")}`
                      )}
                      image={e.image}
                      attack={e.attack}
                      defense={e.defense}
                      height={e.height}
                      hp={e.hp}
                      speed={e.speed}
                      type={e.type?.join(",")}
                      weight={e.weight}
                    />
                  
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
