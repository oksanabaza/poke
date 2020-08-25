// export default class PokeService {

//   _apiBase = 'https://pokeapi.co/api/v2';

//   async getResource(url) {
//     const res = await fetch(`${this._apiBase}${url}`);
//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}` +
//         `, recieved ${res.status}`)
//     }
//     return await res.json();

//   }

//   async getPokemon(id) {
//     const pokemon = await this.getResource(`/pokemon/${id}/`);
//     return this._transformPokemon(pokemon);

//   }

//   _transformPokemon(pokemon) {
//     return {
//       name: pokemon.name,
//       url: pokemon.url,

//     }
//   }
// };



  // async getAllPlanets() {
  //   const res = await this.getResource(`/planets/`);
  //   return res.results.map(this._transformPlanet);
  // }
  // async getPlanet(id) {
  //   const planet = await this.getResource(`/planets/${id}/`);
  //   return this._transformPlanet(planet);
  // }
  // async getAllStarships() {
  //   const res = await this.getResource(`/starships/`);
  //   return res.result.map(this._transformStarship);
  // }
  // async getStarship(id) {
  //   const starship = await this.getResource(`/starships/${id}/`);
  //   return this._transformStarship(starship);
  // }
  // _extractId(item) {
  //   const idRegExp = /\/([0-9]*)\/$/;
  //   return item.url.match(idRegExp)[1];
  // }

  // _transformPlanet(planet) {

  //   return {
  //     id: this._extractId(planet),
  //     name: planet.name,
  //     population: planet.population,
  //     rotationPeriod: planet.rotation_period,
  //     diameter: planet.diameter
  //   }
  // }
  // _transformStarship(starship) {
  //   return {
  //     id: this._extraxtId(starship),
  //     name: starship.name,
  //     model: starship.model,
  //     manufacturer: starship.manufacturer,
  //     costInCredits: starship.costInCredits,
  //     length: starship.length,
  //     crew: starship.crew,
  //     passengers: starship.passengers,
  //     cargoCapacity: starship.cargoCapacity
  //   }
  // }


  // const swapi = new PokeService();
  // swapi.getPokemon(5).then((p) => {
  //   console.log(p.name);
  // });

