<template>
    <div class="container-fluid">
        <headerNav></headerNav>
        <div class="row">
            <div class="col-sm-5 mx-auto mt-5 top-info">
                <div class="arrow-back" @click="backToLog()">
                    <i class="fa fa-arrow-left"></i>
                </div>
                <div class="header-info"> <span style="color: #603F8B; font-size: 36px; font-weight: 800;">Forgot Password
                    </span> <br>
                    <p>Enter your email and well send you a mail on how to reset your <br>
                        password.</p>
                </div>

                <form>
            
                    <div class="form-group mt-5 password-container">
                        <label>Email</label><br>
                        <input type="password">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.2677 9.06116L13.0023 12.4954C12.1951 13.1283 11.0635 13.1283 10.2563 12.4954L5.95422 9.06116"
                                stroke="#A16AE8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z"
                                stroke="#A16AE8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>

                    <div class="form-group mt-5 pb-3 ">
                        <button @click.prevent="sendOTP()">Send email</button>
                    </div>

                    <p class="text-center pb-5">Or<router-link to="/login"> <span
                                style="color: #603F8B; cursor: pointer;"> Login</span></router-link>
                    </p>



                </form>


            </div>
        </div>
    </div>
    <footerNav></footerNav>
</template>
  
<script setup >
import headerNav from '@/components/navbar.vue'
import footerNav from '@/components/footertab.vue'
import router from '@/router';
const backToLog = () =>{
 router.push('/login')
}

const sendOTP = () => {
    router.push('/otpsucc')
}

</script>
  
<style scoped>
.arrow-back{
    cursor: pointer;
}
.arrow-back i{
    background: #E5E7EA;
    padding: 10px;
    border-radius: 30px;
    margin-bottom: 30px;
    color: #603F8B;
}

.form-group label {
    color: #603F8B;
    font-weight: 700;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    outline: none;
    border: 2px solid #E7EAF1;
    margin-top: 10px;
    background: #E7EAF1;
}

.password-container {
    position: relative;
}

.form-group svg {
    position: absolute;
    top: 58%;
    right: 4%;
    cursor: pointer;
    color: #603F8B;
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
    .top-info {
        margin-top: 80px !important;
    }
}

</style>
  