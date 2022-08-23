<template>
    <v-container>
        <UserAuthForm buttonText="Login" :submitForm="loginUser" :hasName="false" />
    </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm'

export default {
    layout: 'login',
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
