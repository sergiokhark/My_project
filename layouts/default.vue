<template>
  <v-app>
    <Menu />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import Menu from '~/components/Menu'

export default {
  components: {
    Menu
  },
}
</script>
