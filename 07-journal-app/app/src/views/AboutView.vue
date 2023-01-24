<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="redirectToDaybook" class="btn btn-primary">Primary</button>
    </div>
</template>

<script>
    export default {
        methods: {
            redirectToDaybook () {
                this.$router.push({ name: 'daybook' });
            }
        }
    }
</script>