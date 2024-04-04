<template>
  <RetailpurTopNav></RetailpurTopNav>
  <div>
    <div class="border py-5"
      style="background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); width: 100%;">
      <div class="d-md-flex d-none justify-content-evenly align-items-center w-100 mt-5">
        <!-- <img src="/img/girl.png" width="350"> -->
        <div class="d-flex align-items-center">
          <TextStyle></TextStyle>
        </div>
      </div>
      <div class="d-md-none d-flex flex-column justify-content-center align-items-center w-100">
        <!-- <img src="/img/girl.png" width="250"> -->
        <div class="d-flex align-items-center" style="font-size: 20px !important;">
          <TextStyle></TextStyle>
        </div>
      </div>
      <div class="w-100 mt-3 mb-5">
        <div class="container d-md-flex d-block justify-content-between align-items-center">
          <RouterLink to="/search" class="text-decoration-none w-100">
            <div class="my-1 rounded-0 btn btn-light border py-2 w-100 d-flex justify-content-between">
              <div class='d-flex'>
                <span class="fw-bold">Search by</span> &nbsp;
                <span class="text-secondary">{{ searchText }}</span>
              </div>
              <i class="bi bi-search"></i>
            </div>
          </RouterLink>
          <!-- <StateSelector></StateSelector> -->
        </div>
      </div>
    </div>

    <p class="p-2 text-center mt-3 mb-0 bill text-style">
      <span class="fs-5">~ CATAGORIES ~</span>
    </p>
    <div class="d-flex" style="overflow-x: scroll">
      <div v-for="(cat, index) in catagory" :key="index" class="me-2">
        <div class="p-3 border">
          <p class="fw-bold text-center w-100">{{ cat.text }}</p>
          <img :src="cat.img" width="70" alt="" />
        </div>
      </div>
    </div>

    <div class="py-2 bg-light">
      <div class="d-flex justify-content-between align-items-end mt-3 pt-2">
        <div class="">
          <p class="ps-2 text-start fw-bold mb-0">
            <span class="fs-4"> <i class="bi bi-star-fill"></i> Delhi's</span>
          </p>
          <p class="ps-2 text-start mb-0">
            <span style="">Top Retailers</span>
          </p>
        </div>
        <RouterLink to="/AllMarket" class="text-dark text-decoration-none">
          <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
        </RouterLink>
      </div>

      <div class="d-flex py-4" style="overflow-x: scroll; overflow-y: hidden">
        <div v-for="(vote, index) in shops" :key="index" class="mx-2 position-relative px-2">
          <router-link :to="'/shop/' + vote.id" class="text-decoration-none text-dark">
            <div
              class="bg-light border rounded-2 d-flex flex-column justify-content-center align-items-center pt-3 text-dark px-3"
              style="width: 140px">
              <img :src="vote.img" alt="" style="width: 60%" />
              <p class="fw-bold mt-2 mb-1">{{ vote.name }}</p>
              <div class="d-flex justify-content-evenly mb-2">
                <img src="/img/golden.png" width="15" alt="" />
                <img src="/img/silver.png" width="15" alt="" />
                <img src="/img/black.png" width="15" alt="" />
                <img src="/img/white.png" width="15" alt="" />
              </div>
              <!-- <p class="text-center" style=" font-size: var(--x-small)">
                <span>{{ vote.post }}</span> at <span>{{ vote.businessName }}</span>
              </p> -->
              <div class="d-flex">
                <p class="mb-0" style="font-size: var(--x-small)">{{ vote.support }}+</p>
                &nbsp;
                <p style="font-size: var(--x-small)">Promoters</p>
              </div>
            </div>
          </router-link>
          <span class="gg text-style position-absolute" style="top: 115px; left: -3px; font-size: 50px">{{
                  vote.id }}</span>
        </div>
      </div>
    </div>

    <div class="pb-2" style="color: #000">
      <div class="d-flex justify-content-between align-items-end py-5" style="background-color: #efefed">
        <div class="">
          <p class="ps-2 text-start fw-bold mb-0">
            <span class="fs-4"> <i class="bi bi-star-fill"></i> Jaipur's</span>
          </p>
          <p class="ps-2 text-start mb-0">
            <span style="">Top Retailers</span>
          </p>
        </div>
        <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
      </div>

      <div class="mt-1 row row-cols-3 row-cols-md-6 g-2 mx-1">
        <div v-for="(vote, index) in votes" :key="index" class="col">
          <div class="card rounded-0 d-flex justify-content-start align-items-center pt-3">
            <img :src="vote.img" alt="" style="width: 60%" />
            <p class="fw-bold mt-2 mb-1">{{ vote.name }}</p>
            <div class="d-flex justify-content-evenly mb-2">
              <img src="/img/golden.png" width="15" alt="" />
              <img src="/img/silver.png" width="15" alt="" />
              <img src="/img/black.png" width="15" alt="" />
              <img src="/img/white.png" width="15" alt="" />
            </div>
            <!-- <p class="text-center" style=" font-size: var(--x-small)">
                              <span>{{ vote.post }}</span> at <span>{{ vote.businessName }}</span>
                          </p> -->
            <div class="d-flex">
              <p class="mb-0" style="font-size: var(--x-small)">{{ vote.support }}+</p>
              &nbsp;
              <p style="font-size: var(--x-small)">Promoters</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-2" style="color: #fcdc2a; background-color: #000">
      <div class="d-flex justify-content-between align-items-end mt-3 pt-2">
        <div class="">
          <p class="ps-2 text-start fw-bold mb-0">
            <span class="fs-4"> <i class="bi bi-star-fill"></i> Manipur's</span>
          </p>
          <p class="ps-2 text-start mb-0">
            <span style="">Top Retailers</span>
          </p>
        </div>
        <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
      </div>

      <div class="d-flex py-4" style="overflow-x: scroll; overflow-y: hidden">
        <div v-for="(vote, index) in votes" :key="index" class="mx-2 position-relative px-2">
          <div
            class="bg-dark border-0 rounded-0 d-flex flex-column justify-content-center align-items-center pt-3 text-white px-3"
            style="width: 140px">
            <img :src="vote.img" alt="" style="width: 60%" />
            <p class="fw-bold mt-2 mb-1">{{ vote.name }}</p>
            <div class="d-flex justify-content-evenly mb-2">
              <img src="/img/golden.png" width="15" alt="" />
              <img src="/img/silver.png" width="15" alt="" />
              <img src="/img/black.png" width="15" alt="" />
              <img src="/img/white.png" width="15" alt="" />
            </div>
            <!-- <p class="text-center" style=" font-size: var(--x-small)">
                              <span>{{ vote.post }}</span> at <span>{{ vote.businessName }}</span>
                          </p> -->
            <div class="d-flex">
              <p class="mb-0" style="font-size: var(--x-small)">{{ vote.support }}+</p>
              &nbsp;
              <p style="font-size: var(--x-small)">Promoters</p>
            </div>
          </div>
          <span class="gg text-style position-absolute" style="top: 115px; left: -3px; font-size: 50px">{{
                  vote.id }}</span>
        </div>
      </div>
    </div>

    <WebCollection></WebCollection>
    <HomePageCard></HomePageCard>

    <div class="mt-4 w-100 py-3" style="background-color: #F6F7F9;">
      <div class="text-center my-4">
        <p class="fs-5"> Now you can Set-Up</p>

        <p class="fs-3">Your Online Retail Shop Business in just 3 Easy Steps</p>
      </div>
      <FlipCard class="d-none d-md-block"></FlipCard>
      <MobileFlipcard class="d-md-none"></MobileFlipcard>
    </div>

    <div class="mt-4 py-3 px-2">
      <p class="text-center fs-3">How Do You earn ?</p>
      <p class="fs-5 fw-bold text-center pb-5">No more up front inventory costs or shipping logistics.<br> With
        Retailpur, products are
        sent directly from manufacturers to your cutomers.</p>
      <div class="m-2 fs-5">
        <div class="text-center ">
          <p class="m-0 fw-bold" style="color: #00B0F0;">Step 1</p>
          <p>Your customer places an order from your eRetail Shop</p>
        </div>
        <div class="text-center ">
          <p class="m-0 fw-bold" style="color: #00B0F0;">Step 2</p>
          <p>Your eRetail Shop automatically sends the order to the concern manufacturer of the product order
          </p>
        </div>
        <div class="text-center">
          <p class="m-0 fw-bold " style="color: #00B0F0;">Step 3</p>
          <p>the concern manufacturer starts preparation of the product ordered by your customer</p>
        </div>
        <div class="text-center">
          <p class="m-0 fw-bold" style="color: #00B0F0;">Step 4</p>
          <p>Manufacturer will ship the concern order directly to your customer within 3 days</p>
        </div>
        <div class="text-center">
          <p class="m-0 fw-bold" style="color: #00B0F0;">Step 5</p>
          <p>As soon as your customer accepts the product you will recieve your commission income</p>
        </div>
      </div>

    </div>

    <div class="py-3" style="background-color: #F6F7F9;">
      <div class="text-center fs-3 fw-bold">How Much Do You earn Approx. ?</div>
      <div class="d-flex text-center fs-4 py-5">
        <DigitComp class=""></DigitComp>
      </div>
    </div>

    <div class="w-100 py-3 px-3">
      <div class="text-center m-1">
        <div class="fs-3 fw-bold">Our Platform is Power Pack of Features</div>
        <p class="fs-5">with a quick & easy buying experience</p>
      </div>
      <div class="w-100">
        <div class="w-100 fs-5 d-md-flex justify-content-between  px-3 text-center">
          <div class="my-3 me-4 w-100 p-2  text-white bg-danger fw-bold">
            <p class="m-0">Your Branding & Personalisation</p>
          </div>
          <div class="my-3 me-4 w-100 p-2  text-white bg-danger fw-bold">
            <p class="m-0">Best Quality with Easy return policy</p>
          </div>
        </div>
        <div class="boxes w-100  fs-5 d-md-flex justify-content-between  px-3 text-center ">
          <div class="my-3 me-4 w-100 p-2  text-white bg-danger fw-bold">
            <p class="m-0">Easy Browsing and Ordering</p>
          </div>
          <div class="my-3 me-4 w-100 p-2 d-md-block d-none text-white bg-danger fw-bold">
            <p class="m-0" style="color: #F55050;"> </p>
          </div>
          <div class="my-3 me-4 w-100 p-2  text-white bg-danger fw-bold">
            <p class="m-0">Online & COD Payment Options</p>
          </div>
        </div>
        <div class="boxes w-100  fs-5 d-md-flex justify-content-between  px-3 text-center ">
          <div class="my-3 me-4 w-100 p-2  text-white bg-danger fw-bold">
            <p class="m-0">Hot Trending products at Lowest prices</p>
          </div>
          <div class="my-3 me-4 w-100 p-2  text-white bg-danger fw-bold">
            <p class="m-0">Free & Fast Delivery all across the world</p>
          </div>
        </div>
      </div>
    </div>

    <div class="fourteen mt-4 py-5 px-2" id="btnn">
      <div class="container d-md-flex justify-content-center align-items-center">
        <div class="left w-100">
          <div class="fs-3">if you have a</div>
          <h1 style=" font-size: 50px; letter-spacing: 10px;">Skill, Passion & Purpose</h1>
        </div>
        <div class="right w-100">
          <img style="width: 100%;" src="img/retail/bulb.jpg" width="100" alt="">
        </div>
      </div>
      <div class="txt text-center mt-4">
        <span class="fs-3 ">Then Choose Us as your Growth Partner</span>
      </div>
      <div class="btnn d-flex justify-content-center mt-4">
        <button data-bs-toggle="modal" href="#exampleModalToggle"
          class="px-3 bg-white button text-danger fw-bold fs-3 border border-1 border-primary rounded-3">Click
          here to Choose</button>
      </div>
    </div>
  </div>
