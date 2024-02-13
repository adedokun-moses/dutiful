<template>
    <div class="container-fluid">
        <headerNav></headerNav>
        <div class="row">
            <div class="col-sm-5 mx-auto mt-5 text-center info-tab">
                <div class="input-tab">
                    <input type="text" v-model="otpvalue">
                    <input type="text" v-model="otpvalue">
                    <input type="text" v-model="otpvalue">
                    <input type="text" v-model="otpvalue">
                </div>

                <p>Enter OTP code that was sent to your email,
                    <br>
                    segunsolaru@gmail.com.
                </p>
                <div class="form-group mt-5">
                    <button @click.prevent="confirmOTP()">Confirm OTP</button>
                </div>
                <p class="text-center pb-5 mt-2">Didn't get a code? <span style="color: #603F8B; cursor: pointer;"
                        @click="resendCODE()">
                        Resend</span>
                </p>

            </div>
        </div>
    </div>
    <footerTab></footerTab>
</template>
  
<script setup>
import headerNav from '@/components/navbar.vue'
import footerTab from '@/components/footertab.vue'
import { ref } from 'vue';
import router from '@/router';
const resendCODE = () => {
    alert('A new verification code has been sent to your mail')
    router.push('/otpsucc')
}
const otpvalue = ref('')
const confirmOTP = () => {

    if (otpvalue.value == "") {
        alert('Input the otp sent to your mail')
        return false
    } else {
        router.push('/reset')
    }
}

</script>
  
<style scoped>
.input-tab {
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
}

.input-tab input {
    border-radius: 10px;
    outline: none;
    padding: 10px;
    width: 75px;
    height: 75px;

    text-align: center;
    background: #B6B6E5;
    border: 2px solid grey;
}

.info-tab p {
    font-size: 16px;
    font-weight: 450;
}

.form-group button {
    background: #603F8B;
    width: 100%;
    color: #FFFFFF;
    padding: 15px;
    border-radius: 8px;
    outline: none;
    border: none;
}

@media only screen and (max-width: 600px) {
    .info-tab {
        margin-top: 80px !important;
    }

    .input-tab {
        display: flex;
        gap: 20px;
        width: 100%;
        margin: 40px auto;
        align-items: center;
        justify-content: center;
    }
}
</style>
  