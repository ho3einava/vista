<template>
    <div class="show-hide" id="show-eye"><i  class="bi bi-eye "></i></div>
</template>
<script>
  import {onMounted} from 'vue';
export default{
    setup(){
        onMounted(() =>{
const passFeild2 = document.getElementById('pass')
const showBtn2 = document.getElementById('show-eye')


showBtn2.addEventListener("click" , () =>{
    if(passFeild2.type === 'password'){
        passFeild2.type = 'text'
        showBtn2.classList.add('hide')
    }else{
        passFeild2.type = 'password'
        showBtn2.classList.remove('hide')
    }
})


        })


           
}

}
</script>

<style>
@import url('/assets/css/eyes.css');
</style>