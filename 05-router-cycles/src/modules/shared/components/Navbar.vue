<template>
    <div>
        <CustomLink 
            v-for="(link, item) in links"
            :key="item"
            :link="link"
        />
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        data () {
            return {
                links: [
                    { to: 'pokemon-home', name: 'Pokemons' },
                    { to: 'pokemon-id', name: 'Pokemon ID', params: { pokemonId: 10 } },
                    { to: 'pokemon-about', name: 'Pokemon About' },

                    { to: 'dbz-characters', name: 'DBZ Characters' },
                    { to: 'dbz-about', name: 'DBZ About' },
                    
                    { to: 'https://google.com', name: 'Google' }
                ]
            }
        },
        components: {
            CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
        }
    }
</script>

<style scoped>
    div {
        padding: 0 30px;
    }

    div a {
        font-weight: 400;
        color: #2c3e50;
        margin: 0 10px;
    }
</style>