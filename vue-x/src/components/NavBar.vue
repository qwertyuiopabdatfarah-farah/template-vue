<template>
	<nav>
		<v-toolbar flat app>
	      <v-toolbar-side-icon class="grey--text" v-on:click="drawer = !drawer"></v-toolbar-side-icon>		
		  <v-toolbar-title class="text-uppercase" grey--text>
		  	<span class="font-weight-light">Todo</span>
		  	<span>Ninja</span>
		  </v-toolbar-title>
		  <v-spacer></v-spacer>	
		   <v-btn flat color="grey">
		   	<span>Sign Out</span>
		   	<v-icon right>exit_to_app</v-icon>
		   </v-btn>
		</v-toolbar>

		<v-navigation-drawer app v-model="drawer" class="testheme">
			<v-layout column align-center>
				<v-flex class="mt-5">
					<v-avatar size="100">
						<img src="/img/image1.png">
					</v-avatar>
					<p class="white--text subheading mt-1">
						Erwin Wiguna
				    </p>		
			    </v-flex>		
			</v-layout>
	    	<v-list>
	    		<v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
	    			<v-list-tile-action>
	    				<v-icon class="white--text">{{ link.icon }}</v-icon>
	    		    </v-list-tile-action>		
	    			<v-list-tile-content>
	    				<v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
	    			</v-list-tile-content>
	    		</v-list-tile>	
   			</v-list>
	    </v-navigation-drawer>
	</nav>
</template>
<script>
export default {
 data(){
	return{
	    drawer: false,
	    links: [
	     {icon: 'dashboard', text: 'Dashboard',   route: '/'},
	     {icon: 'folder',    text: 'My Project',  route: '/project'},
	     {icon: 'person',    text: 'Team',        route: '/team'},
	    ]
	  }
   }
}
</script>