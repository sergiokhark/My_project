<template>
    <v-container>
        <h1>Login</h1>

        <UserAuthForm buttonText="Login" :submitForm="loginUser" :hasName="false" />
    </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm'

export default {
    middleware: 'auth',
    auth: 'guest',
        components: {
            UserAuthForm
        },
        methods: {
            loginUser(loginInfo) {
                this.$auth.loginWith('local', {
                    data: loginInfo
                })
            }
        }
}
</script>