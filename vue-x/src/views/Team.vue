<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

  
     <v-container class="my-5">
       <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in persons" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2"> 
               <img v-bind:src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>  
            <v-card-options>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>  
            </v-card-options>  
          </v-card>  
        </v-flex>        
       </v-layout>  
      </v-container>
  </div>
</template>
<script>
export default {
   data: function(){
    return{
      persons: [
          {  name: 'Erwin', role: 'Programmer', avatar: '/img/image1.png' },
          {  name: 'Ucup',  role: 'Politik', avatar: '/img/image2.jpg' },
          {  name: 'Irfan', role: 'Penyapu', avatar: '/img/image1.png' },
          {  name: 'Erwins', role: 'Programmers', avatar: '/img/image1.png' },
          {  name: 'Ucups',  role: 'Politiks', avatar: '/img/image2.jpg' },
          {  name: 'Irfans', role: 'Penyapus', avatar: '/img/image1.png' },
      ]
    }
   },
  }
</script>