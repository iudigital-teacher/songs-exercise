<template>
    <h1>Lista de Canciones</h1>
    <table class="table">
        <thead>
            <th>Título</th>
            <th>Cantante</th>
            <th>Descripción</th>
            <!-- <th></th> -->
        </thead>
        <tbody>
            <tr v-for="song in songs" :key="song.id">
                <td>{{ song.name }}</td>
                <td>{{ song.singer }}</td>
                <td>
                    {{ 
                        song.description 
                    }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
       async created(){
            const options = {
                method: "GET"
            }

            const response = await fetch("http://127.0.0.1:8000/api/song/all", options);
            const data = await response.json();

            console.log(data);

            this.songs = data.data;
        },
        data(){
            return{
                msg: "Hola mundo",
                songs: []
            }
        }
        
    }

</script>