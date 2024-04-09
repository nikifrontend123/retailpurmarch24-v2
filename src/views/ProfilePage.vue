<template>
    <div class=" ">
        <!-- <div class="d-flex justify-content-between p-2 bg-light">
            <i @click="goBack()" class="bi bi-arrow-left fs-5"></i>
            <strong>Dashboard</strong>
            <span></span>
        </div> -->
        <div class="mb-2">
            <div class="  ">
                <div class="bg-white pb-3">
                    <div :class="{ 'fixed-navbar': isFixed }">
                        <ProfileNavbar :isFixed="isFixed">
                            <RouterLink to="/basicInfo" class="text-decoration-none text-dark">
                                <i class="bi bi-chevron-right fs-5 me-2"></i>
                            </RouterLink>
                        </ProfileNavbar>
                    </div>
                    <!-- <div class="bg-dark mt-4 m-2 rounded-2 p-2  border">
                        <RouterLink to='/offer'
                            class="text-decoration-none text-warning  d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <i class="bi bi-shield-fill fs-1 pe-2"></i>
                                <span class="fw-bold fs-5">Gold Member</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <small class="">Upgrade</small>
                                <i class="bi bi-bi bi-chevron-right fs-4"></i>
                            </div>
                        </RouterLink>
                    </div> -->
                </div>
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                        type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Leads</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                        type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Queries</button>
                </li>

            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                    tabindex="0">
                   <OrderPage></OrderPage>
                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                    tabindex="0">
                        <div class="d-flex justify-content-center">
                            <div class="row border-bottom py-4 mb-5 container">
                                <router-link :to="link.path" class=" text-decoration-none text-dark col-4 mb-2"
                                    v-for="(link, index) in userLinks" :key="index">
                                    <div class="btn btn-light d-flex justify-content-center align-items-center border">
                                        <div class="p-2 d-flex flex-column">
                                            <i class="bi fs-4" :class="link.icon"></i>
                                            <small>{{ link.name }} </small>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                </div>

            </div>




        </div>
        <RouterLink to='/aboutUs'>
            <div class="scroll-button border rounded-circle"
                style="opacity: 60%; background-color: #000000; color: #ffffff">
                <i class="d-flex justify-content-center align-items-center bi bi-plus-lg"></i>
            </div>
        </Routerlink>
    </div>
</template>

<script>
import ProfileNavbar from '@/components/navbar/ProfileNavbar.vue'
import OrderPage from '@/views/OrderPage.vue'
export default {
    components: {
        ProfileNavbar,OrderPage
    },
    name: 'MyAccount',
    data() {
        return {
            isFixed: false,
            userLinks: [
                {
                    icon: 'bi-bookmark-star',
                    name: 'Favourite',
                    path: '/favourite-catalogs',
                },
                {
                    icon: 'bi-heart',
                    name: 'Wishlist',
                    path: '/wishlist',
                },
                {
                    icon: 'bi-cart',
                    name: 'Queries',
                    path: '/order',
                },
            ],
            links: [

                // {
                //     icon: 'bi-person',
                //     name: 'Promoters',
                //     path: '/promoters',
                // },
                // {
                //     icon: 'bi-person',
                //     name: 'Create',
                //     path: '/aboutUs',
                // },
                {
                    icon: 'bi-person',
                    name: 'Order',
                    path: '/order',
                },


            ],

        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.$store.dispatch('LoggedInUserStore/fetchUserDetail')
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {

        user() {
            return this.$store.getters['LoggedInUserStore/getUserDetail']
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('LoggedInUserStore/logout')
        },
        goBack() {
            window.history.back();
        },
        handleScroll() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const threshold = 50;
            this.isFixed = scrollPosition >= threshold;
        }
    }
}
</script>

<style scoped>
.fixed-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    /* or any other background color you want */
}

.scroll-button {
    z-index: 9;
    position: fixed;
    bottom: 60px;
    right: 10px;
    padding: 10px 10px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}
</style>