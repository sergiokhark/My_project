<template>
  <div>
    <v-select class="filter"
      v-model="filter.email"
      :options="users"
      label="email"
      @input="getFilteredUsers"
      :reduce="(email) => email.email"
      clearable
    ></v-select>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Users data</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-row class="filter">
            <v-col>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                append-icon="mdi-magnify"
                v-model="filter.name"
                label="Name"
                @input="getFilteredUsers"
              />
            </v-col>
            <v-col>
              <v-text-field
                append-icon="mdi-magnify"
                v-model="filter.username"
                label="Username"
                @input="getFilteredUsers"
              />
            </v-col>
            <v-col>
              <v-text-field
                append-icon="mdi-magnify"
                v-model="filter.email"
                label="Email"
                @input="getFilteredUsers"
              />
            </v-col>
            <v-col>
              <v-text-field
                append-icon="mdi-magnify"
                v-model="filter.address.city"
                label="City"
                @input="getFilteredUsers"
              />
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="createDialog = true">
            Add User
          </v-btn>

          <!-- Компонент Add user -->
          <ModalDialog
            formTitle="Add user"
            :dialog="createDialog"
            :created="true"
            @close="closeCreateDialog"
            @create="create"
          >
            <DialogFields :editedItem="editedItem" />
          </ModalDialog>

          <!-- Компонент Edit user -->
          <ModalDialog
            formTitle="Edit user"
            :dialog="editDialog"
            @close="closeEditDialog"
            @save="save"
          >
            <DialogFields :editedItem="editedItem" />
          </ModalDialog>

          <!-- Компонент Confirm delete user -->
          <ModalDialog
            formTitle="Delete user"
            :dialog="deleteDialog"
            btnName="Delete"
            @close="deleteDialog = false"
            @save="removeItem"
          >
            <h2>Are you sure?</h2>
          </ModalDialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="confirmDeleteDialog(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import ModalDialog from '~/components/ModalDialog'
import DialogFields from '~/components/DialogFields'

export default {
  components: {
    ModalDialog,
    DialogFields,
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
      createDialog: false,
      editDialog: false,
      deleteDialog: false,
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
      deleteItem: null,
      filter: {
        name: null,
        email: null,
        username: null,
        address: {
          city: null,
        }
      },
    }
  },
  async mounted() {
    this.users = await this.getUsers()
  },
  middleware: 'auth',
  methods: {
    editItem(item) {
      this.editedItem = JSON.parse(JSON.stringify(item))
      this.editDialog = true
    },
    getDefaultItem() {
      this.$nextTick(() => {
        this.editedItem = JSON.parse(JSON.stringify(this.defaultItem))
      })
    },
    closeCreateDialog() {
      this.createDialog = false
      this.getDefaultItem()
    },
    closeEditDialog() {
      this.editDialog = false
      this.getDefaultItem()
    },
    async create() {
      try {
        await this.createUser()
        this.$toast.success('User successfully created')
      } catch (e) {
        this.$toast.error('User create error')
      } finally {
        this.closeCreateDialog()
      }
    },
    async save() {
      try {
        await this.updateUser()
        this.$toast.success('User successfully updated')
      } catch (e) {
        this.$toast.error('User update error')
      } finally {
        this.closeEditDialog()
      }
    },
    async removeItem() {
      try {
        await this.deleteUser()
        this.$toast.success('User deleted successfully')
      } catch (e) {
        this.$toast.error('User delete error')
      } finally {
        this.deleteDialog = false
      }
    },
    confirmDeleteDialog(item) {
      this.deleteDialog = true
      this.deleteItem = item
    },
    ...mapActions({
      getUsers: 'getUsers',
      createUser: 'createUser',
      updateUser: 'updateUser',
      deleteUser: 'deleteUser',
    }),
    async getFilteredUsers() {
      this.users = await this.getUsers()
      for (const [key, value] of Object.entries(this.filter)) {
        console.log(key, value)
        if (value) {
          this.users = this.users.filter((itm) => itm[key] === value)
        }
      }
    },
  },
}
</script>


<style scoped>
.filter {
  max-width: 700px;
  margin: 0 auto;
}
</style>