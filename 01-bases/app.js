const app = Vue.createApp({
    template: `
        <h1> {{ message }} </h1>
        <p> {{ quote }} </p>
        <blockquote> -{{ author }} </blockquote>

        <button v-on:click="changeQuote"> Change quote </button>
    `,
    data () {
        return {
            message: 'Hola mundo',
            quote: `I'm Batman`,
            author: `Bruce Wayne`
        }
    },
    methods: {
        changeQuote ( event ) {
            console.log('Hola mundo', event);
            this.author = 'Juan Sebastian Reyes Leyton';

            this.capitalize();
        },
        capitalize () {
            this.quote = this.quote.toUpperCase();
        }
    }
});

app.mount('#myApp');