<template>
   <div>
      <h1>Este es el Home ...</h1>
      <h2>{{useBrands.count}}</h2>
      <h2>{{double}}</h2>
      <button class="btn btn-success" @click="increment">+</button>
   </div>
   
</template>

<script setup>
import {useBrandsStore} from '@/store/brands.js';
import { storeToRefs } from 'pinia';
const useBrands=useBrandsStore();
const {increment}=useBrands;
const {count,double}=storeToRefs(useBrands) ;

</script>

<style>

</style>