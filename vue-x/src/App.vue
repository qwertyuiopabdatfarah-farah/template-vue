<template>
  <v-app class="grey lighten-4">
    <nav-bar></nav-bar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
  },
  data () {
    return {
      //
    }
  }
}
</script>
