import axios from 'axios';
import {GET_POKEMONS, FILTER_BY_CREATE, ORDER_BY_NAME,
    FILTER_BY_NAME, FILTER_BY_TYPE, GET_DETAIL, GET_TYPES,GET_MOVIES,GET_VIDEOGAMES, ORDER_BY_SPEED,ORDER_BY_ATTACK,ORDER_BY_HP,ORDER_BY_DEFENSE} from './constants';

export function getPokemons (){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_POKEMONS,
            payload: json.data
        })
    }
};

export function getCreated (payload){
    return {
        type: FILTER_BY_CREATE,
        payload
    }
};

export function orderByName (payload){
    return({
        type: ORDER_BY_NAME,
        payload
    })
};
export function orderByAttack (payload){
    
    return({
        type: ORDER_BY_ATTACK,
        payload
    })
};
export function orderByDefense (payload){
    return({
        type: ORDER_BY_DEFENSE,
        payload
    })
};
export function orderBySpeed (payload){
    return({
        type: ORDER_BY_SPEED,
        payload
    })
};
export function orderByHp (payload){
    return({
        type: ORDER_BY_HP,
        payload
    })
};


export function getPokemonsByName (payload) {
    return async function (dispatch) {
        try {
            var json2 = await axios.get(`http://localhost:3001/pokemons?name=${payload}`);
            return dispatch ({
                type: FILTER_BY_NAME,
                payload: json2.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getPokemonsByType (payload){
    return async function(dispatch){
        try {
            var json3 = await axios.get(`http://localhost:3001/pokemons`);
            var json4 = json3.data.filter(e => e.type.includes(payload));
                return dispatch({
                type: FILTER_BY_TYPE,
                payload:json4
            })
        } catch (error) {
            console.log(error)
        }
    }
};


/* export function getDetail (idVideogame){
    return async function(dispatch){
        try {
            var json5 = await axios.get(`http://localhost:3001/videogames/${idVideogame}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json5.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}; */

export function getTypes (){
    return async function (dispatch){
        try {
            var json6 = await axios.get("http://localhost:3001/types");
            return dispatch({
                type: GET_TYPES,
                payload: json6.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getMovies() {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/movies");
      return dispatch({
        type: GET_MOVIES,
        payload: json.data,
      });
    };
  }

  export function getVideogames (){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: json.data
        })
    }
  };
  

/* export function postVideogame (payload){
    return async function(dispatch){
        try {
            var json7 = await axios.post("http://localhost:3001/videogame", payload);
            return json7
        } catch (error) {
            console.log(error)
        }
    }
};

export function deleteVideogame(id) {
    return function() {
        axios.delete(`http://localhost:3001/videogames/${id}`)
        .catch((error) => {
            console.log(error)
        })
    }
}
 */