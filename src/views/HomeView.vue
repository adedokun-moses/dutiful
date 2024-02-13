<template>
  <headerNav></headerNav>
  <div class="container-fluid ">
    <div class="row">

      <div class="col-sm-5 mx-auto mt-5 form-tab">
        <div class="header-info" style="text-align: left;">
          <p>Sign up for free <br> <span style="color: #603F8B; font-size: 36px; font-weight: 800;">Get Started</span></p>
        </div>

        <div>
          <ul class="nav nav-tabs mb-3 mt-5 justify-content-between " id="ex1" role="tablist">
            <li class="nav-item" role="presentation" style="position: relative;">
              <a class="nav-link active" id="ex1-tab-1" data-bs-toggle="tab" href="#ex1-tabs-1" role="tab"
                aria-controls="ex1-tabs-1" aria-selected="true">
                <i class="fa fa-user"></i> <span style="margin-left: 15px;">Regular user</span>
              </a>
            </li>
            <li class="nav-item" role="presentation" style="position: relative;">
              <a class="nav-link" id="ex1-tab-2" data-bs-toggle="tab" href="#ex1-tabs-2" role="tab"
                aria-controls="ex1-tabs-2" aria-selected="false"><i class="fa fa-gift"></i> <span
                  style="margin-left: 15px;">Service provider</span>
              </a>
            </li>

          </ul>
        </div>

        <div class="tab-content" id="ex1-content">
          <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
            <form>
              <div class="form-group mt-5">
                <label>Full name</label><br>
                <input type="text">
              </div>
              <div class="form-group mt-3">
                <label>Email</label><br>
                <input type="text">
              </div>
              <div class="form-group mt-3">
                <label>Phone number</label><br>
                <input type="text">
              </div>
              <div class="form-group mt-3 password-container">
                <label>Password</label><br>
                <input type="password">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.2877 4.00494L12.0015 4.00012C7.86059 4.00012 4.12877 6.9232 2.06043 11.706C1.97921 11.8938 1.97921 12.1065 2.06043 12.2943L2.20375 12.6169C4.24589 17.0933 7.77495 19.8645 11.7113 19.9953L11.9975 20.0001C16.1384 20.0001 19.8702 17.077 21.9386 12.2943C22.0208 12.1041 22.0198 11.8885 21.9356 11.6992L21.7964 11.3858C19.7492 6.90103 16.2187 4.13559 12.2877 4.00494ZM12.0085 5.48955L12.2475 5.49469L12.5145 5.50858C15.7117 5.73497 18.6521 8.10566 20.4285 11.9992L20.4192 12.0233C18.5982 16.0006 15.5564 18.3854 12.2584 18.5051L12.0035 18.5089L11.7464 18.5055L11.4801 18.4916C8.38223 18.2722 5.52589 16.0345 3.73866 12.3598L3.56951 11.9992L3.72609 11.6663C5.61069 7.77328 8.69099 5.4904 12.0085 5.48955ZM11.9988 8.11363C9.83839 8.11363 8.08779 9.8533 8.08779 12.0004C8.08779 14.1466 9.83858 15.8861 11.9988 15.8861C14.1591 15.8861 15.9108 14.1465 15.9108 12.0004C15.9108 9.85341 14.1593 8.11363 11.9988 8.11363ZM11.9986 9.60391C13.3308 9.60391 14.4106 10.6765 14.4106 12.0003C14.4106 13.3233 13.3307 14.3958 11.9986 14.3958C10.6669 14.3958 9.58764 13.3235 9.58764 12.0003C9.58764 10.6763 10.6667 9.60391 11.9986 9.60391Z"
                    fill="#A16AE8" />
                </svg>

              </div>

              <div class="form-group mt-3 password-container">
                <label>Password</label><br>
                <input type="password">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.2877 4.00494L12.0015 4.00012C7.86059 4.00012 4.12877 6.9232 2.06043 11.706C1.97921 11.8938 1.97921 12.1065 2.06043 12.2943L2.20375 12.6169C4.24589 17.0933 7.77495 19.8645 11.7113 19.9953L11.9975 20.0001C16.1384 20.0001 19.8702 17.077 21.9386 12.2943C22.0208 12.1041 22.0198 11.8885 21.9356 11.6992L21.7964 11.3858C19.7492 6.90103 16.2187 4.13559 12.2877 4.00494ZM12.0085 5.48955L12.2475 5.49469L12.5145 5.50858C15.7117 5.73497 18.6521 8.10566 20.4285 11.9992L20.4192 12.0233C18.5982 16.0006 15.5564 18.3854 12.2584 18.5051L12.0035 18.5089L11.7464 18.5055L11.4801 18.4916C8.38223 18.2722 5.52589 16.0345 3.73866 12.3598L3.56951 11.9992L3.72609 11.6663C5.61069 7.77328 8.69099 5.4904 12.0085 5.48955ZM11.9988 8.11363C9.83839 8.11363 8.08779 9.8533 8.08779 12.0004C8.08779 14.1466 9.83858 15.8861 11.9988 15.8861C14.1591 15.8861 15.9108 14.1465 15.9108 12.0004C15.9108 9.85341 14.1593 8.11363 11.9988 8.11363ZM11.9986 9.60391C13.3308 9.60391 14.4106 10.6765 14.4106 12.0003C14.4106 13.3233 13.3307 14.3958 11.9986 14.3958C10.6669 14.3958 9.58764 13.3235 9.58764 12.0003C9.58764 10.6763 10.6667 9.60391 11.9986 9.60391Z"
                    fill="#A16AE8" />
                </svg>

              </div>

              <input type="checkbox" id="terms" name="terms" value="terms" class="mt-4 pr-5">
              <label for="terms" style="margin-left: 10px; font-weight: 450;">
                I agree to Dutiful’s <span style="color: #603F8B; cursor: pointer;">terms and
                  conditions</span></label><br>

              <div class="form-group mt-5 pb-3 ">
                <button>Sign Up</button>
              </div>
              <p class="text-center pb-5">Already have an account? <router-link to="/login"> <span
                    style="color: #603F8B; cursor: pointer;">Login</span></router-link>
              </p>



            </form>
          </div>
          <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
            <form>
              <div class="form-group mt-5">
                <label>Full name</label><br>
                <input type="text">
              </div>
              <div class="form-group mt-3">
                <label>Email</label><br>
                <input type="text">
              </div>
              <div class="form-group mt-3">
                <label>Phone number</label><br>
                <input type="text">
              </div>
              <div class="form-group mt-3 password-container">
                <label>Password</label><br>
                <input type="password">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.2877 4.00494L12.0015 4.00012C7.86059 4.00012 4.12877 6.9232 2.06043 11.706C1.97921 11.8938 1.97921 12.1065 2.06043 12.2943L2.20375 12.6169C4.24589 17.0933 7.77495 19.8645 11.7113 19.9953L11.9975 20.0001C16.1384 20.0001 19.8702 17.077 21.9386 12.2943C22.0208 12.1041 22.0198 11.8885 21.9356 11.6992L21.7964 11.3858C19.7492 6.90103 16.2187 4.13559 12.2877 4.00494ZM12.0085 5.48955L12.2475 5.49469L12.5145 5.50858C15.7117 5.73497 18.6521 8.10566 20.4285 11.9992L20.4192 12.0233C18.5982 16.0006 15.5564 18.3854 12.2584 18.5051L12.0035 18.5089L11.7464 18.5055L11.4801 18.4916C8.38223 18.2722 5.52589 16.0345 3.73866 12.3598L3.56951 11.9992L3.72609 11.6663C5.61069 7.77328 8.69099 5.4904 12.0085 5.48955ZM11.9988 8.11363C9.83839 8.11363 8.08779 9.8533 8.08779 12.0004C8.08779 14.1466 9.83858 15.8861 11.9988 15.8861C14.1591 15.8861 15.9108 14.1465 15.9108 12.0004C15.9108 9.85341 14.1593 8.11363 11.9988 8.11363ZM11.9986 9.60391C13.3308 9.60391 14.4106 10.6765 14.4106 12.0003C14.4106 13.3233 13.3307 14.3958 11.9986 14.3958C10.6669 14.3958 9.58764 13.3235 9.58764 12.0003C9.58764 10.6763 10.6667 9.60391 11.9986 9.60391Z"
                    fill="#A16AE8" />
                </svg>

              </div>

              <div class="form-group mt-3 password-container">
                <label>Password</label><br>
                <input type="password">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.2877 4.00494L12.0015 4.00012C7.86059 4.00012 4.12877 6.9232 2.06043 11.706C1.97921 11.8938 1.97921 12.1065 2.06043 12.2943L2.20375 12.6169C4.24589 17.0933 7.77495 19.8645 11.7113 19.9953L11.9975 20.0001C16.1384 20.0001 19.8702 17.077 21.9386 12.2943C22.0208 12.1041 22.0198 11.8885 21.9356 11.6992L21.7964 11.3858C19.7492 6.90103 16.2187 4.13559 12.2877 4.00494ZM12.0085 5.48955L12.2475 5.49469L12.5145 5.50858C15.7117 5.73497 18.6521 8.10566 20.4285 11.9992L20.4192 12.0233C18.5982 16.0006 15.5564 18.3854 12.2584 18.5051L12.0035 18.5089L11.7464 18.5055L11.4801 18.4916C8.38223 18.2722 5.52589 16.0345 3.73866 12.3598L3.56951 11.9992L3.72609 11.6663C5.61069 7.77328 8.69099 5.4904 12.0085 5.48955ZM11.9988 8.11363C9.83839 8.11363 8.08779 9.8533 8.08779 12.0004C8.08779 14.1466 9.83858 15.8861 11.9988 15.8861C14.1591 15.8861 15.9108 14.1465 15.9108 12.0004C15.9108 9.85341 14.1593 8.11363 11.9988 8.11363ZM11.9986 9.60391C13.3308 9.60391 14.4106 10.6765 14.4106 12.0003C14.4106 13.3233 13.3307 14.3958 11.9986 14.3958C10.6669 14.3958 9.58764 13.3235 9.58764 12.0003C9.58764 10.6763 10.6667 9.60391 11.9986 9.60391Z"
                    fill="#A16AE8" />
                </svg>

              </div>

              <input type="checkbox" id="terms" name="terms" value="terms" class="mt-4 pr-5">
              <label for="terms" style="margin-left: 10px; font-weight: 450;">
                I agree to Dutiful’s <span style="color: #603F8B; cursor: pointer;">terms and
                  conditions</span></label><br>

              <div class="form-group mt-5 pb-3 ">
                <button>Sign Up</button>
              </div>

              <p class="text-center pb-5">Already have an account? <router-link to="/login"> <span
                    style="color: #603F8B; cursor: pointer;">Login</span></router-link>

              </p>



            </form>
          </div>
        </div>

      </div>

    </div>
  </div>
  <footerNAV></footerNAV>
