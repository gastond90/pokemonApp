import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName, getMovies } from "../actions";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Paginated } from "./Paginated";
/* ;
import "./Botones.css";
import "./Card.css"; */
import "./Movies.css"

export default function Movies() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allMovies?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  console.log(allMovies, "laspelis")

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  /* function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }
  } */

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  let key = 1;
  return (
    <div >

      <div >
        <div className="content-select">
          <select onChange={(e) => handleSort(e)}>
            <option hidden={true}>Por Nombre</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        <Paginated
          videogamesPerPage={videogamesPerPage}

          allPokemons={allMovies.length}

          paginated={paginated}
        />
        <div className="movies">
          {currentVideogames[0] === "NO" ? (
            <img
              className="imgerr"
              src="https://c.tenor.com/Jar7MovEXPoAAAAC/deadpool-omg.gif"
              alt=""
              width="630px"
              height="630px"
            />
          ) : allMovies[0] === "No existe el juego" ? (
            <div>
            <h1>NOT FOUND</h1>
            <img
              className="imgerr"
              src="https://c.tenor.com/Jar7MovEXPoAAAAC/deadpool-omg.gif"
              alt=""
            />
            </div>
          ) : currentVideogames.length === 0 ? (
            <div>
              <button className="loader">LOADING...</button>
            </div>
          ) : (
            currentVideogames &&
            
            currentVideogames.map((e) => {
              return (
                <div/* className="movies" */ key={key++}>
                  <Link key={key++} to={`/home/movie/${e.id}`}>
                    <MovieCard
                      /* className="card" */
                      key={key++}
                      name={e.name}
                      image={e.image}
                      year={e.year}
                      description={e.description}
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
