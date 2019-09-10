<template>
  <div class="main-body">
    <!-- <p>blahh</p> -->
    <MainBodyNav/>
    <MainBodyCall/>
  </div>
</template>

<script>
import MainBodyNav from "./main_body_components/MainBodyNav.vue";
import MainBodyCall from "./main_body_components/MainBodyCall.vue";
export default {
  components: {
    MainBodyNav,
    MainBodyCall
  }
};
</script>