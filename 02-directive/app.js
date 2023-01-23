/* Data */

const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

/* Vue app */

const app = Vue.createApp({
    template: `

        <h1> {{ newQuote }} </h1>

        <input type="text" v-model="newQuote" v-on:keypress.enter="addQuote" />

        <hr>

        <h1> Batman quotes </h1>

        <ul>
            <li v-for="({ quote, author }, index) in quotes">
                <span>{{ index + 1 }} - {{ quote }}</span>
                <blockquote v-if="author"> -{{ author }} </blockquote>
                <blockquote v-show="author"> -{{ author }} </blockquote>
            </li>
        </ul>
    `,
    data: () => ({
        quotes: quotes,
        newQuote: 'Hola mundo'
    }),
    methods: {
        addQuote () {
            console.log(this.quotes);

            this.quotes.unshift({
                quote: this.newQuote
            });
        }
    }
});

app.mount('#myApp');