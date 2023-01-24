<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, jueves</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary mx-2">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea cols="30" rows="10" placeholder="¿Qué sucedió hoy?"></textarea>
    </div>

    <Fab icon="fa-save"/>

</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        components: {
            Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
        }
    }
</script>

<style lang="scss" scoped>

    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }



</style>