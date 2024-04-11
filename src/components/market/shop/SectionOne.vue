<template>
    <div>
        <div class="pb-5 d-flex justify-content-center w-100" style="height: 400px; color: var(--secondary-color);">
            <img :src="shop.business.img" width="100%" style="object-fit: cover;" alt="">
        </div>
        <div class=" mx-3 py-4 rounded-4 bg-white shadow  position-relative " style=" top:-90px;">
            <div class="d-flex justify-content-between align-items-center">
                <div class=" d-flex justify-content-start align-items-start position-relative ps-3 ">
                    <img :src="shop.business.logo" class="border border-secondary rounded-4 d-lg-block d-none"
                        style="width: 236px; height: 233px; background-color: #fff;">
                    <img :src="shop.business.logo" class="border border-secondary rounded-4 d-lg-none d-block"
                        style="width: 136px; height: 133px; background-color: #fff; object-fit: contain;">
                    <div class="d-lg-none d-block ">
                        <p class="w-100 mb-0 ms-1 fs-4"
                            style=" color: var(--secondary-color); letter-spacing: 1px; text-transform: uppercase;">
                            {{ shop.business.shopName }}</p>
                        <div class="d-flex justify-content-evenly ">
                            <img src="/img/golden.png" width="40" alt="">
                            <img src="/img/silver.png" width="40" alt="">
                            <img src="/img/black.png" width="40" alt="">
                            <img src="/img/white.png" width="40" alt="">
                        </div>
                    </div>
                    <div class="d-lg-block d-none ms-3 ">
                        <p class="mb-0 ms-1 fs fs-1 mb-0"
                            style="text-transform: uppercase; color: var(--secondary-color); letter-spacing: 1px">
                            {{ shop.business.shopName }}</p>
                        <div class="d-flex justify-content-evenly ">
                            <img src="/img/golden.png" width="40" alt="">
                            <img src="/img/silver.png" width="40" alt="">
                            <img src="/img/black.png" width="40" alt="">
                            <img src="/img/white.png" width="40" alt="">
                        </div>
                    </div>
                </div>
                <div class="d-md-flex d-none justify-content-start align-items-center me-5 pb-5 mb-5">
                    <SupportButton></SupportButton>
                </div>
            </div>

            <div class='d-md-none'>
                <SupportButton @save-shop="handleSaveShop" class="mt-4"></SupportButton>
            </div>
            <div class='d-flex justify-content-center w-100 mt-5'>
                <div v-for="(link, index) in links" :key="index" class="d-flex flex-column align-items-center w-100">
                    <div class="d-flex justify-content-center  align-items-center shadow rounded-3 bg-white "
                        style='width:40px; height: 40px ; ' @click="handleShare(link)">
                        <i :class="link.icon"></i>
                    </div>
                    <p class="mt-2" style="font-size: 12px">{{ link.label }}</p>
                </div>
            </div>
            <div class='d-flex justify-content-center w-100'>
                <div v-for="(link, index) in linkss" :key="index" class="d-flex flex-column align-items-center w-100">
                    <div class="d-flex justify-content-center  align-items-center shadow rounded-3 bg-white "
                        style='width:40px; height: 40px ; ' @click="handleShare(link)">
                        <i :class="link.icon"></i>
                    </div>
                    <p class="mt-2" style="font-size: 12px">{{ link.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SupportButton from '@/components/market/shop/SupportButton.vue';

export default {
    components: {
        SupportButton
    },
    data() {
        return {
            links: [
                { id: 5, name: "Contact", icon: "bi bi-telephone fs-5", label: "Contact" },
                { id: 1, name: "Share", icon: "bi bi-whatsapp fs-5", label: "Whatsapp" },
                { id: 3, name: "Message", icon: "bi bi-chat fs-5", label: "Message" },
                { id: 2, name: "Search", icon: "bi bi-search fs-5", label: "Search" },
            ],
            linkss: [
                { id: 3, name: "Orders", icon: "bi bi-cart-check fs-5", label: "Orders" },
                { id: 1, name: "Share", icon: "bi bi-heart fs-5", label: "Wishlist" },
                { id: 2, name: "Search", icon: "bi bi-geo fs-5", label: "Location" },
                { id: 5, name: "Contact", icon: "bi bi-share fs-5", label: "Share" },
            ],
        }
    },
    computed: {
        shop() {
            let voteId = this.$route.params.voteId;
            return this.$store.getters['shop/getShopss'](voteId);
        },
    },
    methods: {
        handleSaveShop(shopData) {
            // Dispatch the saveShop action with the shop data
            this.$store.dispatch('shop/saveShop', shopData);
        },
        handleShare(link) {
            if (link.name === "Share") {
                // Replace 'your_link_here' with the actual link you want to share
                const url = encodeURIComponent('http://192.168.1.163:8080/');
                const whatsappUrl = `https://wa.me/?text=${url}`;
                window.open(whatsappUrl, '_blank');
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>