import {
  GET_POKEMONS,
  FILTER_BY_CREATE,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  GET_MOVIES,
  GET_VIDEOGAMES,
  /* GET_DETAIL,
  POST_VIDEOGAME, */
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
  games:[]
};

function rootReducer(state = initialSate, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case FILTER_BY_CREATE:
      let createdFilter;
      if (action.payload === "Existing") {
        let apiGame = state.allVideogames.filter(
          (data) => data.id.toString().length < 7
        );
        createdFilter = apiGame;
      }
      if (action.payload === "Created") {
        let createdGame = state.allVideogames.filter(
          (data) => data.id.toString().length > 7
        );
        createdFilter = createdGame;
      }
      if (action.payload === "All") {
        let allFiltered = state.allVideogames;
        createdFilter = allFiltered;
      }

      if (createdFilter.length === 0) {
        createdFilter = ["NO"];
      }
      return {
        ...state,
        videogames: createdFilter,
      };

    case ORDER_BY_NAME:
      const orderGames =
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
        pokemons: orderGames,
      };

      case ORDER_BY_ATTACK:
      const orderGames2 =
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
              if (a.attack> b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: orderGames2,
      };
      case ORDER_BY_DEFENSE:
      const orderGames3 =
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
              if (a.defense> b.defense) {
                return -1;
              }
              if (b.defense > a.defense) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: orderGames3,
      };

      case ORDER_BY_SPEED:
        const orderGames4 =
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
                if (a.speed> b.speed) {
                  return -1;
                }
                if (b.speed > a.speed) {
                  return 1;
                }
                return 0;
              });
  
        return {
          ...state,
          pokemons: orderGames4,
        };

        case ORDER_BY_HP:
            const orderGames5 =
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
                    if (a.hp> b.hp) {
                      return -1;
                    }
                    if (b.hp > a.hp) {
                      return 1;
                    }
                    return 0;
                  });
      
            return {
              ...state,
              pokemons: orderGames5,
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

    /* case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
      };
 */
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
