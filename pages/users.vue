<template>
    <v-app>
        <v-data-table
            dense
            :headers="headers"
            :items="users"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
    </v-app>
        
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            users: [],
            headers: [
                { text: 'Firstname', value: 'firstname' },
                { text: 'Lastname', value: 'lastname' },
                { text: 'Phone prefix', value: 'telephone.prefix' },
                { text: 'Phone number', value: 'telephone.number' },
                { text: 'Email', value: 'email' },
                { text: 'Date of birthday', value: 'dob' },
                { text: 'ID', value: 'id' },
            ],
        }
    },
    middleware: 'auth',
    layout: 'login',
    mounted() {
        axios.get('https://run.mocky.io/v3/31fafaf5-cc55-4cad-a945-ea2b9be78e3a')
        .then(response => (this.users = response.data.data))
    },
    computed: {
        
    },
    methods: {
        
    }

}
</script>


<style scoped>
    
</style>