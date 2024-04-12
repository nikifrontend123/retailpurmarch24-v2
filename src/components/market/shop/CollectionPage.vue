<template>
  <div>
    <div v-for="(collect, index) in collections" :key="index" class="my-3 mb-5">
      <div :id="'section' + (index + 2)" class="w-100 container-fluid" :style="{ backgroundColor: containerColor }">
        <div @click="toggleCollapse(index);" data-bs-toggle="collapse" :data-bs-target="'#collapseData' + (index + 2)"
          class="row border" :class="{ 'bg': isCollapsed(index) }">
          <div class="py-3" :class="'order-' + collect.order">
            <div class="container d-flex justify-content-between align-items-center">
              <h1>{{ collect.heading }}</h1>
              <i :class="{ 'bi-chevron-down': !isCollapsed(index), 'bi-chevron-up': isCollapsed(index) }"></i>
            </div>
          </div>
        </div>
      </div>

      <div :id="'collapseData' + (index + 2)" class="collapse" :class="{ 'show': isCollapsed(index) }">
        <div class="container px-4 mt-3">
          <div class="row row-cols-3 row-cols-md-6 g-1">
            <div class="col" v-for="(first, key) in collect.one" :key="key">
              <div class="position-relative">
                <img @click="openOffCanvas(first)" :src="first.img" alt=""
                  style="object-position: top; object-fit: cover; width: 100%; height: 150px;">
                <div class="position-absolute top-0 start-0 m-2 ms-0" style="font-size: 12px;">
                  <span class='text-white bg-danger px-1 rounded-end-3'>₹{{ first.price }}</span>
                </div>
                <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
                  <!-- <button style="font-size: 10px;" class="rounded-0 btn btn-dark"
                    @click="openOffCanvas(first)">Order</button> -->
                  <!-- <button style="font-size: 10px;" class="rounded-0 btn btn-dark">
                    <router-link :to="'/catalog-page/' + first.id" class="text-decoration-none text-white">
                      <span>Details</span>
                    </router-link>
                  </button> -->
                  <!-- Off-canvas container for item details -->
                  <div style="height: 50%; width: 100%" class="offcanvas offcanvas-bottom " tabindex="-1"
                    id="itemDetailsOffCanvas" aria-labelledby="itemDetailsOffCanvasLabel"
                    :class="{ 'show': isOffCanvasOpen }">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title text-dark" id="itemDetailsOffCanvasLabel">{{ selectedItem.name }}</h5>
                      <button type="button" class="btn-close text-reset" @click="closeOffCanvas"
                        aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                      <div class="d-flex">
                        <img :src="selectedItem.img" style="width: 100px; height: 100px; object-fit: contain;" alt="">
                        <div class="">
                          <p class="mb-0 fw-bold">{{ selectedItem.name }}</p>
                          <p class="mb-0"><span class="fw-bold">Price</span>{{ selectedItem.price }}</p>

                          <div class="d-flex">
                            <div class="mx-2" v-for="(color, index) in selectedItem.colors" :key="index">
                              <label :for="'colorRadio_' + index"
                                class="px-2 py-1 border rounded-3 d-flex align-items-center"
                                :style="{ backgroundColor: selectedColor === color ? 'red' : 'transparent' }">
                                <input type="radio" :id="'colorRadio_' + index" v-model="selectedColor" :value="color"
                                  style="display: none;">
                                {{ color }}
                              </label>
                            </div>
                          </div>
                          <div class="d-flex">
                            <div v-for="(size, index) in selectedItem.sizes" :key="index">
                              <label :for="'sizeRadio_' + index" class="border d-flex align-items-center label-style"
                                :style="{ backgroundColor: selectedSize === size ? 'red' : 'transparent' }">
                                <input type="radio" :id="'sizeRadio_' + index" v-model="selectedSize" :value="size"
                                  style="display: none;">
                                {{ size }}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <button style="font-size: 10px;" class="rounded-0 btn btn-dark w-100">
                          <router-link :to="'/catalog-page/' + first.id" class="text-decoration-none text-white">
                            <span>Details</span>
                          </router-link>
                        </button>
                      </div>
                      <div class="w-100 d-flex justify-content-between align-items-center position-fixed px-1"
                        style="height: 63px; bottom: 0; background: #f6f6f6; z-index: 20 !important">
                        <div class="w-100 bg-white d-flex align-items-center pe-2">
                          <button class="btn btn-dark rounded-0" @click="decrement">-</button>
                          <input class="text-center form-control rounded-0 w-100" type="number" v-model="quantity" />
                          <button class="btn btn-dark rounded-0" @click="increment">+</button>
                        </div>
                        <div class="w-100">
                          <button @click="addToCart" class="btn btn-dark w-100 fs-5">Order<i
                              class="bi bi-cart"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "CollectionPage",
  props: ['collections', 'collect', 'index'],
  data() {
    return {
      selectedColor: null,
      selectedSize: null,
      isOffCanvasOpen: false,
      collapsedItems: [],
      selectedItem: {},
      quantity: 1,
    };
  },
  computed: {
    containerColor() {
      return this.isCollapsed(0) ? '#8d8d89' : '';
    }
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    toggleCollapse(index) {
      this.collapsedItems[index] = !this.collapsedItems[index];
    },
    isCollapsed(index) {
      return !this.collapsedItems[index];
    },
    openOffCanvas(item) {
      this.selectedItem = item;
      this.isOffCanvasOpen = true;
      this.disableBodyScroll();
    },
    closeOffCanvas() {
      this.isOffCanvasOpen = false;
    },
    disableBodyScroll() {
      document.body.classList.add('offcanvas-open');
    },
    enableBodyScroll() {
      document.body.classList.remove('offcanvas-open');
    }
  }
};
</script>

<style>
.bg {
  background-color: #EFEFED;
}

.label-style {
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}

.offcanvas-open {
  overflow: hidden;
}
</style>
