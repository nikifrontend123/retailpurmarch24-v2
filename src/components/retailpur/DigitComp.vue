<template>
    <div class="text-center w-100 fs-5 container d-md-flex d-block justify-content-center">
        <div>
            <input class="text-center w-75" style="background-color: #F6F7F9; font-weight: 700; border: 1px solid lightgrey;"
                v-model="num1" @input="calculate" type="number">
            <br>Retail Products Every Day <br>
        </div>
        <div>
            <span style="font-size: 25px; font-weight: 700; text-decoration: underline;"> ₹ {{ result }} /-</span> <br>
            Average Income You Will Earn
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 1,
        }
    },
    computed: {
        result() {
            const amount = this.num1 * 267 * 30; 
            return amount.toLocaleString();
        }
    },
    methods: {
        calculate() { 
            if (this.num1 < 0) {
                this.num1 = 0;
            }
        }
    }
}
</script>

<style  scoped>
textarea:focus,
input:focus {
    outline: none;
}

input {
    width: 5%;
}

@media only screen and (max-width: 567px) {
    input {
        width: 25%;
    }
}
</style>
