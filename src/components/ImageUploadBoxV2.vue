<template>

    <div class="d-flex align-items-end w-100">
        <div class="preview-circle d-flex justify-content-center align-item-center rounded-circle">
            <div v-if="!previewUrl">
                <img :src="mysteryman" alt="Mystery Man" class="preview-image">
            </div>
            <img v-else-if="isImage" :src="previewUrl" alt="preview" class="preview-image">
            <a v-else :href="previewUrl" target="_blank" class="d-flex align-items-center justify-content-center h-100">
                <i class="bi bi-filetype-pdf text-danger" style="font-size: 3rem;"></i>
            </a>
        </div>

        <div class="ms-4">
            <label class="btn btn-primary w-100" @click="triggerFileUpload">
                <i class="bi bi-upload me-2"></i> Upload Image
            </label>
            <input class="w-100" ref="fileInput" type="file" @change="previewImage" style="display: none"
                accept="image/*,application/pdf">
            <p v-if="error" class="error-text mt-2">{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageUploadBox',
    data() {
        return {
            previewUrl: '',
            isImage: true,
            error: '',
            mysteryman: '/img/mysteryman.png'
        }
    },
    methods: {
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        previewImage(event) {
            this.error = '';
            const file = event.target.files[0];
            if (!file) {
                return;
            }
            if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
                this.error = 'File must be an image or a PDF.';
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                this.error = 'File size should not exceed 5MB.';
                return;
            }
            this.isImage = file.type.startsWith('image/');
            this.previewUrl = URL.createObjectURL(file);
        },
        clearImage() {
            this.previewUrl = '';
            this.$refs.fileInput.value = null;
            this.isImage = true;
            this.error = '';
            this.triggerFileUpload();
        }
    },
    watch: {
        previewUrl(newValue) {
            this.$emit('image', newValue)
        }
    }
}
</script>

<style scoped>
.preview-circle {
    width: 100px;
    height: 100px;
    background-color: #f8f9fa;
    overflow: hidden;
}

.preview-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}



.error-text {
    color: red;
}
</style>