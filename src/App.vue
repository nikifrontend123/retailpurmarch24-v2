<template>
  <div>
    <router-view />
    <!-- <BottomNavbar v-if="!hide"></BottomNavbar> -->
  </div>
</template>
<script>
// import BottomNavbar from "./components/navbar/BottomNavbar.vue";
export default {
  components: {
    // BottomNavbar,
  },
  computed: {
    // hide() {
    //   const hiddenPages = [
    //     "promoters",
    //     "EditProduct",
    //     "productDetail",
    //     "product",
    //     "createProduct",
    //     "createCollection",
    //     "profile",
    //     "ProfileDetail",
    //     "ContactDetail",
    //     "BusinessType",
    //     "WorkTime",
    //     "basicInfo",
    //     "ContactForm",
    //     "LandingPage",
    //     "EmailVerificationPage",
    //     "ForgotPasswordPage",
    //     "LoginPage",
    //     "OTPPage",
    //     "RegistrationPage",
    //     "ResetPasswordPage",
    //     "CustomerService",
    //     'CareInstructions',
    //     'career',
    //     'privacy-policy',
    //     'terms',
    //     'return',
    //     'brand',
    //     'Account',
    //     'Orderfaq',
    //     'Payment',
    //     'Delivery',
    //     'Return',
    //     'Stock',
    //     'CareInstructions',
    //     'career',
    //     'privacy-policy',
    //     'terms',
    //     'return',
    //     'shop',
    //     'CatalogDetailPage',
    //     'offer',
    //     'userProfile',
    //     'aboutUs',
    //     'allmarket',
    //     'query',
    //   ];
    //   return hiddenPages.includes(this.$route.name);
    // },
  },
};
</script>
<style>
:root {
  --primary-color: #edc3ab;
  --secondary-color: #231f20;
  --x-small: 0.7em;
}

.top-brand {
  background: #e35d6a !important;
  border-color: #6d6c6c !important;
  color: white;
}

.top-brand-secondary {
  background: #d5f591 !important;
  font-weight: 600;
}

.brand-text {
  color: white;
}

.bill {
  overflow: hidden;
  text-align: center;
}

.bill > span {
  position: relative;
  display: inline-block;
}

.bill > span:before,
.bill > span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 900px; /* Adjust width as needed */
  margin: 0 20px;
}

.bill > span:before {
  right: 100%;
  border-bottom: 2px solid;
  border-image: linear-gradient(to left, black 0, transparent 10%);
  border-image-slice: 1;
}

.bill > span:after {
  left: 100%;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, black 0, transparent 10%);
  border-image-slice: 1;
}

.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 3em;
  overflow: hidden;
}

.truncate1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 3em;
  overflow: hidden;
}

.text-style {
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.language-list {
  max-height: 300px;
  overflow-y: auto;
}

.language-item {
  padding: 8px 12px;
  cursor: pointer;
}

.language-item:hover {
  background-color: #f5f5f5;
}

.selected {
  font-weight: bold;
}
</style>
