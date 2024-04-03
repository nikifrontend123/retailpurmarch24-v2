<template>
  <div>
    <div class="d-flex justify-content-center align-items-center mb-2">
      <button class="btn btn-white border-dark " :class="{ 'btn-dark ': isSupportClicked }" @click="toggleSupport"
        style="width: 140px;">
        <i v-if="isSupportClicked" class="bi-hand-thumbs-up-fill text-warning me-2 fs-5"></i>

        <span v-if="isSupportClicked">Promotion</span>
        <span v-else><i class="bi-hand-thumbs-up text-warning me-2 fs-5"></i>Promote Us</span>
      </button>
      <button class="btn btn-white border-dark  ms-3" :class="{ 'btn-dark': isFavouriteClicked }"
        @click="toggleFavourite" style="width: 140px;">
        <i v-if="isFavouriteClicked" class="bi bi-bookmark-heart-fill text-warning me-2 fs-5"></i>
        <span v-if="isFavouriteClicked">Saved</span>
        <span v-else> <i class="bi bi-bookmark text-warning fs-5"></i> Save Us</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSupportClicked: false,
      isFavouriteClicked: false,
      isStarFilled: false,
      selectedOption: null,
      isDropdown: false,
    };
  },
  computed: {
    isSupporter() {
      return this.selectedOption === 'Solo Support' || this.selectedOption === 'Dual Support';
    },
    starIconClass() {
      return this.isStarFilled ? 'bi bi-star-fill fs-3 text-warning' : 'bi bi-star fs-3';
    }
  },
  methods: {
    saveShopData() {
      let shopData = this.shop();
      this.$emit('save-shop', shopData);
    },
    shop() {
      let voteId = this.$route.params.voteId;
      return this.$store.getters['shop/getShopss'](voteId);
    },
    toggleSupport() {
      this.isSupportClicked = !this.isSupportClicked;
    },
    toggleFavourite() {
      this.isFavouriteClicked = !this.isFavouriteClicked;
      if (this.isFavouriteClicked) {
        this.saveShopData();
      }
    },
    toggleStar() {
      this.isStarFilled = !this.isStarFilled;
    },
    toggleDropdown() {
      this.isDropdown = true;
      this.selectedOption = 'Solo Support';
    },
    selectOption() {
      if (this.selectedOption === 'None') {
        this.isDropdown = false;
      }
    },
  },

};
</script>

<style lang="scss" scoped></style>