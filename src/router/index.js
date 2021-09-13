import { createRouter, createWebHistory } from '@ionic/vue-router';
import BaseLayoutWithTab from '../components/BaseLayoutWithTab.vue';
import Account from "../views/Account.vue";
import Home from '../views/Home.vue';
import Map from '../views/Map.vue';

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: BaseLayoutWithTab,
    children: [
      {
        path: "/home",
        name: "home-page",
        component: Home,
      },
    ],
  },
  {
    path: "/map",
    component: BaseLayoutWithTab,
    children: [
      {
        path: "/map",
        name: "map-page",
        component: Map,
      },
    ],
  },
  {
    path: "/account",
    component: BaseLayoutWithTab,
    children: [
      {
        path: "/account",
        name: "account-page",
        component: Account,
      },
    ],
  },
  {
    path: "/user/create",
    component: () => import("../views/AddUserPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
