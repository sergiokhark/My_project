<template>
  <v-card>
    <v-card-title>
      Orders
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            append-icon="mdi-magnify"
            v-model="filter.number"
            label="Order number"
            @input="getFilteredOrders"
          />
        </v-col>
        <v-col>
          <v-text-field
            append-icon="mdi-magnify"
            v-model="filter.created_at"
            label="Date"
            @input="getFilteredOrders"
          />
        </v-col>
      </v-row>
      
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="orders"
      :search="search"
      :items-per-page="5"
    >
      <template v-slot:top>
        <ModalDialog
          formTitle="Order details"
          :dialog="orderDialog"
          :showCancel="false"
          btnName="Cancel"
          dialogWidth="850px"
          @save="orderDialog = false"
        >
          <OrderDetails :order="order" />
        </ModalDialog>
      </template>
      <template v-slot:[`item.status_before`]="{ item }">
        <v-chip
          :color="getColor(item.status_before)"
          label
          text-color="black"
        >
          {{ item.status_before }}
        </v-chip>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="showCustomerInfo"> mdi-eye </v-icon>
        <v-icon @click="changeStatus(item)"> mdi-swap-horizontal </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import ModalDialog from '~/components/ModalDialog'
import OrderDetails from '~/components/OrderDetails'
import getFilteredItems from '~/mixins/getFilteredItems'

export default {
  middleware: 'auth',
  components: {
    ModalDialog,
    OrderDetails
  },
  mixins: [getFilteredItems],
  data() {
    return {
      search: '',
      orders: [],
      order: {},
      headers: [
        { text: 'Status', value: 'status_before' },
        { text: 'Order number', value: 'number' },
        { text: 'Create date', value: 'created_at' },
        { text: 'Lastname', value: 'customer.lastname' },
        { text: 'Firstname', value: 'customer.firstname' },
        { text: 'Price', value: 'summary.total_due.amount' },
        { text: 'Currency', value: 'summary.total_due.currency' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      orderDialog: false,
      filter: {
        number: null,
        created_at: null
      }
    }
  },
  async mounted() {
    this.orders = await this.getOrders()
    this.order = await this.getOrder()
    console.log(this.order)
  },
  methods: {
    ...mapActions({
      getOrders: 'getOrders',
      getOrder: 'getOrder'
    }),
    getColor(status) {
      if (status === 'placed') return '#EEE8AA'
      return '#98FB98'
    },
    changeStatus(item) {
        let temp = item.status_before
        item.status_before = item.status
        item.status = temp
    },
    showCustomerInfo(){
      this.orderDialog = true
    },
    async getFilteredOrders() {
      let orders = await this.getOrders()
      this.orders = this.getFilteredItems(orders, this.filter)
    }
  },
}
</script>