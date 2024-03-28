
const routes = [
  {
    path: "/catalog-page/:productId",
    name: "CatalogDetailPage",
    component: () => import('@/views/CatalogDetailPage.vue')
  },
  {
    path: "/favourite-catalogs",
    name: "FavouriteCatalogs",
    component: () => import('@/views/FavouriteCatalogs.vue')
  },


];

export default routes;