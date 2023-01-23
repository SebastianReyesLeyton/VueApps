import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) );
    return pokemonsArr.map( (_, index) => index + 1 );
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
    return pokemons;
}

const getPokemonNames = async ( [ p1, p2, p3, p4 ] = [] ) => {
    const promiseArr = [
        pokemonApi.get(`/${ p1 }`),
        pokemonApi.get(`/${ p2 }`),
        pokemonApi.get(`/${ p3 }`),
        pokemonApi.get(`/${ p4 }`),
    ]

    const res = await Promise.all( promiseArr );
    return res.map( v => ({ name: v.data.name, id: v.data.id }) )
}

export default getPokemonOptions;