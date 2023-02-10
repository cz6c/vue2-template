/* eslint-disable object-curly-spacing */
import { RouteConfig } from "vue-router";
const staticRouter: RouteConfig[] = [
  {
    path: "/",
    component: () => import("@views/home/index.vue"),
  },
];
export const consoleLogPathList = staticRouter.map(({ path }) => path);
export default staticRouter;
