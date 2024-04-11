<template>
    <div class="containerr d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background:rgb(143,145,147, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
                class="text-decoration-none text-dark d-flex align-items-center">
                <img :src="`${publicPath}${img}`" style="width: 100px;object-fit: contain;">
            </router-link>
        </div>
        <div class="d-flex align-items-center gap-3">
            <!-- <RouterLink to=/profile>
                <i class="bi bi-person fs-4 mx-2" style="color: var(--secondary-color);"></i>
            </RouterLink> -->
            <button class="btn btn-dark opacity-50 fs-4 rounded-circle" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i class="bi bi-list fs-4"></i>
            </button>



        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header border-bottom">
                <img src="img/logo/logo.png" width="100" alt="">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="container mt-3">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100" style="width:50%">
                            50%
                        </div>
                    </div>
                </div>
                <router-link :to="link.path" class=" text-decoration-none text-dark border-bottom"
                    v-for="(link, index) in links" :key="index">
                    <div class="btn btn-light d-flex justify-content-between align-items-center m-3 border">
                        <div class="p-2">
                            <i class="bi fs-3" :class="link.icon"></i>
                            <span class="ms-3 fs-5">{{ link.name }} </span>
                        </div>
                    </div>
                </router-link>
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
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Search language"
                                        v-model="searchLanguage">
                                </div>
                                <div class="language-list">
                                    <div v-for="language in filteredLanguages" :key="language.code"
                                        class="language-item" @click="selectLanguage(language)">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/logo.png",
            // prevScrollPos: 0,
            backgroundOpacity: 0,
            hideOnScroll: true,
            links: [
                {
                    icon: 'bi-info-circle',
                    name: 'Basic Info',
                    path: '/ProfileDetail',
                },
                {
                    icon: 'bi-geo-alt',
                    name: 'Addres',
                    path: '/address',
                },

                {
                    icon: 'bi bi-telephone',
                    name: 'Contact Details',
                    path: '/ContactDetail'
                },
                {
                    icon: 'bi-info-circle',
                    name: 'Overview',
                    path: '/overview',
                },
                {
                    icon: 'bi bi-phone',
                    name: 'Social Details',
                    path: '/social'
                },
                {
                    icon: 'bi bi-clock',
                    name: 'Work Timing',
                    path: '/WorkTime'
                },
                {
                    icon: 'bi bi-vinyl',
                    name: 'Catagory',
                    path: '/BusinessType'
                },
                {
                    icon: 'bi bi-stars',
                    name: 'Branding',
                    path: '/brand'
                },
                {
                    icon: 'bi bi-layers',
                    name: 'Product',
                    path: '/product'
                },
                {
                    icon: 'bi bi-collection',
                    name: 'Collection',
                    path: '/collection'
                },
                {
                    icon: 'bi bi-journal-check',
                    name: 'Leads',
                    path: '/order'
                },
                {
                    icon: 'bi bi-plus-circle',
                    name: 'Create',
                    path: '/aboutUs'
                },
                {
                    icon: 'bi bi-heart',
                    name: 'Favourites',
                    path: '/favourite-catalogs'
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
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    computed: {
        filteredLanguages() {
            return this.languages.filter(language => {
                return language.name.toLowerCase().includes(this.searchLanguage.toLowerCase());
            });
        },
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            console.log(scrollTop)
            console.log(scrollPercentage)
            if (scrollPercentage >= 5 && scrollPercentage <= 6) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
        selectLanguage(language) {
            this.selectedLanguage = language.code;
        },
        getSelectedLanguageName(code) {
            const selectedLanguage = this.languages.find(language => language.code === code);
            return selectedLanguage ? selectedLanguage.name : '';
        },

    }
};
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>