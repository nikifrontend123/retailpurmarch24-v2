<template>
    <ProfileNav></ProfileNav>
    <div class="container mt-3 mb-5">
        <p class="fs-5 text-center">Contact Details</p >
        <form class="row g-3 pb-4">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-phone"></i></span>
                <input type="number" class="form-control" placeholder="Contact Number" aria-label="Contact Number"
                    aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-whatsapp"></i></span>
                <input type="number" class="form-control" placeholder="Whatsapp Number" aria-label="Whatsapp Number"
                    aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                <input type="email" class="form-control" placeholder="E-mail" aria-label="E-mail"
                    aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-geo"></i></span>
                <input type="text" class="form-control" placeholder="Location" aria-label="Location"
                    aria-describedby="basic-addon1">
            </div>

            

            <RouterLink to=/BusinessType class="d-flex justify-content-center my-3 mb-5 w-100 text-decoration-none">
                <button class="btn btn-dark w-100 py-3" type="submit">Save & continue <i class="bi bi-arrow-right ms-2"></i></button>
            </RouterLink>
        </form>
        <!-- ----------------------------------------------------------------- -->
    </div>
</template>

<script>

import ProfileNav from '@/components/navbar/ProfileNav.vue';
export default {
    components: {
        ProfileNav
    },
    name: "StepThree",

    data() {
        return {
            mydate: null,
            form: {
                Name: "",
                BName: "",
                Pincode: "",
                Year: "",
            },
        }
    },
    methods: {
        getData() {
            console.warn("values :  ", this.form.Name, this.form.BName, this.form.Pincode, this.form.Year);
            alert("Data has been submitted to Console");
        }
    }
}
</script>

<style scoped></style>