<template>
    <div class="main">
        <div class="">
            <div>
                <FrontPageData title="Learn to Grow your E-Retail Shop in 3 simple steps" />
            </div>
        </div>
        <div class="imgss d-flex justify-content-between">
            <div class=" d-flex justify-content-center w-100">
                <img src="img/retail/AppTour.png" width="20%" alt="">
            </div>
            <div class="d-flex justify-content-center w-100">
                <img src="img/retail/Updation.png" width="20%" alt="">
            </div>
            <div class="d-flex justify-content-center w-100">
                <img src="img/retail/Promotion.png" width="20%" alt="">
            </div>

        </div>
        <div class="d-flex justify-content-between">
            <div class="w-100 mx-3">
                <FrontPageData titleh4="App Tour"
                    text="First of all, after setting up of your shop please go through with our App Tour, here you can learn about everything what you can do with our app in details." />
            </div>
            <div class="w-100 mx-3">
                <FrontPageData titleh4="Updation"
                    text="After going through with the App tour you need to learn updation of your e-shop with the trends & stats, with the help of this your shop will be aware of your customers taste." />
            </div>
            <div class="w-100 mx-3">
                <FrontPageData titleh4="Promotion"
                    text="As far as you learn the updation of your e-shop you are ready to learn promotion, here you need learn how to promote your e-shop with" />
            </div>
        </div>
    </div>
</template>

<script>
import FrontPageData from '@/components/retailpur/FrontPageData.vue';

export default {
    components: { FrontPageData },


}
</script>
<style scoped>
.main {
    background-color: #FFF2CC;
}
</style>