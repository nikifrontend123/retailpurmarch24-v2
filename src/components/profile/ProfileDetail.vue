<template>
    <ProfileNav></ProfileNav>
    <div class="container mt-3">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                style="width:25%">
                25%
            </div>
        </div>
    </div>

    <div class="container mt-3">
        <p class="fs-5 text-center">Basic Information</p>

        <form class="row g-3">
            <ImageUploadBoxV2 @imageUploaded="handleImageUploaded"></ImageUploadBoxV2>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="form.Name">
                <label for="floatingInput">Profile Name</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Discreption</label>
            </div>

            <div class="form-floating mb-2">
                <input type="date" class="form-control" id="floatingInput" v-model="form.country" required>
                <label for="floatingInput">Date of Establishing</label>
            </div>
            <RouterLink to=/ContactDetail class="d-flex justify-content-center my-3 mb-5 w-100 text-decoration-none">
                <button class="btn btn-dark w-100 py-3" type="submit">Save & Continue <i
                        class="bi bi-arrow-right ms-2"></i></button>
            </RouterLink>
        </form>


        <!-- ----------------------------------------------------------------- -->
    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
import ImageUploadBoxV2 from '@/components/ImageUploadBoxV2.vue';

export default {
    components: {
        ProfileNav,
         ImageUploadBoxV2
    }, 

    data() {
        return {
            imageUrl: '',
            mydate: null,
            form: {
                Name: "",
                discreption: "",
                Pincode: "",
                Year: "",
            },
        }
    },
    methods: {
        // handleFileUpload(event) {
        //     this.images = Array.from(event.target.files);
        // },
        getData() {
            console.warn("values :  ", this.form.Name, this.form.BName, this.form.Pincode, this.form.Year);
            alert("Data has been submitted to Console");
        },
    }
}
</script>

<style scoped></style>