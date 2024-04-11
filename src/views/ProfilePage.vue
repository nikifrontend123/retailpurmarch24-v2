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
                        <ProfileNavbar :isFixed="isFixed"></ProfileNavbar>
                    </div>
                    <div class="bg-dark mt-4 m-2 rounded-2 p-2  border">
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
                    </div>
                </div>
            </div>

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
            <div class="d-flex justify-content-between py-3 border-top mt-5 container">
                <span class="d-flex align-items-center  w-100 mx-1" type="button" data-bs-toggle="modal"
                    data-bs-target="#languageModal">
                    <button class="btn btn-outline-dark w-100   fs-5">
                        <i class="bi bi-globe fs-5 mx-2" style="color: var(--secondary-color);"></i>
                        {{ getSelectedLanguageName(selectedLanguage) }}
                    </button>
                </span>
                <div class="w-100  mx-1">
                    <button class="btn btn-outline-danger rounded w-100   fs-5" @click="logOut()">
                        <i class="bi bi-box-arrow-right fs-5 mx-2"></i>
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
                                    <span :class="{ 'selected': selectedLanguage === language.code }">{{
                                        language.name
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
        <!-- <RouterLink to='/aboutUs'>
            <div class="scroll-button border rounded-circle"
                style="opacity: 60%; background-color: #000000; color: #ffffff">
                <i class="d-flex justify-content-center align-items-center bi bi-plus-lg"></i>
            </div>
        </Routerlink> -->
    </div>
</template>

<script>
import ProfileNavbar from '@/components/navbar/ProfileNavbar.vue'
export default {
    components: {
        ProfileNavbar,
    },
    name: 'MyAccount',
    data() {
        return {
            isFixed: false,
            userLinks: [
                {
                    icon: 'bi-person',
                    name: 'Profile',
                    path: '/ProfileDetail',
                },
                {
                    icon: 'bi-geo-alt',
                    name: 'Address',
                    path: '/address',
                },
                {
                    icon: 'bi-telephone',
                    name: 'Contact',
                    path: '/ContactDetail',
                },
                {
                    icon: 'bi-heart',
                    name: 'Wishlist',
                    path: '/wishlist',
                },
                {
                    icon: 'bi-bag-check',
                    name: 'Queries',
                    path: '/query',
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
        goBack() {
            window.history.back();
        },
        handleScroll() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const threshold = 50;
            this.isFixed = scrollPosition >= threshold;
        },
        selectLanguage(language) {
            this.selectedLanguage = language.code;
        },
        getSelectedLanguageName(code) {
            const selectedLanguage = this.languages.find(language => language.code === code);
            return selectedLanguage ? selectedLanguage.name : '';
        },
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