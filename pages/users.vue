<template>
  <div>
    <!-- <v-select
      v-model="selectedEmail"
      :options="users"
      label="email"
      @input="getUserByEmail"
      :reduce="email => email.id"
      clearable
    ></v-select> -->
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Users data</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>

          <!-- тут был v-dialog -->
          
            <EditDialog :formTitle="formTitle" :editedItem="editedItem" :defaultItem="defaultItem" :dialog="dialog" />
          
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>

import axios from 'axios'
import {mapActions} from 'vuex'
import EditDialog from '~/components/EditDialog'

export default {
  components: {
    EditDialog
  },
  data() {
    return {
      users: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'City', value: 'address.city' },
        { text: 'Street', value: 'address.street' },
        { text: 'Site', value: 'website' },
        { text: 'Phone', value: 'phone' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      search: '',
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        name: '',
        username: '',
        email: '',
        address: {
          city: '',
          street: '',
        },
        website: '',
        phone: '',
      },
      defaultItem: {
        name: '',
        username: '',
        email: '',
        address: {
          city: '',
          street: '',
        },
        website: '',
        phone: '',
      },
      selectedEmail: '',
    }
  },
  async mounted() {
    this.users = await this.getUsers()
  },
  middleware: 'auth',
  computed: {
    formTitle () {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
    },
  },
  methods: {
    editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
    },
    deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
    },
    async deleteItemConfirm () {
      try {
        await this.deleteUser()
        this.$toast.success('User deleted successfully')
      } catch (e) {
        this.$toast.error('User deletion error')
      } finally {
        this.closeDelete()
      }
    },
    close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
    },
    closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
    },
    async save () {
      try {
        await this.createUser()
        this.$toast.success('User successfully created')
      } catch (e) {
        this.$toast.error('User creation error')
      } finally {
        this.close()
      }
    },
    ...mapActions({
      getUsers: 'getUsers',
      createUser: 'createUser',
      deleteUser: 'deleteUser',
      //editUser: 'editUser'
    }),
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
}
</script>


<style scoped>
</style>