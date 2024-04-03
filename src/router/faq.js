const routes = [
  {
    path: '/customer-service',
    name: 'CustomerService',
    component: () => import('@/components/faqs/CustomerService.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/components/faqs/AccountPage.vue')
  },
  {
    path: '/orderfaq',
    name: 'Orderfaq',
    component: () => import('@/components/faqs/OrderPage.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/components/faqs/PaymentPage.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('@/components/faqs/DeliveryPage.vue')
  },
  {
    path: '/returns',
    name: 'Return',
    component: () => import('@/components/faqs/ReturnPage.vue')
  },
  {
    path: '/stock',
    name: 'Stock',
    component: () => import('@/components/faqs/StockPage.vue')
  },
  {
    path: '/care-instructions',
    name: 'CareInstructions',
    component: () => import('@/components/faqs/CareInstructionsPage.vue')
  },
  {
    path: '/career',
    name: 'career',
    component: () => import('@/components/faqs/CareerPage.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/components/faqs/PrivacyPolicy.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/components/faqs/TermsPage.vue')
  },
  {
    path: '/return',
    name: 'return',
    component: () => import('@/components/faqs/ReturnPolicy.vue')
  },

];
export default routes;