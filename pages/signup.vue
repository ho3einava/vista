<template>
    <navbar />
    <div class="contianer-login">
          <vector />
        <div class="login">
            <div class="border-login">
                <div class="form-login">
                    <div class="form-title">ثبت نام</div>
                    <div class="inputs">
                        <input type="text" class="form-input" placeholder="آدرس ایمیل">
                        <img class="input-svg" src="/Images/login/email.svg">
                    </div>
                    <div class="inputs">
                        <input type="password" id="pass" class="form-input" placeholder="رمز عبور">
                        <img class="input-svg" src="/Images/login/lock.svg">
                       <eyes />
                    </div>
                    <div class="forget-pass"><input type="checkbox" checked> قوانین و مقررات سایت را می پذیرم </div>
                    <div class="inputs">
                        <input type="number" class="form-input" placeholder="کد دعوت (اختیاری)">
                        <img class="input-svg" src="/Images/login/Invitation.svg">
                    </div>
                    <v-btn class="form-btn" variant="tonal">
                         ثبت نام
                    </v-btn>
                    <div class="google-btn">
                        <img class="google-icon" src="/Images/login/google.svg">
                        <h3 class="google-text"> ثبت نام با حساب گوگل </h3>
                    </div>
                    <div class="form-singup"><span class="signup-text">حساب کاربری دارید؟</span> <span class="signup-link">ورود</span></div> 
                </div>
            </div>
            <div class="login-img">
                <div class="vector1"><img src="/Images/login/vector/Vector1.svg"></div>
                <div class="vector2"><img src="/Images/login/vector/Vector2.svg"></div>
                <div class="vector3"><img src="/Images/login/vector/Vector3.svg"></div>
                <div class="vector4"><img src="/Images/login/vector/Vector4.svg"></div>
                <div class="vector5"><img src="/Images/login/vector/Vector5.svg"></div>
                <div class="form-icon"><img src="/Images/login/Icon.svg"></div>
            </div>
        </div>
    </div>
    <footer-web />
</template>

<style>
@import url('/assets/css/signup.css');
</style>