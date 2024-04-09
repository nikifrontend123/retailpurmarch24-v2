<template>
    <div>
        <ProfileNav></ProfileNav>
        <div class="container mt-3">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                    style="width:50%">
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
                    <i class="bi bi-box-arrow-right fs-5 mx-2 text-white" style="color: var(--secondary-color);"></i>
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
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';

export default {
    components: {
        ProfileNav
    },
    data() {
        return {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aNRVLwfw1U28A7a4uf57VPdpzlHNA4WARw&usqp=CAU',
            links: [
                {
                    icon: 'bi-info-circle-fill',
                    name: 'Basic Info',
                    path: '/ProfileDetail',
                },
                {
                    icon: 'bi-info-circle-fill',
                    name: 'Overview',
                    path: '/overview',
                },
                {
                    icon: 'bi-info-circle-fill',
                    name: 'Addres',
                    path: '/address',
                },

                {
                    icon: 'bi bi-telegram',
                    name: 'Contact Details',
                    path: '/ContactDetail'
                },
                {
                    icon: 'bi bi-clock-fill',
                    name: 'Work Timing',
                    path: '/WorkTime'
                },
                {
                    icon: 'bi bi-vinyl-fill',
                    name: 'Catagory',
                    path: '/BusinessType'
                },
                {
                    icon: 'bi bi-stars',
                    name: 'Branding',
                    path: '/brand'
                },
                {
                    icon: 'bi bi-stack',
                    name: 'Product',
                    path: '/product'
                },
                {
                    icon: 'bi bi-collection-fill',
                    name: 'Collection',
                    path: '/collection'
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
    computed: {
        filteredLanguages() {
            return this.languages.filter(language => {
                return language.name.toLowerCase().includes(this.searchLanguage.toLowerCase());
            });
        },
    },
    methods: {
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