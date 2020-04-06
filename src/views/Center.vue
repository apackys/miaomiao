<template>
    <div>
        <div>个人中心：</div>
        <div>当前用户：1111 <a >退出</a></div>
        <div v-if="1">用户身份：管理员 <a href="/admin" target="_blank">进入管理后台</a></div>
        <div v-else>用户身份：普通会员</div>
        <div>
            <input type="file" name="file" value="上传头像" @change="handleToUpload">
            <img class="userHead" src="111">
        </div>
    </div>
</template>

<script>

export default {
    name : 'center',
    
}
</script>

<style scoped>
.userHead{ width:100px; height:100px; border-radius: 50%; overflow: hidden;}
</style>
