<template>
  
  <NewYearVue/>
  <FruitsList/>
</template>

<script>
import FruitsList from './components/FruitsList.vue';
import NewYearVue from './components/NewYear.vue';


export default {
  name: 'App',
  components: {
    FruitsList,
    NewYearVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
