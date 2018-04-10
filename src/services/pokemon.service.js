import axios from 'axios'

let baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const axiosConfig =  {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
}

function getPokemon(name){
   return axios.get(baseUrl + '/' + name + '/', axiosConfig)
}

let pokemonService = { getPokemon };

export default pokemonService;

