<template>
    <div>
            <div class="w-100 d-flex justify-content-between align-items-center p-2 border-bottom bg-white">
                <div class="d-flex justify-content-between align-items-center w-100">
                    <div class="d-flex align-items-center">
                        <i @click="goBack()" class="bi bi-chevron-left fs-5 me-2"></i>
                        <img :src="profile" class="rounded-circle border" style="width: 60px; height: 60px;" alt="">
                        <div class="ps-3">
                            <strong>Nikhil</strong>
                        </div>
                    </div>
                    <div>
                        <slot></slot>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aNRVLwfw1U28A7a4uf57VPdpzlHNA4WARw&usqp=CAU',
        }
    },
    props: {
        isFixed: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        goBack() {
            window.history.back();
        }
    }
}
</script>

<style scoped>
.fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* Add any additional styles you need, such as background-color */
}
</style>
