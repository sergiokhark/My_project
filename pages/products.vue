<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Products data</v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
            <v-btn
              elevation="0"
              color="primary"
              size="small"
              @click="createDialog = true"
            >
              Add Product
            </v-btn>
          </div>

          <!-- Компонент Add Product -->
          <ModalDialog
            :dialog="createDialog"
            formTitle="Add product"
            :created="true"
            @close="closeCreateDialog"
            @create="create"
          >
            <ProductsDialogFields :editedItem="editedItem" />
          </ModalDialog>

          <!-- Компонент Edit Product -->
          <ModalDialog
            :dialog="editDialog"
            formTitle="Edit product"
            @close="closeEditDialog"
            @save="save"
          >
            <ProductsDialogFields :editedItem="editedItem" />
          </ModalDialog>

          <!-- Компонент Delete Product -->
          <ModalDialog
            :dialog="deleteDialog"
            formTitle="Delete product"
            btnName="Delete"
            @close="deleteDialog = false"
            @save="removeItem"
          >
            <h2>Are you sure?</h2>
          </ModalDialog>
        </v-toolbar>

        <!-- Filtering -->
        <v-card-text>
          <v-row>
            <v-col>
              <input
                class="text-field__input"
                v-model="search"
                type="text"
                placeholder="Search"
              />
            </v-col>
            <v-col>
              <input
                class="text-field__input"
                v-model="filter.name"
                type="text"
                placeholder="Name"
                @change="getFilteredProducts"
              />
            </v-col>
            <v-col>
              <input
                class="text-field__input"
                v-model="filter.type"
                type="text"
                placeholder="Type"
                @change="getFilteredProducts"
              />
            </v-col>
            <v-col>
              <input
                class="text-field__input"
                v-model="filter.brand"
                type="text"
                placeholder="Brand"
                @change="getFilteredProducts"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="openDeleteDialog(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import ModalDialog from '~/components/ModalDialog'
import ProductsDialogFields from '~/components/ProductsDialogFields'
import getFilteredItems from '~/mixins/getFilteredItems'

export default {
  middleware: 'auth',
  components: {
    ModalDialog,
    ProductsDialogFields,
  },
  mixins: [getFilteredItems],
  data() {
    return {
      products: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Brand', value: 'brand' },
        { text: 'Price', value: 'real_price.amount' },
        { text: 'Currency', value: 'real_price.currency' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      search: '',
      createDialog: false,
      editDialog: false,
      deleteDialog: false,
      deleteItem: null,
      editedItem: {
        name: '',
        type: '',
        brand: '',
        real_price: {
          amount: '',
          currency: '',
        },
      },
      defaultItem: {
        name: '',
        type: '',
        brand: '',
        real_price: {
          amount: '',
          currency: '',
        },
      },
      filter: {
        name: null,
        type: null,
        brand: null,
      },
    }
  },
  async mounted() {
    this.products = await this.getProducts()
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts',
      createProduct: 'createProduct',
      deleteProduct: 'deleteProduct',
      updateProduct: 'updateProduct',
    }),
    getDefaultItem() {
      this.editedItem = JSON.parse(JSON.stringify(this.defaultItem))
    },
    closeCreateDialog() {
      this.createDialog = false
      this.getDefaultItem()
    },
    closeEditDialog() {
      this.editDialog = false
      this.getDefaultItem()
    },
    editItem(item) {
      this.editedItem = JSON.parse(JSON.stringify(item))
      this.editDialog = true
    },
    openDeleteDialog(item) {
      this.deleteDialog = true
      this.deleteItem = item
    },
    async create() {
      try {
        await this.createProduct()
        this.$toast.success('Product successfully created')
      } catch (e) {
        this.$toast.error('Product create error')
      } finally {
        this.closeCreateDialog()
      }
    },
    async save() {
      try {
        await this.updateProduct()
        this.$toast.success('Product successfully updated')
      } catch (e) {
        this.$toast.error('Product update error')
      } finally {
        this.closeEditDialog()
      }
    },
    async removeItem() {
      try {
        await this.deleteProduct()
        this.$toast.success('Product successfully deleted')
      } catch (e) {
        this.$toast.error('Product delete error')
      } finally {
        this.deleteDialog = false
      }
    },
    async getFilteredProducts() {
      let products = await this.getProducts()
      this.products = this.getFilteredItems(products, this.filter)
    },
  },
}
</script>


