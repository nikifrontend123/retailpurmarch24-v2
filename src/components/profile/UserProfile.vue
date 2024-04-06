<template>
    <ProfileNav></ProfileNav>
    

    <div class="container my-3">
        <p class="fs-5 text-center">Basic Information</p>

        <form class="row g-3">
            <ImageUploadBox @imageUploaded="handleImageUploaded"></ImageUploadBox>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="form.Name">
                <label for="floatingInput">Profile Name</label>
            </div>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="floatingInput" placeholder="name" v-model="form.Name">
                <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-2">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Discreption</label>
            </div>
        </form>

            <BillingAdd></BillingAdd>
 
        <button class="btn btn-dark w-100 py-3 mb-5" type="submit">
        Save
        <i class="bi bi-arrow-right ms-2"></i>
        </button>


        <!-- ----------------------------------------------------------------- -->
    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
import ImageUploadBox from '@/components/ImageUploadBox.vue';
import BillingAdd from '@/components/profile/BillingAdd.vue';

export default {
    components: {
        ProfileNav, ImageUploadBox, BillingAdd
    },
    name: "StepThree",

    data() {
        return {
            imageUrl: '',
            mydate: null,
            profile: {
                size: '',
                price: '',
                position: ''
            },
            sizes: [],
            form: {
                Name: "",
                discreption: "",
                Pincode: "",
                Year: "",
            },
        }
    },
    methods: {
        handleFileUpload(event) {
            this.images = Array.from(event.target.files);
        },
        getData() {
            console.warn("values :  ", this.form.Name, this.form.BName, this.form.Pincode, this.form.Year);
            alert("Data has been submitted to Console");
        },
        saveSize(event) {
            event.preventDefault();
            if (this.profile.size && this.profile.price) {
                const newSize = { ...this.profile };

                // If position is provided, add the new size at the specified position
                if (newSize.position !== null && newSize.position !== undefined && newSize.position !== '') {
                    const position = parseInt(newSize.position) - 1; // Subtract 1 from the position to start from 1
                    if (position >= 0 && position < this.sizes.length) { // Check if position is between 0 and sizes.length - 1
                        this.sizes.splice(position, 0, newSize);
                    } else {
                        // If position is out of bounds, add the new size at the end
                        this.sizes.push(newSize);
                    }
                } else {
                    // If position is not provided, add the new size at the end
                    this.sizes.push(newSize);
                }

                this.resetSizeForm();
            } else {
                alert('Please enter a size and price');
            }
        },
        resetSizeForm() {
            this.profile = {
                size: '',
                price: ''
            };
        },
        deleteSize(index) {
            this.sizes.splice(index, 1);
        },
    }
}
</script>

<style scoped></style>