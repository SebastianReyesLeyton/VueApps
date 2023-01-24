<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>
    <h1>Map state</h1>
    <h2>Map state: {{ count }}</h2>
    <h2>Last mutation: {{ lastMutation }}</h2>

</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: 'Counter',
        computed: {
            ...mapState({
                count: state => state.count,
                lastMutation: state => state.lastMutation
            })
        }
    }
</script>

<style>

</style>