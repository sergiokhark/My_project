<template>
    <v-card>
        <v-card-title>
            Order # {{order.number}}
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="order.items"
            hide-default-footer
            class="elevation-1"
        ></v-data-table>
        
        <v-card-text class="text-right font-weight-bold">
            Total:{{order.summary.total_items_amount.amount}} USD
        </v-card-text>
        <v-card-title>
            Customer info
        </v-card-title>
        <v-card-text>
            {{order.customer.firstname}} {{order.customer.lastname}}
            <v-spacer></v-spacer>
            {{order.customer.email}}
        </v-card-text>
        
        <v-card-title>
            Shipping info
        </v-card-title>
        <v-card-text>
            {{order.shipping_address.postal_code}} {{order.shipping_address.country_code}} {{order.shipping_address.administrative_area}}
            {{order.shipping_address.locality}} {{order.shipping_address.address_line1}}
            <v-spacer></v-spacer>
            {{order.shipping_address.telephone.prefix}} {{order.shipping_address.telephone.number}}
        </v-card-text>
        

    </v-card>
  
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
        headers: [
            {text: 'Name', value: 'name'},
            {text: 'Brand', value: 'brand'},
            {text: 'Price', value: 'price.amount'},
            {text: 'Quantity', value: 'quantity'},
            {text: 'Total', value: 'total.amount'},
            {text: 'Currency', value: 'price.currency'},
        ]
    }
  }
}
</script>
