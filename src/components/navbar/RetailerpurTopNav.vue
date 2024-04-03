<template>
    <div class="w-100">
        <div class="d-flex justify-content-between align-items-center py-2 px-2 bg-light border-bottom">
            <div class="ms-2 d-none d-lg-flex align-items-center ">
                <RouterLink to="/">
                    <img :src="`${publicPath}${img}`" style="width: 120px;object-fit: contain;">
                </RouterLink>
            </div>
            <div class="ms-2 d-flex d-lg-none align-items-center">
                <RouterLink to="/">
                    <img :src="`${publicPath}${img}`" style="width: 100px;object-fit: contain;">
                </RouterLink>
                <!-- <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;"> -->

            </div>
            <div class="d-flex">
                <!-- <i class="bi bi-search fs-4 mx-2" style="color: var(--secondary-color);"></i> -->
                <RouterLink to=/profile>
                    <i class="bi bi-person fs-4 mx-2" style="color: var(--secondary-color);"></i>
                </RouterLink>
                <span type="button"  data-bs-toggle="modal" data-bs-target="#languageModal">
                    <i class="bi bi-globe fs-4 mx-2" style="color: var(--secondary-color);"></i>
                </span>
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
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/logo.png",
            categories: [
                // {
                //     name: 'About Us',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/aboutUs'
                // },
                // {
                //     name: 'Support',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/faqs/customer-service'
                // },
                {
                    name: 'My Profile',
                    icon: 'bi bi-person ',
                    router: '/profile'
                },
                // {
                //     name: 'Login',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/login-page'
                // },
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
                // Add more languages as needed
            ]
        }
    },
    computed: {
        filteredLanguages() {
            return this.languages.filter(language => {
                return language.name.toLowerCase().includes(this.searchLanguage.toLowerCase());
            });
        }
    },
    methods: {
        selectLanguage(language) {
            this.selectedLanguage = language.code;
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
</style>