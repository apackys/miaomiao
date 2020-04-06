<template>
    <header id="heads">
			<slot></slot><h1>{{title}}</h1>
	</header>
</template>
<script>
export default {
    name:'heads',
    props:{
        title:
        {
        type:String,
        default:'喵喵电影',
        },
    }
}
</script>
<style scoped>
#heads{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#heads h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#heads i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>