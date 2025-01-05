<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    

    <div class="wrapper">
      
      <nav>
        <RouterLink to="/">Home</RouterLink> | |
        <RouterLink to="/about">About</RouterLink> | |
        <RouterLink to="/food">FoodItems</RouterLink> | |
        <RouterLink to="/fruit">FruitItem</RouterLink> | | 
        <RouterLink to="/todo">TodoList</RouterLink> | | 
        <RouterLink to="/ref">Reference Hook</RouterLink> | | 
        <RouterLink to="/lifecycle">Lifecycle Hooks</RouterLink> | |
        <RouterLink to="/form">Form Inputs</RouterLink> | |


      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>



</style>
