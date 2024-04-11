<template>
    <div class="">
        <div v-for="(collect, index) in collections" :key="index" class="my-3">
            <div class="banner" style="background-color: #EFEFED;">
                <div class="container">
                    <div class="row">
                        <div class="col-8" :class="'order-' + collect.order">
                            <h1 class="mt-4">{{ collect.heading }}</h1>
                            <p>{{ collect.text }}</p>
                            <router-link :to="'/catalogs/collection' + collect.id">
                                <button class="btn top-brand rounded mb-4">{{ collect.button }}</button>
                            </router-link>
                        </div>
                        <div class="col-4 ">
                            <img :src="collect.img" style="width:100%; height: 100%; object-fit: fill;" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <img src="img/asas.png" alt="" class="w-100">
        </div>
    </div>
</template>
<script>
export default {
    name: "CollectionPage",
    components: {
    },
    computed: {
        collections() {
            return this.$store.getters['collection/getCollections']
        },
    }
};
</script>
<style></style>