</template>

<script setup>
import headerNav from '@/components/navbar.vue';
import footerNAV from '@/components/footertab.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'


</script>

<style scoped>
.nav-tabs {
  border: none !important;
  outline: none !important;
  background: none !important;
  --bs-nav-tabs-border-radius: none !important;
  --bs-nav-tabs-border-width: none !important;
  display: flex;
  gap: 10px;

}

.nav-tabs li {
  width: 45%;
  line-height: 21px;
  font-size: 20px;

}

.nav-tabs li .nav-link {
  padding: 15px 20px !important;
  color: #A5A5A5;
  background: none !important;
  border: 1px solid grey;
  border-radius: 10px;
}

.nav-tabs li .nav-link.focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  padding: 15px 20px !important;
  border-radius: 10px;
}

.nav-tabs .nav-link.active {
  border: 1px solid #603F8B;
  box-shadow: none;
  color: #121212;
  padding: 15px 20px !important;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
}

.nav-tabs .nav-link.active::after {
  content: '\2714';
  position: absolute;
  top: -70%;
  right: -10%;
  color: white !important;
  background: #603F8B;
  border-radius: 50%;
  padding: 10px;
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
  .header-info {
    margin-top: 30px;
  }

  .nav-tabs .nav-link.active::after {
    top: -61%;
    right: -6%;
    border-radius: 50%;
    padding: 10px;
  }

  .nav-tabs li .nav-link,
  .nav-tabs .nav-link.active,
  .nav-tabs li .nav-link.focus {
    font-size: 15px;
    padding: 10px 10px !important;
    border-radius: 5px;
  }
}</style>
