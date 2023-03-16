<template>
   <div class="container">
      <Navbar class="navbar"/>
      <RouterView class="router-view"/>
      <Footer></Footer>
   </div>
   
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: { 
   Navbar,
   Footer 
  },

}
</script>

<style >
  
</style>
