import { createRouter, createWebHistory } from "vue-router";
import catalogRoutes from './catalog'
import faqsRoutes from './faq'
import profileSteps from './profileSteps'

const routes = [
  {
    path: "/",
    name: "market",
    component: () => import("../views/MarketPage.vue"),
  },
  {
    path: "/shop/:voteId",
    name: "shop",
    component: () => import("@/components/market/ShopPage.vue")

  },
  {
    path: "/post",
    name: "post",
    component: () => import("../views/PostPage.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/OrderPage.vue"),
  },
  {
    path: "/orderDetail/:orderId",
    name: "orderDetail",
    component: () => import("@/components/order/OrderDetail.vue")
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import("../views/WishlistCatalogs.vue"),
  },
  {
    path: "/allsupporters",
    name: "AllSupporters",
    component: () => import("@/views/AllSupporters.vue")
  },
  {
    path: "/review",
    name: "review",
    component: () => import("@/views/ReviewComp.vue")
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: () => import('@/components/faqs/AboutUs.vue')
  },
  {
    path: '/customer-service',
    name: 'CustomerService',
    component: () => import('@/components/faqs/CustomerService.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue')
  },
  {
    path: "/AllMArket",
    name: "allmarket",
    component: () => import("@/components/market/shop/AllMarket.vue")
  },
  ...catalogRoutes,
  ...faqsRoutes,
  ...profileSteps
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
