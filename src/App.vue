<template>
  <div id="app">
    <h1>Fun With Datamuse</h1>
    <p>
    <router-link to="/">Adjective For Noun</router-link>
    <router-link to="/rhymesaurus">Rhymesaurus</router-link>
    </p>
  <router-view/>
  </div>
  
</template>

<script>
import Adjective from './views/Adjective.vue'
export default {
  components: { Adjective },
  name: 'app'
}
</script>

<style>
body {
  background-color: #5C97EB;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}



#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
