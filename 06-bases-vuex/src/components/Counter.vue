<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count }}</h2>

    <h1>Map state</h1>

    <h2>Map state: {{ count }}</h2>
    <h2>Square counter: {{ $store.getters.squareCount }}</h2>
    <h2>Last mutation: {{ lastMutation }}</h2>

    <h1>Actions</h1>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">random</button>

</template>

<script>

    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Counter',
        computed: {
            ...mapState( 'counter', ['count', 'lastMutation', 'isLoading'])
        },
        methods: {
            increment () {
                this.$store.commit('counter/increment');
            },
            incrementBy () {
                this.$store.commit('counter/incrementBy', 5);
            },
            ...mapActions('counter', {
                randomInt: 'incrementRandomInt'
            })
        }
    }
</script>

<style>

</style>