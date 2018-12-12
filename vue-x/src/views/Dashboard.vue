<template>
	<div class="home">
		<!-- <p class="red white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p class="pink lighten-2 black--text text--darken-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<h3 class="display-2">Massive Dmassibve</h3>
		<p class="headline">Head</p> -->
		<!-- <v-btn class="red white--text">Click Me</v-btn>
		<v-btn depressed color="blue">Click Me Again</v-btn>
		<v-btn flat color="blue">Click Me Again</v-btn>
		<v-btn depressed class="red white--text">
			<v-icon>email</v-icon>
			Send Email
		</v-btn>
		<v-btn depressed small class="red white--text">
			<v-icon left small>email</v-icon>
			<span>Send Email</span>
		</v-btn>
		<v-btn depressed large class="red white--text">
			<span>Send Email</span>
			<v-icon right large>email</v-icon>
		</v-btn>
		<v-btn fab depressed small dark color="purple">
			<v-icon>email</v-icon>
		</v-btn> -->
		<!-- <v-btn depressed small class="hidden-md-and-down">
			<v-icon left small>email</v-icon>
			<span>Send Email</span>
		</v-btn> 
	<v-layout row wrap>
	     	<v-flex xs12 md6>
	     	<v-btn outline block class="primary">1</v-btn>
	     	</v-flex>
	     	<v-flex xs12 md6>
	     	<v-btn outline block class="primary">1</v-btn>
	     	</v-flex>
	     </v-layout>-->
		<h1 class="subheading grey--text">Dashboard</h1>
		<v-container class="my-5">

			 <v-layout row class="mb-3">
			  <v-tooltip top>
			 	<v-btn small flat color="grey" v-on:click="sortBy('title')" slot="activator">
			 		<v-icon left small>folder</v-icon>
			 		<span class="caption text-lowercase">By Project Name</span>
			 	</v-btn>
			 	 <span>Sort By Prject Name</span>
			  </v-tooltip>	

			 	<v-btn small flat color="grey" v-on:click="sortBy('person')">
			 		<v-icon left small>person</v-icon>
			 		<span class="caption text-lowercase">By Person</span>
			 	</v-btn>
			 </v-layout>	

			<v-card flat v-for="project in projects" :key="project.title">
		      <v-layout row wrap v-bind:class="`pa-3 project ${project.status}`">
		     	<v-flex xs12 md6>
		     		<div class="caption grey--text">Project Title</div>
		     		<div>{{ project.title }} </div>
		     	</v-flex>
		     	<v-flex xs6 sm4 md2>
		     		<div class="caption grey--text">Person</div>
		     		<div>{{ project.person }}</div>
		     	</v-flex>
		     	<v-flex xs6 sm4 md2>
		     		<div class="caption grey--text">Due By</div>
		     		<div>{{ project.due }}</div>
		     	</v-flex>
		     	<v-flex xs6 sm4 md2>
		     		<div class="right">
		     			<v-chip small v-bind:class="`${project.status} white--text caption my-2`"> {{ project.status }}</v-chip>
		     		</div>
		     	</v-flex>
	          </v-layout>
	          <v-divider></v-divider>
			</v-card>
	    </v-container>
	</div>
</template>


<script>
export default {
  data: function(){
  	return{
  		projects: [
          {   
          	title: 'Aesig', person: 'The 4 Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          },
          {   
          	title: 'DB', person: 'The 1 Ninja', due: '23 Jan 2019', status: 'finish', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          },
          {   
          	title: 'Code', person: 'The 2 Ninja', due: '30 Jan 2019', status: 'start', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          },
  		]
  	}
  },
  methods: {
  		sortBy(prop){
  			this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
  		}
  	}
}
</script>

<style>
.project.ongoing {
	border-left: 4px solid #3cd1c2;
}
.project.finish {
	border-left: 4px solid orange;
}

.project.start {
	border-left: 4px solid tomato;
}

.v-chip.ongoing {
	background:  #3cd1c2;
}
.v-chip.finish {
	background:  orange;
}

.v-chip.start {
	background:  tomato;
}

</style>