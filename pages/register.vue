<template>
    <v-container>
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
            alert('You are successfully registered')
            document.location.href = '/'
        }
    }
}
</script>