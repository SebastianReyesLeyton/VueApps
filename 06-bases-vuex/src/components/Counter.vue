<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>

    <h1>Map state</h1>

    <h2>Map state: {{ count }}</h2>
    <h2>Last mutation: {{ lastMutation }}</h2>

    <h1>Actions</h1>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt">random</button>

</template>

<script>

    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Counter',
        computed: {
            ...mapState({
                count: state => state.count,
                lastMutation: state => state.lastMutation
            })
        },
        methods: {
            increment () {
                this.$store.commit('increment');
            },
            incrementBy () {
                this.$store.commit('incrementBy', 5);
            },
            ...mapActions({
                randomInt: 'incrementRandomInt'
            })
        }
    }
</script>

<style>

</style>