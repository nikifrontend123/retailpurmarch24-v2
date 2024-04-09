<template>
    <div class="bg-dark text-white  pb-5" style="height: 100%;">
        <div class="text-center py-2 text-style">
            <RouterLink to="/" class="text-decoration-none text-warning">
                <span class="fs-5">Retailpur</span>
            </RouterLink>
            <h1 class="fw-bold style2" style="letter-spacing: 5px; font-size: 45px;">Gold</h1>
        </div>
        <div class="container mt-3">
            <div class="w-100 text-center rounded-3 px-2 bg-secondary pb-2">
                <span class="bg-warning text-secondary rounded-3 px-3 py-2 position-relative"
                    style="top: -15px;">Welcome
                    Offer For You</span>
                <div class="d-flex justify-content-center">
                    <p class="fw-bold mb-0 text-warning" style="letter-spacing: 5px; font-size: 35px;">FREE</p>
                    <div class="text-start text-white">
                        <small class="text-decoration-line-through">₹149</small> <br>
                        <small>for 7 days</small>
                    </div>
                </div>
                <div class="btn btn-warning text-secondary my-2 w-100">Start your trial</div>
            </div>

            <div class="my-4 text-center">
                <small class="">
                    <i class="text-warning bi bi-star-fill px-2 "></i> GOLD BENEFITS
                    <i class="text-warning bi bi-star-fill px-2"></i>
                </small>
            </div>

            <div class="rounded-4 bg-secondary">
                <div class="mt-4 d-flex justify-content-center align-items-center">
                    <p class="p-2 text-center mb-0 bill" style=""><span>~ <i
                                class="bi bi-bicycle fs-4 px-2"></i>Delivery ~</span></p>
                </div>
                <div v-for="(benefit, index) in benefits" :key="index"
                    class="d-flex align-items-center container my-2 ">
                    <img class="d-md-none d-block" :src="benefit.icon" style="width: 12%" height="12%">
                    <img class="d-md-block d-none" :src="benefit.icon" width="50">
                    <div class="ms-3">
                        <strong>{{ benefit.heading }}</strong>
                        <p>{{ benefit.text }}</p>
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
            benefits: [
                {
                    icon: 'https://b.zmtcdn.com/data/o2_assets/37d7cf95514124fb586ad3b3155aff721692777322.png',
                    text: 'At all retailers under 10 km, on orders above ₹1999',
                    heading: 'Free delivery'
                },
                {
                    icon: 'https://b.zmtcdn.com/data/o2_assets/376857a266b7712dd3fa504a6770053e1692784024.png',
                    text: 'Above all existing offers at 20,000+ partner retailers across India',
                    heading: 'Up to 30% extra off'
                },
                {
                    icon: 'https://b.zmtcdn.com/data/o2_assets/3465b63e70a890408c41d99897a25c861692784024.png',
                    text: 'More retailers are available for you during high demand',
                    heading: 'VIP access during rush hour'
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap');

.style2 {
    font-family: "Bungee Spice", sans-serif;
    font-weight: 400;
    font-style: normal;
}
</style>