const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const router = Router();

router.get("/pokemons", async (req, res, next) => {
  try {
    const { name } = req.query; // si se busca por name
    if (name) {
      let pokeInDB = [];

      const nameInDB = await Pokemon.findOne({
        where: { name: { [Op.iLike]: /* "%" + */ name /* + "%" */ } },
        include: Type,
      });

      if (nameInDB.length > 0) {
        pokeInDB = nameInDB.map((pokemon) => {
          //me quedo sólo con los datos que necesito y los guardo

          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
          };
        });
      }

      const nameInApi = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      ).data;

      console.log("nameInApi",nameInApi)

      let pokeInApi = [];

      if (nameInApi) {
        pokeInApi.push(   {
            id: nameInApi.id,
            name: nameInApi.name,
            image: nameInApi.sprites.other.home.front_default,
            hp: nameInApi.stats[0].base_stat,
            attack: nameInApi.stats[1].stat.name,
            defense: nameInApi.stats[2].stat.name,
            speed: nameInApi.stats[5].base_stat,
            height: nameInApi.height,
            weight: nameInApi.weight,
            type: nameInApi.types?.map((t) => t.type.name),
          })
        ;
      }

      console.log("pokeInApi",pokeInApi)

      let pokemons = [/* ...pokeInDB, ... */pokeInApi]; //agrupo los encontrados en db y en api
      /* ´pokemons = pokemons.slice(0, 15);
       */
      pokeInApi.length === 0
        ? res.send(["No existe ese pokemon"])
        : res.send(pokeInApi);
    } else {
      //si no pasé name por query me traigo todos

      let pokems = [];
      let urls = [];

    /*   const pokemonsDb = await Pokemon.findAll({
        include: Type,
        
      });

      pokemonsDb.forEach((pokemon) => {
        pokems.push({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          hp: pokemon.hp,
          attack: pokemon.attack,
          defense: pokemon.defense,
          speed: pokemon.speed,
          height: pokemon.height,
          weight: pokemon.weight,
          type: pokemon.type?.map((t) => t.name),
          abilities: pokemon.abilities?.map((t) => t.name),
        });
      }); */

      //y ahora me traigo todos (100) de la api
      const api = axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=148&limit=3" //cada llamado me trae 30
      );
      /* const api2 = axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=30&limit=2"
      ); */
      /*  const api3 = axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=60&limit=30"
      );
      const api4 = axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=90&limit=30"
      );
       const api5 = axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=148&limit=30"
      ); */

      let promesas = await Promise.all([ api, /* api2,  api3, api4 , api5 */]);

       PageOne = promesas[0].data.results;
      /*  PageTwo = promesas[1].data.results;  */
      /* PageThree = promesas[0].data.results; */
      /* PageFour = promesas[1].data.results; */
      /* PageFive = promesas[4].data.results;

      ;

         /* let todo = PageThree.concat(PageFour) 
       .concat(PageThree)
        .concat(PageFour)
        .concat(PageFive);
  */
      /* console.log("URLS",todo) */

      let todo = PageOne /* .concat(PageTwo) */
      /* .concat(PageThree)
        .concat(PageFour)
        .concat(PageFive) */

       todo.forEach((pokemon) => {
        urls.push({
          url: pokemon.url,
        });
      });

       data = await axios.all(urls);

      const TODOSPOKES = data.map((dat) => dat.url);

      try {
        await axios
          .all(TODOSPOKES.map((TODOSPOKES) => axios.get(TODOSPOKES)))
          .then(
            axios.spread(function (...res) {
              res.map((p) =>
                pokems.push({
                 /*  id: p.data.id, */
                  name: p.data.name,
                  hp: p.data.stats[0].base_stat,
                  attack: p.data.stats[1].base_stat,
                  defense: p.data.stats[2].base_stat,
                  speed: p.data.stats[5].base_stat,
                  height: p.data.height,
                  weight: p.data.weight,
                  type: p.data.types?.map((pt) => pt.type).map((t) => t.name),
                  img: p.data.sprites.other.home.front_default,
                  abilities: p.data.abilities?.map((a) => a.ability.name),
                })
              );
            })
          );
          /* console.log("TODOSPOKES;",pokems) */
      } catch (error) {}

      pokems.forEach(async (pok) => {
        //por cada uno me fijo si ya está en la DB, y sino lo creo
        await Pokemon.findOrCreate({
          where: {
            name: pok.name,
            hp: pok.hp,
            attack: pok.attack,
            defense: pok.defense,
            speed: pok.speed,
            height: pok.height,
            weight: pok.weight,
            type:pok.type,
            abilities: pok.abilities?pok.abilities:"none",
            image: pok.img ? pok.img : "noimg",
          },
          /* include: Type, */
        });
      });

      const DBP = await Pokemon.findAll();

      res.send(DBP); // mando el array con todo lo pusheado
    }
  } catch (error) {
    next(error);
  }
});

