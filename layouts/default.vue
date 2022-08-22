<template>
  <v-app>
    <Menu />
    <VerticalMenu />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import Menu from '~/components/Menu'
import VerticalMenu from '~/components/VerticalMenu'

export default {
  components: {
    Menu
  },
}
</script>
