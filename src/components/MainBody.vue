<template>
  <div class="main-body">
    <!-- <p>blahh</p> -->
    <MainBodyNav/>
    <MainBodyCall/>
    <MainBodyMessage/>
    <MainBodyList/>
  </div>
</template>

<script>
import MainBodyNav from "./main_body_components/MainBodyNav.vue";
import MainBodyCall from "./main_body_components/MainBodyCall.vue";
import MainBodyMessage from "./main_body_components/MainBodyMessage.vue";
import MainBodyList from "./main_body_components/MainBodyList.vue";
export default {
  components: {
    MainBodyNav,
    MainBodyCall,
    MainBodyMessage,
    MainBodyList
  }
};
</script>