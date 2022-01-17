<template>
  <div class="home">
    <div class="routerCut">
      <router-view></router-view>
    </div>
    <div class="navCut">
      <ul>
        <li @click="ToThisPath(item.path)" v-for="(item,index) in navlist" :key="index" :index="index">
          <span :class="{'ThisRouter': $route.meta.type === item.type}">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: '',
    data(){
      return {
        navlist:[
          {
            name:'教育信息化数据',
            type:'informationData',
            path:'/informationData',
          },
          {
            name:'教师教学数据',
            type:'teachingData',
            path:'/teachingData',
          },
          {
            name:'学生学习数据',
            type:'studyData',
            path:'/studyData',
          },
          {
            name:'设备应用数据',
            type:'appData',
            path:'/appData',
          },
        ]
      }
    },
    components: {},
    created(){},
    mounted(){},
    methods: {
      ToThisPath(item){
        console.log(item)
        this.$router.push({path:item})
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import './index.styl';
</style>
