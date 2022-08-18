<template>
  <v-app>
    <v-app-bar app color="blue">
      <v-spacer />
      <div v-if="$auth.loggedIn">    
        {{$auth.user.email}}
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
  </v-app>
</template>


<script>
export default {
  
}
</script>
