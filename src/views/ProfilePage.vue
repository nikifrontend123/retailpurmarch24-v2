<template>
    <!-- <RetailpurTopNav></RetailpurTopNav> -->
    <div class=" ">
        <div class="d-flex justify-content-start p-2 bg-light ">
            <i @click="goBack()" class="bi bi-chevron-left fs-5"></i>
        </div>
        <div class="  my-2">
            <div class="scroll-fixed    bg-white py-3" :class="{ 'fixed-top': isFixed }" >
                <div class="bg-white" >
                    <div
                        class="  d-flex justify-content-between align-items-startw mx-2 rounded-top-2  p-2 border bg-white">
                        <div class="d-flex bg-white">
                            <img :src="profile" class="rounded-circle border" style="width:80px ; height: 80px;" alt="">
                            <div class="ps-3">
                                <strong class="fs-4">Nikhil</strong>
                                <p class="mb-1 text-danger">View activity <i class="bi bi-chevron-right"></i></p>
                                <!-- <p class="mb-1">nkhil777@gmail.com</p>
                    <p class="mb-1">8952635214</p> -->
                            </div>
                        </div>
                        <RouterLink to="/userProfile">
                            <i class="bi bi-pen"></i>
                        </RouterLink>
                    </div>
                    <div class="bg-dark mx-2 rounded-bottom-2 p-2 border">
                        <RouterLink to='/offer'
                            class="text-decoration-none text-warning  d-flex justify-content-between align-items-center">
                            <span><i class="bi bi-heart pe-2"></i> Join Retailpur Gold</span>
                            <i class="bi bi-bi bi-chevron-right"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>

            <div>
                <div class="border-bottom py-4 mb-5">
                    <router-link :to="link.path" class=" text-decoration-none text-dark"
                        v-for="(link, index) in userLinks" :key="index">
                        <div class="btn btn-light d-flex justify-content-between align-items-center m-3 border">
                            <div class="p-2">
                                <i class="bi fs-3" :class="link.icon"></i>
                                <span class="ms-3 fs-5">{{ link.name }} </span>
                            </div>
                        </div>
                    </router-link>
                </div>

                <router-link :to="link.path" class=" text-decoration-none text-dark" v-for="(link, index) in links"
                    :key="index">
                    <div class="btn btn-light d-flex justify-content-between align-items-center m-3 border">
                        <div class="p-2">
                            <i class="bi fs-3" :class="link.icon"></i>
                            <span class="ms-3 fs-5">{{ link.name }} </span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="py-3 border-top mt-5">
                <span class="d-flex align-items-center m-3" type="button" data-bs-toggle="modal"
                    data-bs-target="#languageModal">
                    <button class="btn btn-dark w-100 py-3 fs-5">
                        <i class="bi bi-globe fs-5 mx-2 text-white" style="color: var(--secondary-color);"></i>
                        {{ getSelectedLanguageName(selectedLanguage) }}
                    </button>
                </span>
                <div class="m-3">
                    <button class="btn btn-danger rounded w-100 py-3 fs-5" @click="logOut()">
                        <i class="bi bi-box-arrow-right fs-5 mx-2 text-white"
                            style="color: var(--secondary-color);"></i>
                        Log Out
                    </button>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="languageModal" tabindex="-1" aria-labelledby="languageModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="languageModalLabel">Select Language</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search language"
                                    v-model="searchLanguage">
                            </div>
                            <div class="language-list">
                                <div v-for="language in filteredLanguages" :key="language.code" class="language-item"
                                    @click="selectLanguage(language)">
                                    <span :class="{ 'selected': selectedLanguage === language.code }">{{ language.name
                                        }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <!-- <button type="button" class="btn btn-primary" @click="setLanguage">Save changes</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import RetailpurTopNav from '@/components/navbar/RetailerpurTopNav.vue'
export default {
    components: {
        // RetailpurTopNav
    },
    name: 'MyAccount',
    data() {
        return {
            isFixed: false,
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aNRVLwfw1U28A7a4uf57VPdpzlHNA4WARw&usqp=CAU',
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
                {
                    icon: 'bi-person',
                    name: 'Profile Setup',
                    path: '/basicInfo',
                },
                {
                    icon: 'bi-person',
                    name: 'Profile Branding',
                    path: '/brand',
                },
                {
                    icon: 'bi-person',
                    name: 'Manage',
                    path: '/manage',
                },
                {
                    icon: 'bi-person',
                    name: 'promoters',
                    path: '/promoters',
                },
                {
                    icon: 'bi-person',
                    name: 'Create',
                    path: '/aboutUs',
                },
                {
                    icon: 'bi-person',
                    name: 'Order',
                    path: '/order',
                },

                {
                    icon: 'bi bi-person ',
                    name: 'Login',
                    path: '/login-page'
                },
            ],
            searchLanguage: '',
            selectedLanguage: 'en',
            languages: [
                { code: 'en', name: 'English' },
                { code: 'hi', name: 'Hindi' },
                { code: 'fr', name: 'French' },
                { code: 'es', name: 'Spanish' },
                { code: 'de', name: 'Deutsch' },
                { code: 'ja', name: '日本語' },
                { code: 'ru', name: 'Русский' },
                { code: 'th', name: 'ภาษาไทย' },
                { code: 'tr', name: 'Türkçe' },
                { code: 'vi', name: 'Tiếng Việt' },
                { code: 'zh-cn', name: '中文(简体)' },
                { code: 'zh-tw', name: '中文(繁體)' },
            ]
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
        filteredLanguages() {
            return this.languages.filter(language => {
                return language.name.toLowerCase().includes(this.searchLanguage.toLowerCase());
            });
        },
        user() {
            return this.$store.getters['LoggedInUserStore/getUserDetail']
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('LoggedInUserStore/logout')
        },
        selectLanguage(language) {
            this.selectedLanguage = language.code;
        },
        getSelectedLanguageName(code) {
            const selectedLanguage = this.languages.find(language => language.code === code);
            return selectedLanguage ? selectedLanguage.name : '';
        },
        goBack() {
            window.history.back();
        },
        handleScroll() {
            // Get the scroll position
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Define the threshold for fixing the section
            const threshold = 200; // Adjust this value as needed

            // Update isFixed based on the scroll position
            this.isFixed = scrollPosition >= threshold;
        }
    }
}
</script>

<style scoped>
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

.fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* adjust z-index as needed */
}
</style>