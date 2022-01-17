<template>
  <el-container class="main">
    <!-- 左侧导航栏 -->
    <Nav v-show="!navMask.includes($route.name) "/>
    <el-container class="content">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </el-container>
   
  </el-container>

</template>

<script>
import Nav from "@/components/Nav/index.vue";

export default {
  components: {
    Nav,
  },
  data(){
    return{
      navMask:['watchCenter']
    }
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
