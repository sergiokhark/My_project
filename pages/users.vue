<template>
    <div>
        <div class="content">
            <table class="table" >
                <caption class="table-title">Users list</caption>
                <tr class="table-header">
                    <td>Number</td>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Phone</td>
                    <td>e-mail</td>
                </tr>
                <tr v-for="(user, index) in users" :key="index">
                    <td>
                        {{index + 1}}
                    </td>
                    <td>
                        {{user.firstname}}
                    </td>
                    <td>
                        {{user.lastname}}
                    </td>
                    <td>
                        {{user.telephone.number}}
                    </td>
                    <td>
                        {{user.email}}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        axios.get('https://run.mocky.io/v3/0b90eddc-eb9b-461d-9974-81c4cac6e277')
        .then(response => (this.users = response.data.data))
        //console.log(this.users)
    }

}
</script>

<style scoped>
    .table {
        border: 1px solid #000;
    }
    .table td {
        border: 1px solid #000;
        min-width: 100px;
        height: 40px;
        padding: 0px 15px 0px 15px; 
    }
    .table-title {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        margin: 0px 0px 15px 0px;
        font-size: 20px;
        font-weight: 700;
        text-decoration: underline;
    }
    .table-header {
        background-color: burlywood;
        font-weight: 700;
        text-align: center;
    }
    .content {
        max-width: 900px;
        margin: 0px auto;
    }

</style>