<template>
    <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.name"
                label="Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.type"
                label="Type"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.brand"
                label="Brand"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.real_price.amount"
                label="Price"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.real_price.currency"
                label="Currency"
              ></v-text-field>
            </v-col>
          </v-row>
</template>

<script>
export default {
    props: {
        editedItem: {
            type: Object,
            default: {}
        }
    }
}
</script>