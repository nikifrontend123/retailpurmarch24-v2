<template>
    <nav id="navbar-example2" class="navbar nav-scroll">
      <ul class="nav nav-pills d-flex justify-content-center">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="nav-item"
          @click="scrollToSection(section.id)"
        >
          <a
            class="nav-link  rounded-0"
            :href="'#' + section.id"
            :class="{ 'active': section.id === activeTab }"
          >
            {{ section.name }}
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'SectionNavbar',
    props: {
      sections: Array,
      activeTab: String,
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      scrollToSection(sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 0, behavior: 'smooth' });
          this.updateActiveTab(sectionId);
        }
      },
      updateActiveTab(tabId) {
        this.$emit('update-active-tab', tabId);
      },
      handleScroll() {
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;
        const closestSection = this.sections.reduce((prev, curr) => {
          const prevEl = document.getElementById(prev.id);
          const currEl = document.getElementById(curr.id);
          const prevDist = Math.abs(prevEl.offsetTop - scrollPosition);
          const currDist = Math.abs(currEl.offsetTop - scrollPosition);
          return currDist < prevDist ? curr : prev;
        });
  
        if (closestSection.id !== this.activeTab) {
          this.updateActiveTab(closestSection.id);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
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
  }
  
  .nav-pills {
    flex-wrap: nowrap;
    white-space: nowrap;
  }
  
  .nav-pills .nav-link {
    border: none;
    text-decoration: none;
    color: #fff;
    padding: 10px;
    background-color: transparent;
  }
  
  .nav-pills .nav-link.active {
    border-bottom: 3px solid #fff;
    background-color: none;
    font-weight: bold;
  }
  </style>