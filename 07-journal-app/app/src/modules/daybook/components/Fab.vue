<template>
    <button class="btn btn-primary">
        <i class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
    button {
        position: fixed;

        display: flex;
        justify-content: center;
        align-items: center;
        
        bottom: 1.5rem;
        right: 1.5rem;
        
        width: 60px;
        height: 60px;

        border-radius: 100%;
    }
</style>