<template>
  <div class="mine">
    <Header  title="个人中心"/>
   	   <keep-alive>
                    <router-view />
        </keep-alive>
    <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'mine',
  components:{
    Header,
    TabBar,
  }

}
</script>

<style scoped>

</style>