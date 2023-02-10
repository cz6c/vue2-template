import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "./store";
import publicCom from "@com/index";
import "normalize.css/normalize.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "@ass/styles/global.scss";
import "@utils/filters";
import "@/permission";

Vue.config.productionTip = false;
Vue.use(publicCom);

import moment from "moment";
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
