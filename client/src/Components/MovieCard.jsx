import React from "react";
import { Link } from "react-router-dom";
/* import "./Card.css"; */
import "./Movies.css"

export default function MovieCard({ name, year, image,description }) {
  return (
    <div >
       <div >
            <img src = {image} alt = "img not found" /* width="250px" height="500px" *//>
            <h3  >{name}({year})</h3>
            <p >{description}</p>
            {/* <p class="card"> Rating: {rating}</p> */}
            
            </div>
   {/*    <div className=" grid place-items-center font-mono bg-gray-900">
        <div className="bg-white rounded-md bg-gray-800 shadow-lg">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={image}
                alt="pic"
                className="h-72 w-72 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold">{name}
                    ({year})</p>
              
              <hr className="hr-text" data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <span className="font-bold"></span>
              </div>
              <h4 className="hidden md:block px-4 my-4 text-sm text-left">
                {description}{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
 */}
    </div>
  );
}
