
const routes = [
  {
    path: "/basicInfo",
    name: "basicInfo",
    component: () => import("@/components/profile/BasicInfo.vue")

  },
  {
    path: "/ProfileDetail",
    name: "ProfileDetail",
    component: () => import('../components/profile/ProfileDetail.vue')
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: () => import('../components/profile/UserProfile.vue')
  },
  {
    path: "/new-address",
    name: "NewAddress",
    component: () => import('../components/profile/NewAddress.vue')
  },
  {
    path: "/brand",
    name: "brand",
    component: () => import('../components/profile/BrandInfo.vue')
  },

  {
    path: "/ContactDetail",
    name: "ContactDetail",
    component: () => import('../components/profile/ContactDetail.vue')
  },

  {
    path: "/BusinessType",
    name: "BusinessType",
    component: () => import('../components/profile/BusinesType.vue')
  },
  {
    path: "/WorkTime",
    name: "WorkTime",
    component: () => import('../components/profile/WorkTime.vue')
  },
  {
    path: "/product",
    name: "product",
    component: () => import('../components/profile/ProductCreated.vue')
  },
  {
    path: "/editProduct/:id",
    name: "EditProduct",
    component: () => import("@/components/profile/CreateProduct.vue")
  },
  {
    path: "/createProduct",
    name: "createProduct",
    component: () => import('../components/profile/CreateProduct.vue')
  },
  {
    path: "/collection",
    name: "createCollection",
    component: () => import('../components/profile/CollectionList.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: () => import('../components/profile/EditProduct.vue'),
  },
  {
    path: "/manage",
    name: "manage",
    component: () => import('../components/profile/ManageInfo.vue')
  },



];

export default routes;