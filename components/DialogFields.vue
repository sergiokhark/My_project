<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.username" label="Username"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.website" label="Site"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.company" label="Company"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.city" label="City"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.street" label="Street"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.suite" label="Suite"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    editedItem: {
      type: Object,
      default: {},
    },
  },
}
</script>
