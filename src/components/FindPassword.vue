<template>
    <div class="password_body">
        <div class="password_email">
            邮箱：<input v-model="email" class="password_text" type="text"> <button @touchstart="handleToVerify">发送验证码</button>
        </div>
        <div>
            新密码：<input v-model="password" class="password_text" type="password">
        </div>
        <div>
            验证码：<input v-model="verify" class="password_text" type="text">
        </div>
        <div class="password_btn">
            <button @touchstart="handleToPassword">修改</button>
        </div>
        <div class="password_link">
            <router-link to="/mine/login">立即登录</router-link>
            <router-link to="/mine/register">立即注册</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
#content .password_body{  width:100%;}
.password_body .password_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.password_body .password_btn{ height:50px; margin:10px;}
.password_body .password_email{ position: relative;}
.password_body .password_email button{ position: absolute; right:10px; top:10px; height:30px; border-radius: 3px; border:none; padding:5px;}
.password_body .password_btn button{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.password_body .password_link{ display: flex; justify-content:space-between;}
.password_body .password_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>
