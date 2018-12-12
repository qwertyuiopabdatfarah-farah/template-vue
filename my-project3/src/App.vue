<template>
  <v-app>
     <template-header></template-header>
     <template-menu></template-menu>
     <router-view></router-view>
     <template-footer></template-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
   'template-header':Header,
   'template-menu': Menu,
   'template-footer': Footer,
  },
  data () {
    return {
      
    }
  }
}
</script>






<!-- <template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
 -->