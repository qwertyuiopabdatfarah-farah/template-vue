import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //jika di set maka memberitahu error kalau tidak menggunakan state	
  state: {
      products:[
       {name: 'Banana', price:20},
       {name: 'Pisang', price:210},
       {name: 'Buah',   price:420},
       {name: 'Jus',    price:250},
     ],
  },
  getters:{
  	saleProducts: state  => {
  		var saleProducts = state.products.map( product => {
        return {
            name:  '**' + product.name + '**',
            price: product.price/2
      	   }
     	 });
    	 return saleProducts;
  	}
  },

  mutations:{
     reducePrice: (state, payload) => {
  	   state.products.forEach(product=>{
       product.price -= payload;
    })
  }
 },
 
 actions:{
 	reducePrice: (context, payload) => {
 		setTimeout(function(){
          context.commit('reducePrice', payload)
 		}, 2000)
 	}
 }

})
