<template>
  <h2> {{ customTitle }} </h2>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
    export default {
        name: 'Counter',
        props: {
            title: String,
            start: {
                type: Number,
                // required: true,
                default: 100
            }
        },
        data () {
            return {
                counter: this.start
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
            },
            customTitle () {
                return this.title || 'Counter';
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