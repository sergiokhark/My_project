<template>
  <v-card>
    <v-card-title>
      Statistics
    </v-card-title>
    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Users</td>
            <td>{{ users.length }}</td>
          </tr>
          <tr>
            <td>Products</td>
            <td>{{ products.length }}</td>
          </tr>
          <tr>
            <td>Orders</td>
            <td>{{ orders.length }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'auth',
  async mounted() {
    this.users = await this.getUsers()
    this.products = await this.getProducts()
    this.orders = await this.getOrders()
  },
  data() {
    return {
      users:[],
      products: [],
      orders: [],

      ...mapActions({
        getUsers: 'getUsers',
        getProducts: 'getProducts',
        getOrders: 'getOrders',
      })
    }
  },
}
</script>
