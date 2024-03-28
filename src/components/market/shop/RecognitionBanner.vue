<template>
    <div class="">
        <div class="w-100 overflow-auto d-flex align-items-center hide-scroll" ref="slider">
            <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                class="btn   m-2 mx-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
                <img :src="review.imgr" alt="User Image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedReview: 1,
        };
    },
    computed: {
        reviews() {
            return this.$store.getters.getBrandsTwo;
        },
        infiniteReviews() {
            const reviews = this.reviews.slice();
            return reviews.concat(reviews);
        },
        getSelectedReviewInfo() {
            const selectedReview = this.infiniteReviews[this.selectedReview];
            return {
                text: selectedReview.text,
                name: selectedReview.name,
                btnName: selectedReview.btnName,
                url: selectedReview.url
            };
        }
    },
    mounted() {
        this.reviews[this.selectedReview].show = true;
        this.scrollToCenter();
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
        },
        showUser(review, index) {
            this.selectedReview = index;
            this.$store.dispatch('toggleBrand', review);
            this.scrollToCenter();
        },
        scrollToCenter() {
            const slider = this.$refs.slider;
            const selectedElement = slider.children[this.selectedReview];
            const scrollLeft =
                selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 1.8;
            slider.scrollLeft = scrollLeft;
        },
    },
};
</script>

<style lang="scss" scoped>
.btn.selectedDiv {
    border: 2px solid #FFCA2C;
}

img {
    width: 80px;
    height: 80px;
}

.btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}

#style-4 {
    scroll-behavior: smooth; 
}

#style-4::-webkit-scrollbar {
    display: none;
}

.hide-scroll {
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #ffffff;
}

::-webkit-scrollbar-thumb {
    background: rgb(134, 132, 132)4f4;
    border-radius: 5px;
    width: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #f5e5e5;
    width: 10px;
}
</style>