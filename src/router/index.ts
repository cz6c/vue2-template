import Vue from "vue";
import Router, { RouteConfig, RawLocation } from "vue-router";
import staticRouter from "./modules/staticRouter";
Vue.use(Router);

const createRouter = (routes: RouteConfig[]) =>
  new Router({
    // mode: 'history', // require service support
    routes,
  });

const route = createRouter(staticRouter);

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
function resetRouter(routes: RouteConfig[]): any {
  const newRouter: any = createRouter(routes);
  (route as any).matcher = newRouter.matcher; // reset router
}

// 解决相同路由报错
const originalPush = Router.prototype.push;
(Router as any).prototype.push = function (location: RawLocation) {
  return originalPush.call(this, location);
};
export { resetRouter };
export default route;
