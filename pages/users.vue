<template>
  <v-card>
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
          <div>
            <v-btn
              elevation="0"
              color="primary"
              size="small"
              @click="createDialog = true"
              >Add user</v-btn
            >
          </div>

          <!-- Add user -->
          <ModalDialog
            formTitle="Add user"
            :dialog="createDialog"
            :created="true"
            @close="closeCreateDialog"
            @create="create"
          >
            <UsersDialogFields :editedItem="editedItem" />
          </ModalDialog>

          <!-- Edit user -->
          <ModalDialog
            formTitle="Edit user"
            :dialog="editDialog"
            @close="closeEditDialog"
            @save="save"
          >
            <UsersDialogFields :editedItem="editedItem" />
          </ModalDialog>

          <!-- Confirm delete user -->
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
                @change="getFilteredUsers"
              />
            </v-col>
            <v-col>
              <input
                class="text-field__input"
                v-model="filter.username"
                type="text"
                placeholder="Username"
                @change="getFilteredUsers"
              />
            </v-col>
            <v-col>
              <input
                class="text-field__input"
                v-model="filter.email"
                type="text"
                placeholder="Email"
                @change="getFilteredUsers"
              />
            </v-col>
            <v-col>
              <input
                class="text-field__input"
                v-model="filter.city"
                type="text"
                placeholder="City"
                @change="getFilteredUsers"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                v-model="filter.email"
                :options="users"
                placeholder="Filter by email (Vue select)"
                label="email"
                @input="getFilteredUsers"
                :reduce="(email) => email.email"
                clearable
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="confirmDeleteDialog(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import ModalDialog from '~/components/ModalDialog'
import UsersDialogFields from '~/components/UsersDialogFields'
import getFilteredItems from '~/mixins/getFilteredItems'

export default {
  components: {
    ModalDialog,
    UsersDialogFields,
  },
  mixins: [getFilteredItems],
  data() {
    return {
      users: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'Site', value: 'website' },
        { text: 'Company', value: 'company' },
        { text: 'City', value: 'city' },
        { text: 'Street', value: 'street' },
        { text: 'Suite', value: 'suite' },
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
        website: '',
        company: '',
        city: '',
        street: '',
        suite: '',
        phone: '',
      },
      defaultItem: {
        name: '',
        username: '',
        email: '',
        website: '',
        company: '',
        city: '',
        street: '',
        suite: '',
        phone: '',
      },
      deleteItem: null,
      filter: {
        name: null,
        email: null,
        username: null,
        city: null,
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
    confirmDeleteDialog(item) {
      this.deleteDialog = true
      this.deleteItem = item
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
    ...mapActions({
      getUsers: 'getUsers',
      createUser: 'createUser',
      updateUser: 'updateUser',
      deleteUser: 'deleteUser',
    }),
    async getFilteredUsers() {
      let users = await this.getUsers()
      this.users = this.getFilteredItems(users, this.filter)
    },
  },
}
</script>

