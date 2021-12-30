import axios from 'axios';
import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const {data} = await axios.get(url);
    const results = data.results.map((data: { name: any; }, index: number) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        };
    });
    pokemon.set(results);
};

fetchPokemon();