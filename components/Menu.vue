<template>
    <v-app-bar app color="blue">
      <v-btn text to="/home">Home</v-btn>
      <v-btn text to="/users">Users</v-btn>
      <v-btn text to="/products">Products</v-btn>
      <v-spacer />
      <div v-if="$auth.loggedIn">    
        {{$auth.user.email}}
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/home">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>
</template>