import router from "./router";
import { Route } from "vue-router";
// import { getToken } from "@/utils/auth";
// import { AuthModule } from "@/store/modules/auth";
// const defaultSettings = require("@/settings");

// const whiteList = ["/login", "/auth-redirect"]; // no redirect whitelist

router.beforeEach(async (to: Route, from: Route, next: any) => {
  next();
  // // start progress bar
  // document.title = getPageTitle(to);
  // // determine whether the user has logged in
  // const hasToken = getToken();
  // if (hasToken) {
  //   if (to.path === "/login") {
  //     next({ path: "/" });
  //   } else {
  //     const userId = AuthModule.id;
  //     if (userId) {
  //       next();
  //     } else {
  //       try {
  //         await AuthModule.getLoginUserInfo();
  //         next({ ...to, replace: true });
  //       } catch (error) {
  //         await AuthModule.logout();
  //         // Message.error(error || "Has Error");
  //         next(`/login?redirect=${to.fullPath}`);
  //       }
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next();
  //   } else {
  //     await AuthModule.logout();
  //     next(`/login?redirect=${to.path}`);
  //     // NProgress.done();
  //   }
  // }
});
