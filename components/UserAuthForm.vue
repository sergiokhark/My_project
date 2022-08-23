<template>
<v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="#5C6BC0">
                        <v-toolbar-title v-if="!hasName">Login form</v-toolbar-title>
                        <v-toolbar-title v-else>Register form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form v-model="valid">
                           <v-text-field
                              v-model="userInfo.name"
                              prepend-icon="mdi-account"
                              label="Name"
                              name="login"
                              :rules="[required('name')]"
                              v-if="hasName"
                           ></v-text-field>
                           <v-text-field
                              v-model="userInfo.email"
                              prepend-icon="mdi-email"
                              label="Email"
                              :rules="[required('email'), emailFormat()]"
                           ></v-text-field>
                           <v-text-field
                              v-model="userInfo.password"
                              prepend-icon="mdi-lock"
                              label="Password"
                              type='password' 
                              :rules="[required('password'), minLength('password', 8)]"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn dark color="#5C6BC0" v-if="!hasName" to="/register">Registration</v-btn>
                        <v-btn dark color="#5C6BC0" v-if="hasName" to="/">Back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{buttonText}}</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>

</template>

<script>
  import validations from "@/utils/validations";
  export default {
    data() {
      return {
        valid: false,
        userInfo: {
          email: '',
          password: ''
        },
        ...validations
      }
    },
    props: ["submitForm", "buttonText", "hasName"]
  }
</script>

<style lang="scss" scoped>
</style>