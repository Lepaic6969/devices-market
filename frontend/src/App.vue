<template>
   <div class="container">
      <Navbar class="navbar"/>
      <RouterView class="router-view"/>
   </div>
   
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

export default {
  components: { 
   Navbar 
  },

}
</script>

<style >
  
</style>
