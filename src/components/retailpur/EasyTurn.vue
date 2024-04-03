<template>
    <div class="main">
        <div class="">
            <div>
                <FrontPageData title="Turn to your own E-Retail Shop in 4 simple steps" />
            </div>
        </div>
        <div class="imgss d-flex justify-content-between w100">
            <div class=" d-flex justify-content-center w-100">
                <img style="width: 24%;" src="img/retail/CreateAccount.png" alt="">
            </div>
            <div class="d-flex justify-content-center w-100">
                <img style="width:30%;" src="img/retail/CompleteKYC.png" alt="">
            </div>
            <div class="d-flex justify-content-center  w-100">
                <img style="width: 20%;" src="img/retail/SetupE-shop.png" alt="">
            </div>
            <div class="d-flex justify-content-center w-100">
                <img style="width: 20%;" src="img/retail/satrtSelling.png" alt="">
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <div class="w-100">
                <FrontPageData titleh4="Create Account"
                    text="Get Your Free Registration and become our Authorised Online Retailer, using your mobile number. " />
            </div>
            <div class="w-100">
                <FrontPageData titleh4="Complete KYC"
                    text="Complete your verification process by upload your Adhar Card as Identity Proof & Pan Card as Income Proof and Any document for your Current Address verification. " />
            </div>
            <div class="w-100">
                <FrontPageData titleh4="Setup E-Shop"
                    text="As far as you learn the updation of your e-shop you are ready to learn promotion, here you need learn how to promote your e-shop with" />
            </div>
            <div class="w-100">
                <FrontPageData titleh4="Start Selling"
                    text="Start Selling on your own e-commerce website, with your Branding, and Customisation. And earn upto 50% Commision on every sale on your website." />
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
    background-color: #daefec;
}
</style>