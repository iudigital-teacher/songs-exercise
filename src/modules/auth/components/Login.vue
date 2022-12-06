<style>
    form{
        width: 400px;
        margin: 2em auto;
    }
</style>
<template>
    <form @submit.prevent="submitUser">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" v-model="user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
    export default {
        data(){
            return {

                user: {
                    email: null,
                    password: null
                }

            }
        },
        methods:{
            async submitUser(){

                const options = {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    body:  JSON.stringify(this.user)
                }

                const response = await fetch("http://127.0.0.1:8000/api/login/auth", options);
                const data = await response.json();
                localStorage.setItem('authToken', data.token)
                console.log(localStorage.getItem('authToken'));

            }
        }
    }
</script>