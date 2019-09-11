import Vue from "vue";
import App from "./App.vue";
import chance from "chance";
Vue.config.productionTip = false;
Vue.use(chance);

new Vue({
  render: h => h(App, chance)
}).$mount("#app");