router.get("/pokemons/:id", async (req, res, next) => {
  //si busco un game por ID
  try {
    const { id } = req.params;

   /*  if (id.length > 6) { */
      const foundInDB = await Pokemon.findOne({
        where: { id: id },
        include: Type,
      });

      const DBPOKE = {
        name: foundInDB.name,
        hp: foundInDB.hp,
        attack: foundInDB.attack,
        defense: foundInDB.defense,
        speed: foundInDB.speed,
        height: foundInDB.height,
        weight: foundInDB.weight,
        image: pok.img ? pok.img : "noimg",
      };
      res.send(DBPOKE);
   /*  } else {
      const foundInApi = await axios.get(
        `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
      );

      const APIGAME = {
        id: foundInApi.data.id,
        name: foundInApi.data.name,
        image: foundInApi.data.background_image,
        description: foundInApi.data.description,
        released: foundInApi.data.released,
        rating: foundInApi.data.rating,
        platforms: foundInApi.data.platforms.map((p) => p.platform.name),
        genres: foundInApi.data.genres.map((g) => g.name),
      };

      res.send(APIGAME);
    } */
  } catch (error) {
    next(error);
  }
});

router.get("/types", async (req, res, next) => {
  //traer todos los generos
  try {
    const typesApi = await axios.get(
      `https://pokeapi.co/api/v2/type`
    ); //primero los traigo de la api

    typesApi.data.results.forEach(async (type) => {
      //por cada uno me fijo si ya está en la DB, y sino lo creo
      await Type.findOrCreate({ where: { name: type.name } });
    });

    const DBTypes = await Type.findAll(); //una vez que tengo la DB con todos, me los traigo

    res.send(DBTypes);
  } catch (error) {
    next(error);
  }
});

router.get("/movies", async (req, res, next) => {

  try {
    const films = await axios.get(
      `https://imdb-api.com/en/API/IMDbList/k_9ucia6j0/ls025240237/?sort=list_order,asc&st_dt=&mode=detail&page=1&title_type=movie&ref_=ttls_ref_typ`
    );

    let movies = [];

   /*  console.log("MOVIES", films.data) */

    films.data.items?.forEach((it) => {
      movies.push({
        id: it.id,
        name: it.title,
        year: it.year,
        image: it.image,
        description:it.description
      });
    });
    
    res.send(movies);
  } catch (error) {
    next(error);
  }
});

router.get("/videogames", async (req, res, next) => {
  try {
   
      let videogames = []; 

      //y ahora me traigo todos (100) de la api
      const api = axios.get(
        `https://api.rawg.io/api/games?search=pokemon&key=d47fdbc78fde4d58b3ae93f7ac2c6b7e&page=2` //cada llamado me trae 20
      );
      const api2 = axios.get(
        `https://api.rawg.io/api/games?search=pokemon&key=d47fdbc78fde4d58b3ae93f7ac2c6b7e&page=3`
      );
      /* 
      const api3 = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=d47fdbc78fde4d58b3ae93f7ac2c6b7e&page=3`
      ); */
     /*  const api4 = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=${API_KEY}&page=4`
      );
      const api5 = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=${API_KEY}&page=5`
      ); */

      let promesas = await Promise.all([api, api2/* , api3, */ /* api4, api5 */]);

      PageOne = promesas[0].data.results;
      PageTwo = promesas[1].data.results;
      /* 
      PageThree = promesas[2].data.results; */
      /* PageFour = promesas[3].data.results;
      PageFive = promesas[4].data.results; */

      let todo = PageOne.concat(PageTwo)/* 
        .concat(PageThree) */
        /* .concat(PageFour)
        .concat(PageFive); */

      todo.forEach((videogame) => {
        
        videogames.push({
          id: videogame.id,
          name: videogame.name,
          image: videogame.background_image,
          released: videogame.released,
          description: videogame.description,
          rating: videogame.rating,
          platforms: videogame.platforms?.map((pl) => pl.platform.name),
          genres: videogame.genres?.map((gen) => gen.name),
        });
      });

      res.send(videogames); // mando el array con todo lo pusheado
    }
   catch (error) {
    next(error);
  }
});

/* router.post("/videogame", async (req, res, next) => {
  //crear un juego

  try {
    let { name, image, description, released, rating, platform, genre } =
      req.body; //parametros que voy necesitar
    let newGame = await Videogame.create({
      //lo creo en la DB
      name,
      image,
      description,
      released,
      rating,
      platform,
    });

    genre?.forEach(async (genre) => {
      var genreFound = await Genre.findOne({
        //busco en DB el genre del juego que quiero agregar
        where: { name: genre },
      });

      newGame.addGenre(genreFound); //se lo agrego al juego creado
    });

    res.send(newGame);
  } catch (error) {
    next(error);
  }
});

router.delete("/videogames/:idVideogame", async (req, res, next) => {
  try {
    const idVideogame = req.params.idVideogame;
    await Videogame.destroy({
      where: { id: idVideogame },
    });
    res.json(["Borrado de la DB"]);
  } catch (error) {
    next(error);
  }
}); */



module.exports = router;
