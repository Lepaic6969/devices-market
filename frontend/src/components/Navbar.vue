
<template>
  
    <nav class="navbar" >
        <div class="container">
            <a class="navbar-brand" href="#">
            <img src="../assets/market.jpg" alt="Logo" width="90" height="72">
            </a>
            <div>
                <RouterLink to="/" class="mx-2 mb-2  btn btn-outline-dark ">Home</RouterLink>
                <RouterLink to="/marcas" class="mx-2 mb-2 btn btn-outline-dark ">Marcas</RouterLink>
                <RouterLink to="/referencias" class="mx-2 mb-2 btn btn-outline-dark ">Referencias</RouterLink>
                <RouterLink to="/empleados" class="mx-2 mb-2 btn btn-outline-dark ">Empleados</RouterLink>
                <RouterLink to="/equipos" class="mx-2 mb-2 btn btn-outline-dark ">Equipos</RouterLink>
                <RouterLink to="/asignaciones" class="mx-2 mb-2 btn btn-outline-dark ">Asignaciones</RouterLink>

            </div>
        </div>
        
    </nav>

    
</template>

<script setup>
 import {RouterLink} from 'vue-router'
</script>

