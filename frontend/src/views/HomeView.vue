<template>
   <div>
      <h1>Este es el Home ...</h1>
      <h2>{{count}}</h2>
      <h2>{{double}}</h2>
      <button class="btn btn-success" @click="increment">+</button>
   </div>
   
</template>

<script setup>
import {useHomeStore} from '@/store/home.js';
import { storeToRefs } from 'pinia';
const useHome=useHomeStore();
const {increment}=useHome;
const {count,double}=storeToRefs(useHome) ;

</script>

<style>

</style>