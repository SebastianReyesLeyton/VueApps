<template>
    <h1 v-if="!pokemon" >Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
    
        <PokemonPicture :pokemonId="pokemon" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selectedPokemon="checkAnswer"/>
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
                showPokemon: false,
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
            },
            checkAnswer ( pokemonId ) {
                this.showPokemon = pokemonId == this.pokemon;
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