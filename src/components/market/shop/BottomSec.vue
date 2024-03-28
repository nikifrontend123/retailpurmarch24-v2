
<template>
    <div>
        <div id="section8" class="section mb-5">
           
            <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Connect ~</span> </p>
            <div class="container mb-5">
                <div class="row d-flex justify-content-center ">
                    <div v-for="(contact, index) in folows" :key="index" class="col-3 col-md-1 py-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="rounded-circle border border-5 d-flex align-items-center justify-content-center"
                                style="width: 60px; height: 60px;background: linear-gradient(133deg, rgba(106,106,106,1) 45%, rgba(0,0,0,1) 55%);">
                                <a class="text-white" :href="contact.url" target="_blank">
                                    <i :class="contact.icon"></i>
                                </a>
                            </div>
                        </div>
                        <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                    </div>
                </div>
            </div>

            <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Schedule ~</span> </p>
            <div class="d-flex justify-content-center">
                <div class="container row ">
                    <div class="col-md-3 m-1 col-1 card card-body bg-light text-secondary">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-clock-fill fs-1 me-3"></i>
                            <div class="">
                                <span class="fw-bold">09:00 AM </span> —
                                <span class="fw-bold"> 09:00 PM</span>
                                <div class="d-flex">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">
                                                <span class="fw-bold">{{ week.day }}</span>
                                                <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 m-1 card card-body bg-light text-secondary">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-clock-fill fs-1 me-3"></i>
                            <div class="">
                                <span class="fw-bold">09:00 AM </span> —
                                <span class="fw-bold"> 09:00 PM</span>
                                <div class="d-flex">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">
                                                <span class="fw-bold">{{ week.day }}</span>
                                                <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 m-1 col-1 card card-body bg-light text-secondary">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-clock-fill fs-1 me-3"></i>
                            <div class="">
                                <span class="fw-bold">09:00 AM </span> —
                                <span class="fw-bold"> 09:00 PM</span>
                                <div class="d-flex">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">
                                                <span class="fw-bold">{{ week.day }}</span>
                                                <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    components: { 
    },
    data() {
        return {
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-instagram fs-3',
                    name: 'Instagram',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/yourprofile'
                },
                {
                    icon: 'bi bi-telephone fs-3',
                    name: 'Call',
                    number: '+919999437620'
                },
                {
                    icon: 'bi bi-whatsapp fs-3',
                    name: 'Whatsapp',
                    number: '+919999437620',
                    message: 'Hello, I would like to inquire about'
                },
                {
                    icon: 'bi bi-envelope fs-3',
                    name: 'Mail',
                    email: 'support@machiddle.com',
                    subject: 'Inquiry',
                    body: 'Hello, I would like to inquire about...'

                },
                {
                    icon: 'bi bi-geo fs-3',
                    name: 'Location',
                    location: 'B-72/1, Pocket X, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020, India'
                },
            ],
            weeks: [
                { day: 'Mon' },
                { day: 'Tue' },
                { day: 'Wed' },
                { day: 'Thu' },
                { day: 'Fri' },
                { day: 'Sat' },
                { day: 'Sun' },
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>