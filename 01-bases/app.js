const app = Vue.createApp({
    template: `
        <h1> {{ message }} </h1>
        <p> {{ quote }} </p>
        <blockquote> -{{ author }} </blockquote>
    `,
    data () {
        return {
            message: 'Hola mundo',
            quote: `I'm Batman`,
            author: `Bruce Wayne`
        }
    }
});

app.mount('#myApp');