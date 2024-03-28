<template>
    <div class="pb-5">
        <ProfileNav></ProfileNav>
        <p class="text-center fw-bold fs-5 my-2">Upload Your Banner Below</p>
        <ImageUploadBox></ImageUploadBox>

        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-center">Select Your Brand Color</h5>
                            <form @submit.prevent="submitColor">
                                <div class="form-group">
                                    <!-- <label for="favcolor">Color:</label> -->
                                    <input v-model="selectedColor" type="color" id="favcolor" name="favcolor"
                                        class="form-control">
                                </div>
                                <div class="d-flex justify-content-center mt-3">
                                    <button type="submit" class="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <p v-if="submittedColor" class="text-center mb-0 me-3">
                                Selected Color:
                                <span>{{ submittedColor }}</span>
                            </p>
                            <div class="rounded-circle" :style="{ backgroundColor: submittedColor }"
                                style="width:30px; height:30px">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
import ImageUploadBox from '@/components/ImageUploadBox.vue'
export default {
    components: {
        ProfileNav, ImageUploadBox
    },
    data() {
        return {
            selectedColor: '#ff0000',
            submittedColor: ''
        };
    },
    methods: {
        submitColor() {
            this.submittedColor = this.selectedColor;
            // this.selectedColor = '#ff0000'; 
        }
    }
}
</script>

<style lang="scss" scoped></style>