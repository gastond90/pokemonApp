import React from "react";
import "./Paginated.css"

export function Paginated ({videogamesPerPage, allPokemons, paginated}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allPokemons / videogamesPerPage); i++){
        pageNumber.push(i)
    };

    return (
        <nav>
            <section className="paginacion">
            <ul>
                {pageNumber && pageNumber.map(n => (
                    <li key = {n} >
                        <a className="active" onClick={()=> paginated(n)}>{n}</a>
                    </li>
                ))}                              
            </ul>
            </section>
            
        </nav>
        
    )
}