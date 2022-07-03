import React from "react";
/* import "./Card.css";
import "./Home.css"; */

export default function GameCard({ image, name, genre,platforms, }) {
  return (
    <div>
      <div >
            <img src = {image} alt = "img not found" width="250px" height="500px"/>
            <h3  >{name}</h3>
            <p > Genres: {genre}</p>
            <p > Platforms: {platforms}</p>
            {/* <p class="card"> Rating: {rating}</p> */}
            
            </div>


    </div>
  );
}
