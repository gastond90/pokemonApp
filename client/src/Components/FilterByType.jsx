import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonsByType, getTypes} from "../actions";
import './Home.css'


export function FilterByType(){
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    /* console.log("LOSGENEROS", genres) */

    function handleChange(e) {
        dispatch(getPokemonsByType(e.target.value))
    };

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    return (
        <div className="content-select">
             <select onChange = {(e) => handleChange(e)}>
             <option hidden={true}>Types</option>
                        {types .map((e) => (
                            <option key ={e.id} value={e.name}>{e.name}</option>
                        ))}
                    </select>
                   
        </div>
    )
}


/* case FILTER_MOVIES_BY_GENRE:
        return {
            ...state,
            peliculas: action.payload
        };  */