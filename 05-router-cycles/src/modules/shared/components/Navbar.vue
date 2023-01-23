<template>
    <div>
        <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { pokemonId: 20 } }">Pokemon id</router-link>
        <router-link :to="{ name: 'pokemon-about' }">Pokemon About</router-link>
    </div>
</template>

<script>
    export default {

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

    div .router-link-exact-active {
        color: #42b983;
    }
</style>