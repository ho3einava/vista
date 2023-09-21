<template>
    <nav class="navbar">
        <div class="nav-items">
           <nuxt-link to="/"><img class="nav-logo" src="/Images/navbar/Icon.svg"></nuxt-link> 
            <li class="nav-item">معامله P2P</li>
            <li class="nav-item">معامله سریع</li>
            <li class="nav-item">ثبت درخواست معامله</li>
            <li class="nav-item">درباره ما</li>
            <li class="nav-item">تماس با ما</li>
            <li class="nav-item">وبلاگ</li>
        </div>
        <div class="buttons">
           <nuxt-link to="/login"><v-btn class="login-btn" variant="outlined">
                ورود
            </v-btn> </nuxt-link>
            <nuxt-link to="/signup">
                <v-btn class="signup-btn" variant="tonal">
                ثبت نام
            </v-btn>
            </nuxt-link>
        </div>
    </nav>
</template>





<style >
@import url('~/assets/css/navbar.css');
</style>