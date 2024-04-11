<template>
    <ProfileNavbar></ProfileNavbar>
    <!-- <RetailpurTopNav></RetailpurTopNav> -->
    <div class="" style="padding-bottom:80px">
        <div v-if="wishlists.length === 0"
            class="bg-light w-100 d-flex flex-column justify-content-center align-items-center"
            style="height: 50%; padding: 90px 0px;">
            <i class="bi bi-search fs-1"></i>
            <h3 class="text-center">Hmm, There is no catalog in wishlist.</h3>
        </div>
        <div class="row g-1 py-4">
            <div v-for="(wishlist, index) in wishlists" :key="index" class="col-6 col-md-3 mb-4">
                <div class="pt-3 " style="width: 180px;">
                    <div class="col-lg-5 d-flex prod-img px-0">
                        <div class="d-flex flex-column prod-thumb" id="scroll">
                            <img class="" :src="image" style="width: 35px"
                                v-for="(image, imageIndex) in wishlist.images" :key="imageIndex"
                                @click="selectImage(wishlist.id, image)" />
                        </div>
                        <div class="main-img">
                            <img :src="selectedImages[wishlist.id]" width="180" class="flex-fill" />
                        </div>
                    </div>
                    <div class="ms-2">
                        <p class="fw-bold mb-0 truncate1">{{ wishlist.name }}</p>
                    <div class="d-flex">
                        <p class="mb-0"><span class="fw-bold">SKU :</span>{{ wishlist.sku }}</p>&nbsp;
                    </div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import RetailpurTopNav from '@/components/navbar/RetailerpurTopNav.vue'
import ProfileNavbar from '@/components/navbar/ProfileNavbar.vue'
import router from '../router';

export default {
    name: "SavedProduct",
    data() {
        return {
            selectedImages: {},
        };
    },
    computed: {
        wishlists() {
            return this.$store.getters["catalog/getWishListProducts"];
        },
    },
    methods: {
        initializeSelectedImages() {
            this.wishlists.forEach((wishlist) => {
                if (wishlist.id && wishlist.images.length > 0) {
                    this.selectedImages[wishlist.id] = wishlist.images[0];
                }
            });
        },
        selectImage(wishlistId, image) {
            this.selectedImages[wishlistId] = image;
        },
        showProduct(product) {
            return this.$store.dispatch("catalog/selectProduct", product).then(() => {
                router.push("/catalog-page/" + product.id);
            });
        },
    },
    mounted() {
        this.initializeSelectedImages();
    },
    components: {
        // RetailpurTopNav,
        ProfileNavbar,
    },
};
</script>

<style scoped>
@media (max-width:999px) {
    .prod-img {
        display: flex;
        flex-direction: column-reverse;
    }

    .prod-thumb {
        flex-direction: row !important;
        margin: 5px 5px 0px 0px;
        overflow: scroll;
    }
}
</style>