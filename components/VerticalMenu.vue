<template>
  <v-list color="transparent">
    <v-list-item link to="/home">
      <v-list-item-content>
        <v-list-item-title>
          <v-icon class="mr-5"> mdi-home </v-icon>
          Home
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/users">
      <v-list-item-content>
        <v-list-item-title>
          <v-icon class="mr-5"> mdi-account-multiple </v-icon>
          Users
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/products">
      <v-list-item-content>
        <v-list-item-title>
          <v-icon class="mr-5"> mdi-shopping </v-icon>
          Products
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/orders">
      <v-list-item-content>
        <v-list-item-title>
          <v-icon class="mr-5"> mdi-cart-check </v-icon>
          Orders
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>