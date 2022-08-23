<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <HorizontalMenu />
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <VerticalMenu />
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
import HorizontalMenu from '~/components/HorizontalMenu'
import VerticalMenu from '~/components/VerticalMenu'

export default {
  components: {
    HorizontalMenu,
    VerticalMenu
  },
}
</script>

<style scoped>
</style>
