<template>
    <h1>Lista de Canciones</h1>
    <table class="table">
        <thead>
            <th>Título</th>
            <th>Cantante</th>
            <th>Descripción</th>
            <th>Acciones</th>
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
                <td>
                    <router-link :to="song.id + '/edit'">Editar</router-link>
                    <a href="javascript:void(0)" @click="deleteSong(song.id)">Eliminar</a>
                </td>
            </tr>
        </tbody>
    </table>
    Mi select de Canciones
    <select name="" id="" v-model="myselectsong">
        <option v-for="song in songs" :key="song.id" :value="song.id"> {{ song.name }}</option>
    </select>
</template>
<script>
    export default {
       async created(){
            //console.log("Este es el token", localStorage.getItem('authToken'));
            const options = {
                method: "GET",
                headers: { 
                    'Authorization' : 'Token ' + localStorage.getItem('authToken')
                },
            }

            const response = await fetch("http://127.0.0.1:8000/api/song/all", options);
            const data = await response.json();

            console.log(data);

            this.songs = data.data;
        },
        data(){
            return{
                msg: "Hola mundo",
                songs: [],
                myselectsong: "",
            }
        },
        methods:{
            async deleteSong(id){
                //console.log(id);
                const options = {
                method: "DELETE",
                headers: { 
                    'Content-Type': 'application/json',
                    // 'Authorization' : 'Token <token>'
                },
            }

                const response = await fetch("http://127.0.0.1:8000/api/song/"+ id +"/destroy", options);
                const data = await response.json();
                // console.log(data.data.newList);
                this.songs = data.data.newList;
            
            }
        }
    }

</script>