<template>
  <el-aside width="206px" class="nav">
    <img src="@/assets/img/logo.png" alt="" class="nav__logo">
    <el-menu 
      @select="select"
      :default-active="$route.name"
      background-color="#0d2b49"
      text-color="#d2d2d2"
      unique-opened
      class="nav__menu"
    > 
      <component 
        v-for="menu in menus" 
        :key="menu.index" 
        :is="changeTag(menu.child)"
        :index="menu.index"
      >
        <template slot="title">
          <span class="nav__menu__icon" :style="{marginRight: lang ==  'en-US' ? '0' :'15px' }"><img :src="require(`@/assets/img/${menu.imgSrc}`)" alt=""></span>
          <span class="nav__menu__title"> {{$menu.title}}</span>
        </template>
        <template v-if="menu.child">
          <el-menu-item 
            v-for="submenu in menu.child" 
            :key="submenu.index"
            :index="submenu.index"
            class="subItem"
          >
            {{submenu.title}}
          </el-menu-item>
        </template>
        
      </component>

    </el-menu>
  </el-aside>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components:{
    
  },
  data() {
    return {
      menus:[{
        title:'导航栏1',
        imgSrc:'monicenter.png',
        index:'monitorCenter'
      },{
        title:'导航栏2',
        imgSrc:'report.png',
        index:'reportCenter',
        child:[
        {
          title:'leftContent22',
          index:'commandHistory'
        },
        {
          title:'leftContent23',
          index:'alarmReport'
        },
        {
          title:'leftContent25',
          index:'historyReport'
        }]
      }]
    };
  },

  computed: {
  },
  watch: {
    
  },
  mounted(){

  },
  methods: {
    select(item){
      this.$router.push({name:item})
    },
    changeTag(item){
      return item ? 'ElSubmenu' : 'ElMenuItem' 
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .el-menu{
  border-right: 0px;
}
::v-deep .el-submenu__icon-arrow{
  font-size: 20px;
}
::v-deep .el-submenu__title{
  height: 55px;
  line-height: 55px;
}
.el-menu-item{
  height: 40px;
  line-height: 40px;
  margin: 10px 0;
  font-size: 16px;
}
.subItem{
    display: flex;
    justify-content: center;
    background-color: #003b71 !important;
    margin: 0;
    height: 45px;
    line-height: 45px;
  }
.is-active{
  background: linear-gradient(314deg,#56c271 3%, #93d500) !important;
  color: #ffffff !important;
  border-radius: 4px;
}
.nav{
  background: #0d2b49;
  &__logo{
    margin-top: 20px;
    margin-left: 55px;
    width: 120px;
    height: 37px;
  }
  &__menu{
    margin-top: 20px;
    // padding: 0 12px;
    &__icon{
      display: inline-block;
      width: 25px;
      
    }
    &__title{
      font-size: 16px;

    }
  }
}
.icon{
  width: 22px;
  height: 21px;
}
</style>
