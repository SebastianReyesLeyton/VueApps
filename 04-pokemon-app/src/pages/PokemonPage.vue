<template>
    <h1 v-if="!pokemon" >Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
    
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selectedPokemon="checkAnswer"/>

        <template v-if="showAnswer">
            <h2>{{ message }}</h2>
            <button @click="clearGame">Nuevo juego</button>
        </template>

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
                showAnswer: false,
                pokemon: null,
                message: ''
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
                this.pokemon = this.pokemonArr[rndInt];
            },
            checkAnswer ( pokemonId ) {
                this.showAnswer = true;
                this.showPokemon = pokemonId == this.pokemon.id;
                this.message = (this.showPokemon) ? `Correcto era ${this.pokemon.name}` : `Opps!, el pokemon era ${this.pokemon.name}`;
            },
            clearGame () {
                this.showPokemon = false;
                this.pokemon = null;
                this.message = '';
                this.showAnswer = false;
                this.mixPokemonArray();

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