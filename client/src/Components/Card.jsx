import React from "react";
/* import "./Card.css" */

export default function Card({
  image,
  name,
  abilities,
  attack,
  defense,
  height,
  hp,
  speed,
  type,
  weight,
}) {
  return (
    <div>
      {/* <div className="card">
        <img
          className="picture "
          src={image}
          alt="img not found"
          width="250px"
          height="200px"
        />
        <h3 className="card">{name}</h3>
        <p className="card">Types:{type}</p>
        <p className="card">Abilities:{abilities}</p>
        <p className="card">Attack:{attack}</p>
        <p className="card">Defense:{defense}</p>
        <p className="card">HP:{hp}</p>
        <p className="card">Speed:{speed}</p>
        <p className="card">Height:{height}</p>
        <p className="card">Weight:{weight}</p>
      </div> */}
      <div id="cards">
          <figure className="card card--normal">
            <div className="card__image-container">
              <img
                src={image}
                alt="Eevee"
                className="card__image"
              />
            </div>

            <figcaption className="card__caption">
              <h1 className="card__name">{name}</h1>

              <h3 className="card__type">{type}</h3>

              <table className="card__stats">
                <tbody>
                  <tr>
                    <th>HP</th>
                    <td>{hp}</td>
                  </tr>
                  <tr>
                    <th>Attack</th>
                    <td>{attack}</td>
                  </tr>

                  <tr>
                    <th>Defense</th>
                    <td>{defense}</td>
                  </tr>

                  <tr>
                    <th>Speed</th>
                    <td>{speed}</td>
                  </tr>
                </tbody>
              </table>

              <div className="card__abilities">
                <h4 className="card__ability">
                  <span className="card__label">Abilities</span>
                  {abilities}
                </h4>
                
              </div>
            </figcaption>
          </figure>
        </div>
    </div>
  );
}