</template>

<script>
import WebCollection from "@/components/market/WebCollection.vue";
import RetailpurTopNav from "@/components/navbar/RetailerpurTopNav.vue";
import HomePageCard from "@/components/market/HomePageCard.vue";
import FlipCard from "@/components/retailpur/FlipCard.vue";
import MobileFlipcard from "@/components/retailpur/MobileFlipcard.vue"
import DigitComp from "@/components/retailpur/DigitComp.vue";
import TextStyle from "@/components/retailpur/TextStyle.vue";
// import StateSelector from "@/components/StateSelector.vue";
export default {
  name: "HomeView",
  components: {
    // TopNav,
    TextStyle,
    WebCollection,
    RetailpurTopNav,
    HomePageCard,
    FlipCard,
    MobileFlipcard,
    DigitComp,
    // StateSelector
  },
  data() {
    return {
      words: ['City', 'Clothing', 'Categories', 'Top Retailer'],
      currentIndex: 0,
      searchText: '',
      catagory: [
        {
          id: 1,
          img: "img/catalog/Bottoms.png",
          text: "Bottom",
        },
        {
          id: 2,
          img: "img/catalog/Co-ords.png",
          text: "Co-ords",
        },
        {
          id: 3,
          img: "img/catalog/Dresses.png",
          text: "Dresses",
        },
        {
          id: 4,
          img: "img/catalog/Jumpsuits.png",
          text: "Jumpsuits",
        },
        {
          id: 5,
          img: "img/catalog/Shirts.png",
          text: "Shirts",
        },
        {
          id: 6,
          img: "img/catalog/Tops.png",
          text: "Tops",
        },
        {
          id: 7,
          img: "img/catalog/Tshirt.png",
          text: "Tshirt",
        },
      ],
      votes: [
        {
          id: 1,
          img: "img/users/1.png",
          name: "Travis ",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 200,
        },
        {
          id: 2,
          img: "img/users/2.png",
          name: "Kanye ",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 100,
        },
        {
          id: 3,
          img: "img/users/3.png",
          name: "J.Cole",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 234,
        },
        {
          id: 4,
          img: "img/users/4.png",
          name: "Post ",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 700,
        },
        {
          id: 5,
          img: "img/users/5.png",
          name: "Drake",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 642,
        },
        {
          id: 6,
          img: "img/users/6.png",
          name: "Don ",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 876,
        },
        {
          id: 7,
          img: "img/users/1.png",
          name: "Travis ",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 200,
        },
        {
          id: 8,
          img: "img/users/2.png",
          name: "Kanye ",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 100,
        },
        {
          id: 9,
          img: "img/users/3.png",
          name: "J.Cole",
          post: "Business Owner",
          businessName: "Fashion Appreals Fashion Appreals",
          support: 234,
        },
      ],

    };
  },
  computed: {
    shops() {
      const shopName = this.$route.params.name;
      if (shopName) {
        return this.$store.getters["shop/getShopss"](shopName);
      } else {
        return this.$store.getters["shop/getShops"];
      }
    },
  },
  mounted() {
    this.rotateWords();

  },
  methods: {
    rotateWords() {
      setTimeout(() => {
        this.searchText = this.words[this.currentIndex];
        this.currentIndex++;
        if (this.currentIndex >= this.words.length) {
          this.currentIndex = 0;
        }
        this.rotateWords();
      }, 1000);
    },
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Madimi+One&display=swap");

.text-style {
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

span.gg {
  font-size: 72px;
  background: -webkit-linear-gradient(#000000, #a2a1a1);
  /* background: -webkit-linear-gradient(#FFB000, #F8DE22); */
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
