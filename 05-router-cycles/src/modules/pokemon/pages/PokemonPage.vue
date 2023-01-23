<template>
    <h1>Pokemon page: {{ id }}</h1>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style>

</style>