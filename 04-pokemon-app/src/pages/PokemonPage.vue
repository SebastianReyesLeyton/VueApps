<template>
    <h1 v-if="!pokemon" >Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
    
        <PokemonPicture :pokemonId="pokemon" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr"/>
    </div>
</template>

<script>
    import PokemonPicture from '@/components/PokemonPicture.vue';
    import PokemonOptions from '@/components/PokemonOptions.vue';

    import getPokemonOptions from '@/helpers/getPokemonOptions';

    export default {
        name: 'PokemonPage',
        data () {
            return {
                pokemonArr: [],
                showPokemon: true,
                pokemon: null
            }
        },
        components: {
            PokemonPicture,
            PokemonOptions
        },
        methods: {
            async mixPokemonArray () {
                this.pokemonArr = await getPokemonOptions();

                const rndInt = Math.floor(Math.random() * 4)
                this.pokemon = this.pokemonArr[rndInt].id;
            }
        },
        mounted () {
            console.log('mounted');
            this.mixPokemonArray();
        }
    }
</script>

<style>

</style>