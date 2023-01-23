<template>
    <h1>About page</h1>
    <h3>{{ name }}</h3>
    <button @click="onChangeName">Cambiar Nombre</button>
</template>

<script>
    export default {
        data () {
            return {
                name: 'Juan'
            }
        },
        methods: {
            onChangeName () {
                this.name = 'Melissa'
            }
        },
        beforeCreate () {
            console.log("beforeCreate");
        },
        created () {
            // Peticiones HTTP
            console.log("created");
        },
        beforeMount () {
            console.log("beforeMount");
        },
        mounted () {
            console.log("mounted");
        },
        beforeUpdate () {
            console.log("beforeUpdate");
        },
        updated () {
            console.log("updated");
        },
        activated () {
            console.log("activated");
        },
        deactivated () {
            console.log("deactivated");
        },
        beforeUnmount() {
            console.log("beforeUnmount");
        },
        unmounted () {
            console.log("unmounted");
        },
        errorCaptured () {
            console.log("errorCaptured");
        },
        renderTracked () {
            console.log("renderTracked");
        },
        renderTriggered () {
            console.log("renderTriggered");
        }
    }
</script>

<style>

</style>