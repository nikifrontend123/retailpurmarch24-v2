<template>
    <div v-if="showNav" class="nav-container">
        <nav ref="navBar">
            <div class="nav-scroll">
                <ul class="px-3">
                    <li v-for="section in sections" :key="section.id" class="my-3">
                        <a class="" :class="{ active: activeTab === section.id }" href="#"
                            @click.prevent="scrollToSection(section.id)">
                            {{ section.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <nav v-else ref="navBar">
        <div class="nav-scroll bg-dark">
            <ul class="px-3">
                <li v-for="section in sections" :key="section.id" class="my-3">
                    <a class="" :class="{ active: activeTab === section.id }" href="#"
                        @click.prevent="scrollToSection(section.id)">
                        {{ section.name }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
// import TopNav from '@/components/navbar/TopNav.vue';

export default {
    components: {
        // TopNav
    },
    props: {
        showNav: Boolean,
        activeTab: String,
        sections: Array,
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.pageYOffset + 200; // Adjust the offset as needed
            const currentSection = this.sections.find((section) => {
                const el = document.getElementById(section.id);
                return el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition;
            });
            if (currentSection && currentSection.id !== this.activeTab) {
                this.$emit('update-active-tab', currentSection.id);
            }
        },
        scrollToSection(sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                window.scrollTo({ top: el.offsetTop - 160, behavior: 'smooth' });
                this.$emit('update-active-tab', sectionId);
            }
        },
    },
};
</script>

<style scoped>
.nav-container {
    position: fixed;
    top: 89px;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #000000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-scroll {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.nav-scroll::-webkit-scrollbar {
    display: none;
}

ul.px-3 {
    border: none;
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

nav ul {
    border: none;
    margin: 0;
    padding: 0;
}

nav li {
    border: none;
    display: inline-block;
    margin-right: 20px;
}

nav a {
    border: none;
    text-decoration: none;
    /* color: #333; */
    color: #fff;
    padding: 10px;
}

.active {
    border: none;
    border-bottom: 3px solid #fff;
    color: #fff;
    font-weight: bold;
}
</style>
