<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App "/> -->
    <Nav/>
    <div class="row body">
      <div class="col">
        <Sidebar/>
      </div>
      <div class="col m9">
        <MainBody/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import Sidebar from "./components/Sidebar.vue";
import MainBody from "./components/MainBody.vue";
import "./styles/style.css";

export default {
  name: "app",
  components: {
    HelloWorld,
    Nav,
    Sidebar,
    MainBody
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
