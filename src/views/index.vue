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
.main {
  height: 100%;
  width: 100%;
  background: #eaedf1;
  display: flex;
  &__content {
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .content{
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
  }
}
</style>
