<template>
<v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-icon class="mr-5" >
          mdi-cart
        </v-icon>
        <v-btn text to="/home">Home</v-btn>
        <v-btn text to="/users">Users</v-btn>
        <v-btn text to="/products">Products</v-btn>
        <v-spacer />
        <div v-if="$auth.loggedIn">    
          {{$auth.user.email}}
          <v-btn text @click="$auth.logout()">Logout</v-btn>
        </div>
        <div v-else>
          <v-btn text to="/home">Login</v-btn>
          <v-btn text to="/register">Register</v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  link to="/home"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon class="mr-5" >
                        mdi-home
                      </v-icon>
                      Home
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  link to="/users"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon class="mr-5" >
                        mdi-account-multiple
                      </v-icon>
                      Users
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  link to="/products"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon class="mr-5" >
                        mdi-shopping
                      </v-icon>
                      Products
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="80vh"
              rounded="lg"
            >
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import Menu from '~/components/Menu'

export default {
  data: () => ({
      
    }),
  components: {
    Menu
  },
}
</script>

<style scoped>
</style>
