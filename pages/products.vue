<template>
<v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  middleware: 'auth',
  data() {
    return {
      products: [],
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Type', value: 'type'},
        {text: 'Brand', value: 'brand'},
        {text: 'Price', value: 'real_price.ammount'},
        {text: 'Currency', value: 'real_price.currency'},
      ],
      search: '',
    }
  },
  mounted() {
    axios.get('https://run.mocky.io/v3/aa058c24-65e0-469c-b202-9d5d2bc1d494')
    .then( (response) => {
      this.products = response.data.data
    })
    //console.log(this.products) 
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts',
    }),
  },
}
</script>