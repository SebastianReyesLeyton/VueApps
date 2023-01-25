<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
    
            <div>

                <input type="file" @change="onSelectedImage" ref="imageSelector" v-show="false">

                <button v-if="entry.id" class="btn btn-danger mx-2" @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
    
                <button class="btn btn-primary mx-2" @click="onSelectImage">
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

    <img v-if="localImage" :src="localImage" alt="entry-picture" class="img-thumbnail">

</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    import getDateMonthYear from '@/modules/daybook/helpers/getDateMonthYear';
    import Swal from 'sweetalert2';

    export default {
        props: {
            id: {
                type: String, 
                required: true
            }
        },

        data () {
            return {
                entry: null,
                localImage: null,
                file: null
            }
        },  

        components: {
            Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
        },

        methods: {
            loadEntry () {

                let entry;
                
                if ( this.id === 'new' ) {
                    entry = {
                        text: '',
                        date: new Date().toDateString()
                    }
                } else {
                    entry = this.getEntriesById(this.id);
                    if ( !entry ) return this.$router.push({ name: 'no-entry' })
                }

                this.entry = entry;
            },
            async saveEntry () {

                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: true
                });
                Swal.showLoading();

                let message = '';

                if ( this.entry.id ) {
                    await this.updateEntry( this.entry );
                    message = "Entrada actualizada con éxito";
                } else {
                    const id = await this.createEntry( this.entry );
                    this.$router.push({ name: 'entry', params: { id } })
                    message = "Entrada registrada con éxito";
                    
                }
                
                Swal.fire('Guardado', message, 'success');

            },
            async onDeleteEntry () {

                const { isConfirmed } = await Swal.fire({
                    title: '¿Está seguro?',
                    text: 'Una vez borrado, no se puede recuperar',
                    showDenyButton: true,
                    confirmButtonText: 'Si, estoy seguro'
                });

                if ( isConfirmed ) {
                    new Swal({
                        title: 'Espere por favor',
                        allowOutsideClick: false
                    });

                    Swal.showLoading();

                    await this.deleteEntry( this.entry.id );
                    this.$router.push({ name: 'no-entry' });

                    Swal.fire('Eliminado', '', 'success');
                }

            },
            onSelectedImage ( event ) {
                const file = event.target.files[0];

                console.log(file)

                this.file = file;

                if ( file ) {
                    const fr = new FileReader();
                    fr.onload = () => this.localImage = fr.result;
                    fr.readAsDataURL( file );
                } else {
                    this.localImage = null;
                }

            },
            onSelectImage () {
                this.$refs.imageSelector.click();
            },
            ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry'])
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

    img {
        width: 150px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
    }


</style>