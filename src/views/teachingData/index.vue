<template>
  <div class="teaching">
    <div class="view_left">
      <h2 style="margin-bottom: 3rem;">在线备课</h2>
      <div class="resource">
        <h3>资源</h3>
        <div style="margin-top: 48px;">
          <div class="number">
            <span class="title">今日新增</span>
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.resources.This_day' :duration='duration'></countTo>
            <span class="subunit">&nbsp;个</span>
          </div>
          <div class="number">
            <span class="title">累计</span>
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.resources.max' :duration='duration'></countTo>
            <span class="subunit">&nbsp;个</span>
          </div>
          <p class="titlea" style="text-align:right;margin-bottom:2.75rem;">总数（个）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <!-- 总数 横向柱状图 -->
          <div class="view_pic_left" ref="view_pic_left"></div>
          <p class="titlea">试题</p>
          <div class="pic">
            <div class="pci_num">
              <div class="number">
                <span class="title">今日新增</span>
                <countTo class="figure" :startVal='startVal' :endVal='formData.left.TestQuestions.This_day' :duration='duration'></countTo>
                <span class="subunit">&nbsp;道</span>
              </div>
              <div class="number">
                <span class="title">累计</span>
                <countTo class="figure" :startVal='startVal' :endVal='formData.left.TestQuestions.max' :duration='duration'></countTo>
                <span class="subunit">&nbsp;道</span>
              </div>
            </div>
            <div class="view_pic" ref="view_pic"></div>
          </div>
          <p class="titlea">微课</p>
          <div class="pic">
            <div class="pci_num">
              <div class="number">
                <span class="title">今日新增</span>
                <countTo class="figure" :startVal='startVal' :endVal='formData.left.SmallClass.This_day' :duration='duration'></countTo>
                <span class="subunit">&nbsp;节</span>
              </div>
              <div class="number">
                <span class="title">累计</span>
                <countTo class="figure" :startVal='startVal' :endVal='formData.left.SmallClass.max' :duration='duration'></countTo>
                <span class="subunit">&nbsp;节</span>
              </div>
            </div>
            <div class="view_pic" ref="view_pica"></div>
          </div>
          <p class="titlea">任务</p>
          <div class="pic">
            <div class="pci_num">
              <div class="number">
                <span class="title">今日新增</span>
                <countTo class="figure" :startVal='startVal' :endVal='formData.left.task.This_day' :duration='duration'></countTo>
                <span class="subunit">&nbsp;次</span>
              </div>
              <div class="number">
                <span class="title">累计</span>
                <countTo class="figure" :startVal='startVal' :endVal='formData.left.task.max' :duration='duration'></countTo>
                <span class="subunit">&nbsp;次</span>
              </div>
            </div>
            <div class="view_pic" ref="view_picb"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="view_center">
      <div class="center_top">
        <div class="top_sonDom_left">
          <h2 style="margin-bottom: 2.5rem;">互动教学</h2>
          <div class="minSonDom">
            <div class="leftNumber">
              <div>
                <countTo class="figure" :startVal='startVal' :endVal='formData.center.InteractiveTeaching.This_day' :duration='duration'></countTo>
                <p class="subunit distance">今日新增 （个）</p>
              </div><!-- 
              --><div>
                <countTo class="figure" :startVal='startVal' :endVal='formData.center.InteractiveTeaching.max' :duration='duration'></countTo>
                <p class="subunit">累计（个）</p>
              </div>
            </div>
          </div>
        </div><!-- 
         --><div class="top_sonDom_left" style="margin-right: 0;">
          <h2 style="margin-bottom: 2.5rem;">出题答题</h2>
          <div class="minSonDom">
            <div class="leftNumber">
              <div>
                <countTo class="figure" :startVal='startVal' :endVal='formData.center.WriteTheAnswer.This_day' :duration='duration'></countTo>
                <p class="subunit distance">今日新增 （道）</p>
              </div><!-- 
              --><div>
                <countTo class="figure" :startVal='startVal' :endVal='formData.center.WriteTheAnswer.max' :duration='duration'></countTo>
                <p class="subunit">累计（道）</p>
              </div>
            </div>
          </div>
        </div>
        <p class="titlea" style="margin-bottom: 2rem;">互动工具使用情况</p>
        <div class="top_viewEchr ac" ref="top_viewEchr_Bir"></div><!-- 
        --><div class="top_viewEchr ab" ref="top_viewEchr_Pic"></div>
      </div>
      <div class="center_bottom">
        <h2 style="margin-bottom: 1.875rem;">教研</h2>
        <div class="View_line" ref="View_line"></div>
        <div class="bottom_SonDom">
          <p class="titlea">教研活动</p>
          <div class="SonView_pic" ref="SonView_pic"></div>
        </div>
        <div class="bottom_SonDomYes" style="margin-right: 4.5rem;">
          <p class="titlea">评比活动</p>
          <div class="bordercla"></div>
          <ul>
            <li v-for="(item,index) in formData.center.comparison.numlist">
              <span class="title">{{item.name}}</span>
              <span class="numb">
                累计<countTo :startVal='startVal' :endVal='item.num' :duration='duration'></countTo>个
              </span>
            </li>
          </ul>
        </div>
        <div class="bottom_SonDomYes">
          <p class="titlea">在线听评课</p>
          <div class="bordercla"></div>
          <ul>
            <ul>
              <li v-for="(item,index) in formData.center.ListenToClassEvaluationOnline.numlist">
                <span class="title">{{item.name}}</span>
                <span class="numb">
                  累计<countTo :startVal='startVal' :endVal='item.num' :duration='duration'></countTo>个
                </span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
    <div class="view_right">
      <div class="right_top_Dom">
        <h2 style="margin-bottom: 5.625rem;">课程</h2>
        <div class="view_right_son">
          <div class="son">
            <h2 style="margin-bottom: 2.75rem;">{{formData.right.course.SchoolNumber.name}}</h2>
            <span class="right_num_dom" v-for="(item,index) in formData.right.course.SchoolNumber.numlist" :key="index+'a'">
              <countTo class="figure_two" :startVal='startVal' :endVal='item.num' :duration='duration'></countTo>
              <span class="subunit">{{item.name}}</span>
            </span>
          </div>
          <div class="son">
            <h2 style="margin-bottom: 2.75rem;margin-top: 3.625rem;">{{formData.right.course.TheSchoolCurriculum.name}}</h2>
            <span class="right_num_dom" v-for="(item,index) in formData.right.course.TheSchoolCurriculum.numlist" :key="index+'b'">
              <countTo class="figure_two" :startVal='startVal' :endVal='item.num' :duration='duration'></countTo>
              <span class="subunit">{{item.name}}</span>
            </span>
          </div>
        </div>
        <div class="borda"></div>
        <div class="borda_cross"></div>
        <div class="view_right_son">
          <div class="son">
            <h2 style="margin-bottom: 2.75rem;">{{formData.right.course.LiveCourses.name}}</h2>
            <span class="right_num_dom" v-for="(item,index) in formData.right.course.LiveCourses.numlist" :key="index+'b'">
              <countTo class="figure_two" :startVal='startVal' :endVal='item.num' :duration='duration'></countTo>
              <span class="subunit">{{item.name}}</span>
            </span>
          </div>
          <div class="son">
            <h2 style="margin-bottom: 2.75rem;margin-top: 3.625rem;">{{formData.right.course.traffic.name}}</h2>
            <span class="right_num_dom" v-for="(item,index) in formData.right.course.traffic.numlist" :key="index+'b'">
              <countTo class="figure_two" :startVal='startVal' :endVal='item.num' :duration='duration'></countTo>
              <span class="subunit">{{item.name}}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="right_center_Dom">
        <h2 style="margin-bottom: .875rem;">课程浏览量</h2>
        <!-- right_View_line -->
        <div class="right_View_line" ref="right_View_line"></div>
      </div>
      <div class="right_bottom_Dom">
        <h2 style="margin-bottom: .875rem;">课程学习时长</h2>
        <div class="right_View_line" ref="right_View_linea"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import countTo from 'vue-count-to'
  import {getTeacher} from '@/api/hom.js'
  import {oneORtwo,zeroORtwo} from '@/utils/value.js'
  export default {
    name: '',
    data() {
      return {
        // 需要滚动的时间
        duration: 5000,
        // 初始值
        startVal: 0,
        // 最终值
        endVal: 2018,
        formData:{},
        timr:null,
        timra:null,
        timrb:null,
        
      }
    },

    components: {
      countTo
    },
    created() { 
    },
    mounted() {
      if(localStorage.data2 && localStorage.data2 != 'undefined'){
        this.formData = JSON.parse(localStorage.data2);
        this.datafom();
        this.timr = setInterval(()=>{
          this.timefunction();
        },3600000);//3600000
      }else{
        clearInterval(this.timr);
        this.getViewData(0)
      }
    },
    methods: {
      // 生成随机数
      // getrandom(start, end){
      //   return Math.floor(Math.random() * (end - start) + start)
      // },
      // 获取数据
      getViewData(data){
        getTeacher(data).then(res => {
          let add = JSON.stringify(res)
          this.formData = JSON.parse(add).data;
          localStorage.data2 = JSON.stringify(this.formData);
          // console.log(this.formData)
          this.$nextTick(() => {
            this.view_pic_left(this.formData.left.resources.proportion);//横向柱状图
            this.left_Pic_view(this.formData.left.TestQuestions.proportion);//左侧试题-饼图
            this.left_Pic_viewa(this.formData.left.SmallClass.proportion);//左侧微课-饼图
            this.left_Pic_viewb(this.formData.left.task.proportion);//左侧任务-饼图
            this.center_bir_view(this.formData.center.TheColumnChart.proportion);// 中间 柱图
            this.center_pic_view(this.formData.center.ThePieChart.proportion);// 中间 饼图
            this.cemter_line_view(this.formData.center.TeachingAndResearch);// 中间 折线图
            this.centerBottomSonView_pic(this.formData.center.ResearchActivity.proportion);// 中间 饼图
            this.right_line_view(this.formData.right.CoursePageViews);// 游览次数
            this.right_line_viewtwo(this.formData.right.DurationOfStudy);// 学习时长对比
          })
          this.timr = setInterval(()=>{
            this.timefunction();
          },3600000);//3600000
        })
      },
      datafom(){
        this.$nextTick(() => {
          this.view_pic_left(this.formData.left.resources.proportion);//横向柱状图
          this.left_Pic_view(this.formData.left.TestQuestions.proportion);//左侧试题-饼图
          this.left_Pic_viewa(this.formData.left.SmallClass.proportion);//左侧微课-饼图
          this.left_Pic_viewb(this.formData.left.task.proportion);//左侧任务-饼图
          this.center_bir_view(this.formData.center.TheColumnChart.proportion);// 中间 柱图
          this.center_pic_view(this.formData.center.ThePieChart.proportion);// 中间 饼图
          this.cemter_line_view(this.formData.center.TeachingAndResearch);// 中间 折线图
          this.centerBottomSonView_pic(this.formData.center.ResearchActivity.proportion);// 中间 饼图
          this.right_line_view(this.formData.right.CoursePageViews);// 游览次数
          this.right_line_viewtwo(this.formData.right.DurationOfStudy);// 学习时长对比
        })
      },
      timefunction(){
        let data = this.formData;
        // 资源
        data.left.resources.This_day = data.left.resources.This_day + oneORtwo();
        data.left.resources.max = data.left.resources.max + oneORtwo();
        // data.left.resources.proportion.forEach(item => {
        //   item.num + oneORtwo();
        // })
        // 试题
        data.left.TestQuestions.This_day = data.left.TestQuestions.This_day + oneORtwo();
        data.left.TestQuestions.max = data.left.TestQuestions.max + oneORtwo();
        // 微课
        data.left.SmallClass.This_day = data.left.SmallClass.This_day + oneORtwo();
        data.left.SmallClass.max = data.left.SmallClass.max + oneORtwo();
        // 任务
        data.left.task.This_day = data.left.task.This_day + oneORtwo();
        data.left.task.max = data.left.task.max + oneORtwo();
        //互动教学
        data.center.InteractiveTeaching.This_day = data.center.InteractiveTeaching.This_day + oneORtwo();
        data.center.InteractiveTeaching.max = data.center.InteractiveTeaching.max + oneORtwo();
        //出题答题
        data.center.WriteTheAnswer.This_day = data.center.WriteTheAnswer.This_day + oneORtwo();
        data.center.WriteTheAnswer.max = data.center.WriteTheAnswer.max + oneORtwo();
        //互动工具使用情况
        // data.center.TheColumnChart.proportion.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // //教研
        // data.center.TeachingAndResearch.TeachingAndResearchSection.proportion.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // //评比活动
        // data.center.comparison.numlist.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // //在线听评课
        // data.center.ListenToClassEvaluationOnline.numlist.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // //课程
        // data.right.course.SchoolNumber.numlist.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // data.right.course.LiveCourses.numlist.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // data.right.course.TheSchoolCurriculum.numlist.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // data.right.course.traffic.numlist.forEach(item => {
        //   item.num += oneORtwo();
        // });
        //课程预览量
        // data.right.CoursePageViews.LiveCourses.proportion.forEach(item => {
        //   if(item.num !== null){
        //     item.num += oneORtwo();
        //   }
        // });
        // data.right.CoursePageViews.Learningcourses.proportion.forEach(item => {
        //   if(item.num !== null){
        //     item.num += oneORtwo();
        //   }
        // });
        // //课程学习时长
        // data.right.DurationOfStudy.LiveCourses.proportion.forEach(item => {
        //   if(item.num !== null){
        //     item.num += oneORtwo();
        //   }
        // });
        // data.right.DurationOfStudy.Learningcourses.proportion.forEach(item => {
        //   if(item.num !== null){
        //     item.num += oneORtwo();
        //   }
        // });
        localStorage.data2 = JSON.stringify(data)
        // console.log(data.right)
        this.$nextTick(() => {
          this.view_pic_left(data.left.resources.proportion);//横向柱状图
          this.left_Pic_view(data.left.TestQuestions.proportion);//左侧试题-饼图
          this.left_Pic_viewa(data.left.SmallClass.proportion);//左侧微课-饼图
          this.left_Pic_viewb(data.left.task.proportion);//左侧任务-饼图
          this.center_bir_view(data.center.TheColumnChart.proportion);// 中间 柱图
          this.center_pic_view(data.center.ThePieChart.proportion);// 中间 饼图
          this.cemter_line_view(data.center.TeachingAndResearch);// 中间 折线图
          this.centerBottomSonView_pic(data.center.ResearchActivity.proportion);// 中间 饼图
          this.right_line_view(data.right.CoursePageViews);// 游览次数
          this.right_line_viewtwo(data.right.DurationOfStudy);// 学习时长对比
        })
      },
     // 横向柱状图
      view_pic_left(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push(item.num);
          yLabel.push(item.name);
        })
        let bgData = [];
        for (let i in yData) {
          bgData.push(2000)
        }
        let col = this.$refs.view_pic_left;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          grid: {
            left: '0%',
            right: '5%',
            bottom: '5%',
            top: '0%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
            formatter: function (params) {
              return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + params[0].value + ' <br/>'
            }
          },
          xAxis: {
            show: false,
            type: 'value'
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              margin: 15,
              textStyle: {
                color: '#6A7088',
                fontSize: 24,
                fontFamily: 'PingFangSC-Regular, PingFang SC'
              },
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: yLabel
          }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#B4BFEB',
                fontSize: 24
              },
            },
            data: yData
          }],
          series: [{
            name: '人数',
            type: 'bar',
            zlevel: 1,
            backgroundStyle: {
              color: 'red',
              barBorderRadius: 30
            },
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 30, 30],
                color: function (params) {
                  let colorList = [
                    '#00B0AE', '#74B9E7', '#C9B900', '#4666B6', '#3084CE', '#70AC45', '#00EAFF', '#D65B8C', '#AC4545', '#00FF68', '#9F5BD6', '#A9BC00', '#5BA296', '#A29022', '#CB874A', '#B0A276', '#594FE4', '#BD6A92', '#7169AF', '#70A229'
                  ]
                  return colorList[params.dataIndex];
                },
                shadowBlur: 0,
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: 'rgba(87,220,222,0.7)'
              },
            },
            barWidth: 24,
            data: yData
          }
          ]
        })
      },
      //左侧试题-饼图
      left_Pic_view(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.view_pic;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          grid: {
            left: '0%',
            right: '0%',
            bottom: '10%',
            top: '0%',
            containLabel: true
          },
          tooltip: {
            trigger: 'item'
          },
          legend: [
            {
              icon: 'rect',
              bottom: '10%',
              left: 'center',
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 14,
              textStyle:{
                fontSize: 20,//字体大小
                color: '#6A7088',//字体颜色
              },
              data:['小学','初中','高中']
            },{
              icon: 'rect',
              bottom: '0%',
              left: 'center',
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 14,
              textStyle:{
                fontSize: 20,//字体大小
                color: '#6A7088',//字体颜色
              },
              data:['大学','其他']
            }
          ],
          series: [
            {
              type: 'pie',
              radius: ['0%', '70%'],
              center: ["50%", "40%"], 
              avoidLabelOverlap: false,
              color: ['#197FDF', '#15AAAC', '#5E77DF','#2CAA54','#DDC04C'], //'#FBFE27','rgb(11,228,96)','#FE5050'
              itemStyle: {
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {// 饼图中心显示当前模块数据类型名称
                  show: false,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: yData
            }
          ]
        })
      },
      //左侧微课-饼图
      left_Pic_viewa(data){
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.view_pica;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          grid: {
            left: '0%',
            right: '0%',
            bottom: '10%',
            top: '0%',
            containLabel: true
          },
          tooltip: {
            trigger: 'item'
          },
          legend: [
            {
              icon: 'rect',
              bottom: '10%',
              left: 'center',
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 14,
              textStyle:{
                fontSize: 20,//字体大小
                color: '#6A7088',//字体颜色
              },
              data:['小学','初中','高中']
            },{
              icon: 'rect',
              bottom: '0%',
              left: 'center',
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 14,
              textStyle:{
                fontSize: 20,//字体大小
                color: '#6A7088',//字体颜色
              },
              data:['大学','其他']
            }
          ],
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['0%', '70%'],
              center: ["50%", "40%"], 
              avoidLabelOverlap: false,
              color: ['#197FDF', '#15AAAC', '#5E77DF','#2CAA54','#DDC04C'], //'#FBFE27','rgb(11,228,96)','#FE5050'
              itemStyle: {
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {// 饼图中心显示当前模块数据类型名称
                  show: false,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: yData
            }
          ]
        })
      },
      //左侧任务-饼图
      left_Pic_viewb(data){
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.view_picb;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          grid: {
            left: '0%',
            right: '0%',
            bottom: '10%',
            top: '0%',
            containLabel: true
          },
          tooltip: {
            trigger: 'item'
          },
          legend: [
            {
              icon: 'rect',
              bottom: '10%',
              left: 'center',
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 14,
              textStyle:{
                fontSize: 20,//字体大小
                color: '#6A7088',//字体颜色
              },
              data:['小学','初中','高中']
            },{
              icon: 'rect',
              bottom: '0%',
              left: 'center',
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 14,
              textStyle:{
                fontSize: 20,//字体大小
                color: '#6A7088',//字体颜色
              },
              data:['大学','其他']
            }
          ],
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['0%', '70%'],
              center: ["50%", "40%"], 
              avoidLabelOverlap: false,
              color: ['#197FDF', '#15AAAC', '#5E77DF','#2CAA54','#DDC04C'], //'#FBFE27','rgb(11,228,96)','#FE5050'
              itemStyle: {
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {// 饼图中心显示当前模块数据类型名称
                  show: false,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: yData
            }
          ]
        })
      },
      // 中间
      center_bir_view(data){
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push(item.num);
          yLabel.push(item.name);
        })
        let col = this.$refs.top_viewEchr_Bir;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          title: {
            text: "",
            x: "center",
            y:"4%",
            textStyle: {
              color: '#fff',
              fontSize: 22
            },
            subtextStyle: {
              color: '#90979c',
              fontSize: 16,
            },
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: '8%',
            right: '3%',
            left: '12%',
            bottom: '14.5%'
          },
          xAxis: [{
            type: 'category',
            data: yLabel,
            axisLine: {
              lineStyle: {
                color: '#5D6279'
              }
            },
            axisLabel: {
              margin: 10,
              interval:0,  // 坐标轴刻度标签的显示间隔
              rotate:40, // 文字倾斜（角度）
              color: '#5D6279',
              textStyle: {
                fontSize: 24
              },
            },
          }],
          yAxis: [{
            name: '总次数',
            nameTextStyle:{
              color:'#5D6279',
              fontSize:24
            },
            axisLabel: {
              formatter: '{value}',
              color: '#5D6279',
              textStyle: {
                fontSize: 24
              },
            },
            axisLine: {
                show: false,
                lineStyle: {
                  color: 'rgba(255,255,255,1)'
                }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)'
              }
            }
          }],
          series: [{
            type: 'bar',
            data: yData,
            barWidth: '20px',
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
                color: function (params) {
                  let colorList = [
                    '#724cc7', '#7557cc', '#7961d0', '#7d6cd4', '#8075d8', '#847fdc', '#8c94e5', '#8c95e5', '#909ee9', '#94a9ee', '#95afee', '#8eaee1', '#9ec7fa', '#a2d2fe'
                  ]
                  return colorList[params.dataIndex];
                },
              }
            },
          }]
        })
      },
      center_pic_view(data){
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.top_viewEchr_Pic;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: [{
            icon: 'rect',
            icon: 'rect',
            bottom: '9%',
            left: 'center',
            itemWidth: 26,
            itemHeight: 26,
            itemGap: 40,
            textStyle:{
              fontSize: 28,//字体大小
              color: '#686D86',//字体颜色
            },
            data:['全体答题','指定答题','举手答题']
          },{
            icon: 'rect',
            bottom: '2%',
            left: 'center',
            itemWidth: 26,
            itemHeight: 26,
            itemGap: 40,
            textStyle:{
              fontSize: 28,//字体大小
              color: '#686D86',//字体颜色
            },
            data:['随机答题','抢答']
          }],
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['44%', '74%'],
              center: ["50%", "40%"], 
              color:['#1890FF','#13C2C2','#2FC25B','#FACC14','#F04864'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 2,
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: yData
            }
          ]
        })
      },
      cemter_line_view(data){
        let a = data.TeachingAndResearchSection.proportion;// 教研室
        let b = data.NumberOfActivities.proportion;// 活动数
        let c = data.ParticipantsInThe.proportion;// 参与人数
        let aa = [];
        let bb = [];
        let cc = [];
        let yLabel = [];
        a.forEach(item => {
          aa.push(item.num)
          yLabel.push(item.name);
        });
        b.forEach(item => {
          bb.push(item.num)
        });
        c.forEach(item => {
          cc.push(item.num)
        });
        let col = this.$refs.View_line;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            icon: 'circle',
            data: ['教研室', '活动数', '参与人数'],
            top: '0%',
            right: '4%',
            textStyle:{
              color:'#6A7088',
              fontSize:20
            },
            itemGap: 30
          },
          grid: {
            left: '2%',
            right: '8%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: '#8189A8',
                fontSize: 24
              },
            },
            data: yLabel
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#6A7088',
                fontSize: 24
              },
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
          },
          series: [
            {
              name: '教研室',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color:'#74B9E7'
                }
              },
              data: aa
            },
            {
              name: '活动数',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color:'#8075D8'
                }
              },
              data: bb
            },
            {
              name: '参与人数',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color:'#15AAAC'
                }
              },
              data: cc
            },
          ]
        })
      },
      centerBottomSonView_pic(data){
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.SonView_pic;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          tooltip: {
          trigger: 'item'
        },
        legend: {
          icon: 'rect',
          type: 'scroll',
          orient: 'vertical',
          right: '0',
          top: '35%',
          bottom: 20,
          itemWidth: 26,
          itemHeight: 26,
          itemGap: 30,
          textStyle:{
            fontSize: 28,//字体大小
            color: '#686D86',//字体颜色
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ["35%", "50%"], 
            color:['#00B0AE','#50D1EC','#C9B900'],
            avoidLabelOverlap: false,
            itemStyle: {},
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: yData
          }
        ]
        })
      },
      //右侧
      right_line_view(data){
        let a = data.LiveCourses.proportion;// 教研室
        let b = data.Learningcourses.proportion;// 活动数
        let aa = [];
        let bb = [];
        let yLabel = [];
        a.forEach(item => {
          aa.push(item.num)
          yLabel.push(item.name);
        });
        b.forEach(item => {
          bb.push(item.num)
        });
        let col = this.$refs.right_View_line;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            icon: 'circle',
            data: ['直播课程', '学习课程'],
            top: '0%',
            right: '4%',
            itemGap: 64,
            textStyle:{
              color:'#6A7088',
              fontSize:20
            }
          },
          grid: {
            top: '5%',
            left: '1%',
            right: '2%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: '#8189A8',
                fontSize: 24
              },
              lineStyle:{// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {
              show: true,
              lineStyle:{
                color:'#282931'
              }
            },
            data: yLabel
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#6A7088',
                fontSize: 24
              },
              lineStyle:{// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {// 设置网格线颜色
              show: false,
              lineStyle:{
                color:'#282931'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
          },
          series: [
            {
              name: '直播课程',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color:'#74B9E7'
                }
              },
              data: aa 
            },
            {
              name: '学习课程',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color:'#B3863C'
                }
              },
              data: bb
            },
          ]
        })
      },
      right_line_viewtwo(data){
        let a = data.LiveCourses.proportion;// 教研室
        let b = data.Learningcourses.proportion;// 活动数
        let aa = [];
        let bb = [];
        let yLabel = [];
        a.forEach(item => {
          aa.push(item.num)
          yLabel.push(item.name);
        });
        b.forEach(item => {
          bb.push(item.num)
        });
        let col = this.$refs.right_View_linea;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            icon: 'circle',
            data: ['直播课程', '学习课程'],
            top: '0%',
            right: '4%',
            itemGap: 64,
            textStyle:{
              color:'#6A7088',
              fontSize:20
            }
          },
          grid: {
            top: '5%',
            left: '1%',
            right: '2%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: '#8189A8',
                fontSize: 24
              },
              lineStyle:{// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {
              show: true,
              lineStyle:{
                color:'#282931'
              }
            },
            data: yLabel
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#6A7088',
                fontSize: 24
              },
              lineStyle:{// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {// 设置网格线颜色
              show: false,
              lineStyle:{
                color:'#282931'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
          },
          series: [
            {
              name: '直播课程',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color:'#74B9E7'
                }
              },
              data: aa
            },
            {
              name: '学习课程',
              type: 'line',
              stack: 'Total',
              itemStyle: {
                normal: {
                  color:'#B3863C'
                }
              },
              data: bb
            },
          ]
        })
      },
    },
    beforeDestroy(){
      clearInterval(this.timr);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './index.styl';
</style>