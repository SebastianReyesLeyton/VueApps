<template>
  <h2> Counter !! </h2>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
    export default {
        name: 'Counter',
        data () {
            return {
                counter: 5
            }
        },
        methods: {
            getSquareValue () {
                return this.counter * this.counter;
            },
            increase () {
                this.counter++;
            },
            decrease () {
                this.counter--;
            }
        },
        computed: {
            squareCounter () {
                return this.counter * this.counter;
            }
        }
    }
</script>

<style>
    button {
        margin: 0 5px;
        background-color: #64B687;
        border-radius: 0.15rem;
    }
</style>