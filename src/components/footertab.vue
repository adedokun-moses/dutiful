<template>
    <footer>
        <div class="link-tab d-flex align-items-center justify-content-between m-0 p-0">
            <div class="footer-link m-0 p-0">
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div class="footer-link m-0 p-0">
                <h4>Quick Links</h4>
                <ul>
                    <li>Find services</li>
                    <li>Pricing and plans</li>
                    <li>List your business</li>
                </ul>
            </div>
            <div class="footer-link m-0 p-0">
                <h4>Resources</h4>
                <ul>

                    <li>Blog</li>
                    <li>Affliate program</li>

                </ul>
            </div>
            <div class="footer-link m-0 p-0">
                <h4>More from Dutiful</h4>
                <ul>
                    <li>Dutiful jobs</li>
                </ul>
            </div>


        </div>
        <div class="social-tab d-flex align-items-center justify-content-between ">
            <div>
                <span>Follow Us</span>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <div class="download-tab">
                <span>Download the app</span>
                <i class="fab fa-google-play"></i>
                <i class="fab fa-app-store"></i>
            </div>
        </div>
        <div class="privacy-tab  d-flex align-items-center">
            <h5>© 2022 Dutiful®</h5>
            <h5>Terms of Service</h5>
            <h5>Privacy policy</h5>
            <h5>Disclaimer</h5>
        </div>
    </footer>
</template>
<style scoped>
footer {
    margin: 0px !important;
    background: #532F82;
    padding: 30px 100px;
    color: white;
}

.footer-link {
    height: 180px;
}

.link-tab {
    border-bottom: 1px solid #B6B6E5;
}


.footer-link ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    padding-bottom: 50px !important;

}

.footer-link ul li {
    font-size: 15px !important;
    color: #B6B6E5 !important;
}

.footer-link li:nth-child(1) {
    font-size: 22px;
    font-weight: 500;
    color: white;
}

.footer-link li:nth-child(1) {
    margin-top: 20px;
}

.social-tab {
    margin: 30px 0px;
    padding-bottom: 30px;
    border-bottom: 1px solid #B6B6E5;
}

.privacy-tab {

    color: #B6B6E5;
    gap: 30px;
}

.privacy-tab h5 {
    font-size: 16px !important;
}

.social-tab i {
    margin: 0px 20px;
}

@media only screen and (max-width: 600px) {
    footer {
        padding: 30px 20px !important;
        color: white;
    }

    .footer-link {
        width: 100%;
        height: auto;
    }

    .link-tab, .social-tab, .privacy-tab  {
        flex-direction: column;
        justify-content: start;
    }
    .social-tab i {
    margin: 0px 15px;
}
.download-tab{
    margin-top: 10px;
}
}
</style>