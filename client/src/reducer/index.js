import {
  GET_POKEMONS,
  ORDER_BY_NAME,
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  GET_MOVIES,
  GET_VIDEOGAMES,
  GET_TYPES,
  ORDER_BY_SPEED,
  ORDER_BY_ATTACK,
  ORDER_BY_HP,
  ORDER_BY_DEFENSE,
} from "../actions/constants";

const initialSate = {
  pokemons: [],
  allPokemons: [],
  types: [],
  movies: [],
  games: [],
};

function rootReducer(state = initialSate, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case ORDER_BY_NAME:
      const orderPoks =
        action.payload === "az"
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: orderPoks,
      };

    case ORDER_BY_ATTACK:
      const orderPoks2 =
        action.payload === "Min-Max"
          ? state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      /* console.log("DESPUES", state.pokemons); */
      return {
        ...state,
        pokemons: orderPoks2,
      };

    case ORDER_BY_DEFENSE:
      const orderPoks3 =
        action.payload === "Min-Max"
          ? state.pokemons.sort((a, b) => {
              if (a.defense > b.defense) {
                return 1;
              }
              if (b.defense > a.defense) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.defense > b.defense) {
                return -1;
              }
              if (b.defense > a.defense) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: orderPoks3,
      };

    case ORDER_BY_SPEED:
      const orderPoks4 =
        action.payload === "Min-Max"
          ? state.pokemons.sort((a, b) => {
              if (a.speed > b.speed) {
                return 1;
              }
              if (b.speed > a.speed) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.speed > b.speed) {
                return -1;
              }
              if (b.speed > a.speed) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: orderPoks4,
      };

    case ORDER_BY_HP:
      const orderPoks5 =
        action.payload === "Min-Max"
          ? state.pokemons.sort((a, b) => {
              if (a.hp > b.hp) {
                return 1;
              }
              if (b.hp > a.hp) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.hp > b.hp) {
                return -1;
              }
              if (b.hp > a.hp) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: orderPoks5,
      };

    case FILTER_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FILTER_BY_TYPE:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_VIDEOGAMES:
      return {
        ...state,
        games: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
