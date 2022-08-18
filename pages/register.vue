<template>
    <v-container>
        <h1>Register</h1>

        <UserAuthForm buttonText="Register" :submitForm="registerUser" hasName="true" />
    </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm'

export default {
    layout: 'login',
    
    components: {
        UserAuthForm
    },
    methods: {
        registerUser(registrationInfo) {
            alert('Pressed a button')
        }
    }
}
</script>