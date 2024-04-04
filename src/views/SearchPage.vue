<template>
    <div class="d-flex justify-content-start p-2 bg-light ">
        <i @click="goBack()" class="bi bi-chevron-left fs-5"></i>
    </div>
    <div class="container py-3">
        <div class="input-group w-100 my-3">
            <div class="form-outline d-flex w-100" style="border-radius: 0% !important;">
                <input type="search" id="form1" class="form-control" placeholder="Search"
                    style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px; " />
                <button type="button" class="btn btn-light"
                    style="border-top-left-radius: 0% !important; border-bottom-left-radius: 0%;">
                    <i class="bi bi-search"></i>
                </button>
            </div>
        </div>
        <StateSelector></StateSelector>
    </div>
</template>

<script>
import StateSelector from "@/components/StateSelector.vue";
export default {
    components: {
        StateSelector
    },
    methods: {
        goBack() {
            window.history.back();
        }
    }

}
</script>

<style scoped></style>