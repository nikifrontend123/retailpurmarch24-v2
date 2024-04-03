<template>
    <div class=" container d-flex w-100">
        <div class="m-1 w-100">
            <select v-model="selectedState" id="state" class="w-100 border py-2" @change="fetchCities">
                <option disabled value="">Please select a state</option>
                <option v-for="state in states" :key="state.id" :value="state">
                    {{ state.name }}
                </option>
            </select>
        </div>
        <div class="m-1 w-100">
            <select v-model="selectedCity" id="city" class="w-100 border py-2">
                <option disabled value="">Please select a city</option>
                <option v-for="city in cities" :key="city.id" :value="city.name">
                    {{ city.name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            selectedState: '',
            states: [],
            selectedCity: '',
            cities: [],
        }
    },
    mounted() {
        this.fetchStates();
        this.fetchCities();
    },
    methods: {
        async fetchStates() {
            try {
                const API_KEY = 'MHlpaWhCVEYzaVpFVGZjT256ODAxOVBSS2JCQWxxdUx2NnVLNWVCUw==';
                const config = {
                    method: 'get',
                    url: 'https://api.countrystatecity.in/v1/countries/IN/states',
                    headers: {
                        'X-CSCAPI-KEY': API_KEY,
                    },
                };
                const response = await axios(config);
                if (response.data && Array.isArray(response.data)) {
                    this.states = response.data;
                } else {
                    console.error('Invalid response format from API:', response.data);
                }
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        },
        async fetchCities() {
            if (this.selectedState && this.selectedState.iso2) {
                try {
                    const API_KEY = 'MHlpaWhCVEYzaVpFVGZjT256ODAxOVBSS2JCQWxxdUx2NnVLNWVCUw==';
                    const config = {
                        method: 'get',
                        url: `https://api.countrystatecity.in/v1/countries/IN/states/${this.selectedState.iso2}/cities`,
                        headers: {
                            'X-CSCAPI-KEY': API_KEY,
                        },
                    };
                    const response = await axios(config);
                    if (response.data && Array.isArray(response.data)) {
                        this.cities = response.data;
                    } else {
                        console.error('Invalid response format from API:', response.data);
                    }
                } catch (error) {
                    console.error('Error fetching cities:', error);
                }
            } else {
                this.cities = [];
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>