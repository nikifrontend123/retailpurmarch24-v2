<template>
    <nav class="navbar fixed-bottom " style="z-index:1;">
        <div class="position-fixed w-100" style="bottom: 0;">
            <div style="background-color: white;">
                <div class="d-flex justify-content-evenly text-center w-100 border-top borde-light">
                    <BottomNav v-for="(link, index) in links" :key="index" :link="link"></BottomNav>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import BottomNav from './BottomNav.vue';
export default {
    data() {
        return {
            links: [
                { id: 3, route: "/", name: "market", icon: "bi bi-shop-window fs-5", label: "Market" },
                { id: 1, route: "/post", name: "post", icon: "bi bi-globe fs-5", label: "Post" },
                { id: 2, route: "/favourite-catalogs", name: "FavouriteCatalogs", icon: "bi bi-journal-check fs-5", label: "Saved" },
                { id: 5, route: "/wishlist", name: "wishlist", icon: "bi bi-hearts fs-5", label: "Wishlist" },
                { id: 5, route: "/order", name: "order", icon: "bi bi-box fs-5", label: "Order" },
            ],
        };
    },
 
    components: { BottomNav }
}
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    text-align: center;
}

.nav-bottom {
    height: 20%;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    background: #F6F6F6;
}

.navbar {
    /* background-color: #f1f1f1; */
    height: 60px;
    transition: transform 0.5s;
    transform: translateY(0);
}

.navbar-hidden {
    transform: translateY(100%);
}
</style>