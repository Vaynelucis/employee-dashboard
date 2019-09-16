<template>
  <div id="app">
  
    <Nav :currentUser="currentUser"/>
   
    <div class="main-body-grid">
    
      <Sidebar :currentUser="currentUser"/>
     
      <MainBody/>
      <a class="btn-floating btn-large waves-effect waves-light red fab">
        <i class="material-icons">add</i>
      </a>
    
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Sidebar from "./components/Sidebar.vue";
import MainBody from "./components/MainBody.vue";
import "./styles/style.css";

export default {
  name: "app",
  components: {
    Nav,
    Sidebar,
    MainBody
  },
  data() {
    return {
      currentUser: {
        firstName: chance.first(),
        lastName: chance.last(),
        role: "Super Admin",
        avaterID: chance.integer({ min: 1, max: 10 })
      }
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
 
}
</style>
