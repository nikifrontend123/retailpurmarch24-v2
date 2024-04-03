<template>
    <div class="border p-2 m-4 bg-white">
        <div class="accordion m-3" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button style=" font-weight: 500;" class="accordion-button collapsed fs-4" type="button"
                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        Easy Turn
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse "
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <div class="first">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/CreateAccount.png" alt="">
                            </div>
                            <div class="w-100">
                                <FrontPageData titleh4="Create Account"
                                    text="Get Your Free Registration and become our Authorised Online Retailer, using your mobile number. " />
                            </div>
                        </div>
                        <div class="second">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/CompleteKYC.png" alt="">
                            </div>
                            <div class="w-100">
                                <FrontPageData titleh4="Complete KYC"
                                    text="Complete your verification process by upload your Adhar Card as Identity Proof & Pan Card as Income Proof and Any document for your Current Address verification. " />
                            </div>
                        </div>
                        <div class="third">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/SetupE-shop.png" alt="">
                            </div>
                            <div class="w-100">
                                <FrontPageData titleh4="Setup E-Shop"
                                    text="As far as you learn the updation of your e-shop you are ready to learn promotion, here you need learn how to promote your e-shop with" />
                            </div>
                        </div>
                        <div class="fourth">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/satrtSelling.png" alt="">
                            </div>
                            <div class="w-100">
                                <FrontPageData titleh4="Start Selling"
                                    text="Start Selling on your own e-commerce website, with your Branding, and Customisation. And earn upto 50% Commision on every sale on your website." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item ">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button style=" font-weight: 500;" class="accordion-button collapsed fs-4" type="button"
                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        Easy Learn
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <div class="first">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/AppTour.png" alt="">
                            </div>
                            <div class="w-100 ">
                                <FrontPageData titleh4="App Tour"
                                    text="First of all, after setting up of your shop please go through with our App Tour, here you can learn about everything what you can do with our app in details." />
                            </div>
                        </div>
                        <div class="sec">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/Updation.png" alt="">
                            </div>
                            <div class="w-100">
                                <FrontPageData titleh4="Updation"
                                    text="After going through with the App tour you need to learn updation of your e-shop with the trends & stats, with the help of this your shop will be aware of your customers taste." />
                            </div>
                        </div>
                        <div class="third">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/Promotion.png" alt="">
                            </div>
                            <div class="w-100 ">
                                <FrontPageData titleh4="Promotion"
                                    text="As far as you learn the updation of your e-shop you are ready to learn promotion, here you need learn how to promote your e-shop with" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item ">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button style=" font-weight: 500;" class="accordion-button collapsed fs-4" type="button"
                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        Easy Earn
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        <div class="first">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/SocialMedia.jpg" alt="">
                            </div>
                            <div class="w-100 ">
                                <FrontPageData titleh4="Social Media Sharing"
                                    text="You just need to update your e-shop, with trend" />
                            </div>
                        </div>
                        <div class="sec">
                            <div class=" d-flex justify-content-center w-100">
                                <img style="width: 30%;" src="img/retail/Commission.png" alt="">
                            </div>
                            <div class="w-100 text-center">
                                <FrontPageData titleh4="Commission upto 50%"
                                    text="Set-up your shop, by adding Basic Details, Business Details, Bank Details, Customisation of your shop as per your Branding and Adding the Catalougs you want sale." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FrontPageData from '@/components/retailpur/FrontPageData.vue';
export default {
    components: {
        FrontPageData
    }
}
</script>
<style>
.accordion-button:not(.collapsed) {
    background-color: #f9d09b;
}

.accordion-button:focus {
    z-index: none;
    border-color: none;
    outline: none;
    box-shadow: none;
}

bs-accordion-border-color {
    border: none;
}
</style>
