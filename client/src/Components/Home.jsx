import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
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

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  /*  const alltypes = useSelector((state) => state.types); */
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
    /*  dispatch(getTypes()); */
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  /* function handleFilterCreated(e) {
    dispatch(getCreated(e.target.value));
  } */

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
        <div>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            className="botonver"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Clean Filters
          </button>
          {/*  {" "}
            Clean Filters{" "}
          </button> */}
        </div>

        <div className="content-select">
          <Link to={"/home/pokedex"}>
            {" "}
            {/* <button>Pokédex</button>{" "} */}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Pokédex
            </button>
          </Link>
        </div>
        <div className="content-select">
          <Link to={"/home/movies"}>
            {" "}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Movies
            </button>
          </Link>
        </div>

        <div className="content-select">
          <Link to={"/home/games"}>
            {" "}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Games
            </button>
          </Link>
        </div>
      </div>

      <div>
        {/* <div className="content-select">
        <select onChange={(e) => handleFilterCreated(e)}>
        <option hidden={true}>Origen</option>
          <option value="All">Todos</option>
          <option value="Created">Creados</option>
          <option value="Existing">Originales</option>
        </select>
        </div> */}
        <FilterByType />

        <div className="content-select">
          <select onChange={(e) => handleSort(e)}>
            <option hidden={true}>Alphabetically</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        <div className="content-select">
          <select onChange={(e) => handleSortAttack(e)}>
            <option hidden={true}>By Attack</option>
            <option value="Max-Min">Strongest</option>
            <option value="Min-Max">Weakest</option>
          </select>
        </div>

        <div className="content-select">
          <select onChange={(e) => handleSortDefense(e)}>
            <option hidden={true}>By Defense</option>
            <option value="Max-Min">Strongest</option>
            <option value="Min-Max">Weakest</option>
          </select>
        </div>

        <div className="content-select">
          <select onChange={(e) => handleSortSpeed(e)}>
            <option hidden={true}>By Speed</option>
            <option value="Max-Min">Fastest</option>
            <option value="Min-Max">Slowest</option>
          </select>
        </div>

        <div className="content-select">
          <select onChange={(e) => handleSortHp(e)}>
            <option hidden={true}>By HP</option>
            <option value="Max-Min">Strongest</option>
            <option value="Min-Max">Weakest</option>
          </select>
        </div>

        {/* <div id="cards">
          <figure className="card card--normal">
            <div className="card__image-container">
              <img
                src="https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/1200px-133Eevee.png"
                alt="Eevee"
                className="card__image"
              />
            </div>

            <figcaption className="card__caption">
              <h1 className="card__name">Eevee</h1>

              <h3 className="card__type">normal</h3>

              <table className="card__stats">
                <tbody>
                  <tr>
                    <th>HP</th>
                    <td>55</td>
                  </tr>
                  <tr>
                    <th>Attack</th>
                    <td>55</td>
                  </tr>

                  <tr>
                    <th>Defense</th>
                    <td>50</td>
                  </tr>

                  <tr>
                    <th>Special Attack</th>
                    <td>45</td>
                  </tr>
                  <tr>
                    <th>Special Defense</th>
                    <td>65</td>
                  </tr>
                  <tr>
                    <th>Speed</th>
                    <td>55</td>
                  </tr>
                </tbody>
              </table>

              <div className="card__abilities">
                <h4 className="card__ability">
                  <span className="card__label">Ability</span>
                  Run Away
                </h4>
                <h4 className="card__ability">
                  <span className="card__label">Hidden Ability</span>
                  Anticipation
                </h4>
              </div>
            </figcaption>
          </figure>
        </div> */}

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
                <div>
                  <Link /* className="card" */ key={e.id} to={`/home/${e.id}`}>
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
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
