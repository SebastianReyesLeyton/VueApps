<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
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
            <textarea cols="30" rows="10" placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
        </div>
    </template>

    <Fab 
        icon="fa-save"
        @on:click="saveEntry"
    />

</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    import getDateMonthYear from '@/modules/daybook/helpers/getDateMonthYear';

    export default {
        props: {
            id: {
                type: String, 
                required: true
            }
        },

        data () {
            return {
                entry: null
            }
        },  

        components: {
            Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
        },

        methods: {
            loadEntry () {
                const entry = this.getEntriesById(this.id);
                if ( !entry ) return this.$router.push({ name: 'no-entry' })

                this.entry = entry;
            },
            async saveEntry () {
                console.log('Guardando entrada');
                this.updateEntry( this.entry );

            },
            ...mapActions('journal', ['updateEntry'])
        },

        computed: {
            day () {
                const { day } = getDateMonthYear( this.entry.date );
                return day;
            },
            month () {
                const { month } = getDateMonthYear( this.entry.date );
                return month;
            },
            yearDay () {
                const { yearDay } = getDateMonthYear( this.entry.date );
                return yearDay;
            },
            ...mapGetters('journal', ['getEntriesById'])
        },  

        created () {
            console.log(this.id);
            this.loadEntry();
        },

        watch: {
            id () {
                this.loadEntry();
            }
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