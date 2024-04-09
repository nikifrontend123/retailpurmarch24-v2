<template>
    <div>
    <ProfileNav></ProfileNav>
        <BillingAdd></BillingAdd>
    </div>
</template>

<script>
import BillingAdd from '@/components/profile/BillingAdd.vue';
import ProfileNav from '@/components/navbar/ProfileNav.vue';
export default {
    components:{
        BillingAdd, ProfileNav
    }

}
</script>

<style lang="scss" scoped></style>