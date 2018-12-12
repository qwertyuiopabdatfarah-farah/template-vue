<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon @click="setSideBar(!sideBar)"></v-toolbar-side-icon>   
    <v-toolbar-title class="white--text">Menu Vue</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-badge left overlap color="orange">
        <span slot="badge">1</span>
        <v-icon>shopping_cart</v-icon>
      </v-badge>
    </v-btn>
    <v-text-field
      slot="extension" 
      hide-details
      append-icon="mic"
      flat
      label="Search"
      prepend-inner-icon="search"
      solo-inverted
    ></v-text-field>
  </v-toolbar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      setSideBar  : 'setSideBar',
    }),
    search(){
        this.setSideBar(false)
    },
    cart(){
        this.setSideBar(false)
    }
  },
  computed: {
    ...mapGetters({
      sideBar   : 'sideBar',
    }),
  }
}
</script>