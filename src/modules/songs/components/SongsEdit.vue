<template>
    <h1>Editar canción</h1>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Título</label>
            <input type="text" class="form-control" id="name" v-model="song.name">
        </div>
        <div class="mb-3">
            <label for="singer" class="form-label">Cantante</label>
            <input type="text" class="form-control" id="singer" v-model="song.singer">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Descripción</label>
            <textarea class="form-control" id="description" rows="3" v-model="song.description"></textarea>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" value="1" v-model="song.opinion" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Excelente
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" value="0" v-model="song.opinion" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                Mas o menos
            </label>
        </div>
        <button @click="updateSong">Guardar</button> 
    </form>

</template>

<script>
    export default {
        props:['id'],
        async created(){
            const options = {
                method: "GET"
            }

            const response = await fetch("http://127.0.0.1:8000/api/song/" + this.id + "/edit", options);
            const data = await response.json();

            // console.log(data);
            let editSongData = {
                name: data.data.name,
                singer: data.data.singer,
                description: data.data.description,
                opinion: data.data.opinion
            }

            this.song = editSongData;
        },
        data(){
            return{
                song: {
                    name: "",
                    singer: "",
                    description: "",
                    opinion: ""
                }
            }
        },
        methods:{
            async updateSong(e){
                e.preventDefault();
                const options = {
                method: "PUT",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization' : 'Token <token>'
                },
                body:  JSON.stringify(this.song)
            }

                const response = await fetch("http://127.0.0.1:8000/api/song/"+ this.id +"/update", options);
                const data = await response.json();

                // console.log(data);

                this.$router.replace({path: '/list'});

            }
        }
        
    }
</script>
<style scoped>
    form{
        width: 400px;
        margin: 2em auto;
    }
</style>