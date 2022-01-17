<template>
  <div class="stidyData">
    <div class="view_left">
      <h2 style="margin-bottom: 1.625rem;">课前预习</h2>
      <div class="left_one_Dom">
        <div class="number">
          <span class="title">今日布置</span>
          <countTo class="figure" :startVal='startVal' :endVal='formData.left.PreviewBeforeClass.This_day' :duration='duration'></countTo>
          <span class="subunit">&nbsp;次</span>
        </div>
        <div class="number" style="margin-bottom: 0;">
          <span class="title">累计布置</span>
          <countTo class="figure" :startVal='startVal' :endVal='formData.left.PreviewBeforeClass.max' :duration='duration'></countTo>
          <span class="subunit">&nbsp;次</span>
        </div>
      </div>
      <h3 style="margin-bottom: 3.625rem;">预习完成情况</h3>
      <div class="left_pic_view" ref="left_pic_view"></div>
      <h2 style="margin-bottom: 1.625rem;">课后任务</h2>
      <div class="left_one_Dom" style="margin-bottom: 0;">
        <div class="number">
          <span class="title">今日布置</span>
          <countTo class="figure" :startVal='startVal' :endVal='formData.left.TheTaskAfterClass.This_day' :duration='duration'></countTo>
          <span class="subunit">&nbsp;次</span>
        </div>
        <div class="number" style="margin-bottom: 0;">
          <span class="title">累计布置</span>
          <countTo class="figure" :startVal='startVal' :endVal='formData.left.TheTaskAfterClass.max' :duration='duration'></countTo>
          <span class="subunit">&nbsp;次</span>
        </div>
        <h3 style="margin: 3.125rem 0 3.625rem 0;">任务完成情况</h3>
        <div class="left_pic_view" ref="left_task_view"></div>
      </div>
    </div>
    <div class="view_center">
      <div class="center_top">
        <h2 style="margin-bottom: 2.25rem;">互动学习</h2>
        <div class="center_top_oneDom">
          <div class="border_class_deiv" style=" margin-right: 2.25rem;">
            <dv-border-box-8 :reverse="true">
              <span style="margin-top: 4.75rem;display: inline-block;">
                <countTo class="figure_two" :startVal='startVal' :endVal='formData.center.InteractiveSchool.This_day' :duration='duration'></countTo>
              </span>
              <p class="titlep" style="margin: 0;">累计参加（人）</p>
            </dv-border-box-8>
          </div>
          <div class="border_class_deiv">
            <dv-border-box-8 :reverse="true">
              <div class="number" style="padding-top: 2.125rem;">
                <span class="titled">今日新增</span>
                <countTo class="figure_two" :startVal='startVal' :endVal='formData.center.InteractiveSchool.This_add' :duration='duration'></countTo>
                <span class="subunit">&nbsp;次</span>
              </div>
              <div class="number">
                <span class="titled">累计</span>
                <countTo class="figure_two" :startVal='startVal' :endVal='formData.center.InteractiveSchool.max' :duration='duration'></countTo>
                <span class="subunit">&nbsp;次</span>
              </div>
              <div class="number">
                <span class="titled">互动总时长</span>
                <countTo class="figure_two" :startVal='startVal' :endVal='formData.center.InteractiveSchool.time' :duration='duration'></countTo>
                <span class="subunit">&nbsp;小时</span>
              </div>
            </dv-border-box-8>
          </div>
        </div>
        <h2 style="margin-bottom: 2rem;margin-top: 2.25rem;">参与互动情况</h2>
        <div class="center_top_bir" style="margin-right: 2.25rem;" ref="center_top_View"></div>
        <div class="center_top_bir" ref="center_top_Viewa"></div>
      </div>
      <div class="center_bottom">
        <div class="cetner_btn_son">
          <h2 style="margin-bottom: 3.375rem;">学习资料</h2>
          <div class="number" style="margin-bottom: 3.25rem;">
            <span class="title">累计</span>
            <countTo class="figure" :startVal='startVal' :endVal='formData.center.LearningMaterials.max' :duration='duration'></countTo>
            <span class="subunit">&nbsp;个</span>
          </div>
          <p class="pic_title">总数（个）</p>
          <div class="btn_view" ref="btn_pic_View"></div>
        </div>
        <div class="cetner_btn_son">
            <h2 style="margin-bottom: 3.625rem;">出题答题</h2>
            <div class="number">
              <span class="title">今日新增</span>
              <countTo class="figure" :startVal='startVal' :endVal='formData.center.WriteTheAnswer.This_day' :duration='duration'></countTo>
              <span class="subunit">&nbsp;道</span>
            </div>
            <div class="number">
              <span class="title">累计</span>
              <countTo class="figure" :startVal='startVal' :endVal='formData.center.WriteTheAnswer.max' :duration='duration'></countTo>
              <span class="subunit">&nbsp;道</span>
            </div>
            <div class="btn_viewa" ref="btn_bir_View"></div>
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
  import {getstudydata} from '@/api/hom.js'
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
        formData:{}
      }
    },
    components: {
      countTo
    },
    created() { },
    mounted() {
      if(localStorage.data3 && localStorage.data3 != 'undefined'){
        this.formData = JSON.parse(localStorage.data3);
        this.datafom();
        this.timr = setInterval(()=>{
          this.timefunction();
        },3600000);
      }else{
        clearInterval(this.timr);
        this.getViewData(0)
      }
    },
    methods: {
      // 获取数据
      getViewData(data){
        getstudydata(data).then(res => {
          let add = JSON.stringify(res)
          this.formData = JSON.parse(add).data;
          // console.log(this.formData)
          localStorage.data3 = JSON.stringify(this.formData);
          this.$nextTick(() => {
            this.left_view_prepare_pic(this.formData.left.PreviewBeforeClass.proportion);// 预习完成情况
            this.left_view_task_pic(this.formData.left.TheTaskAfterClass.proportion);// 任务完成情况
            this.center_view_bir(this.formData.center.TheInteractiveSituation.proportion);// 参与互动情况
            this.center_view_bira(this.formData.center.TheInteractiveSituation.proportiona);// 参与互动情况
            this.view_pic_left(this.formData.center.LearningMaterials.proportion);// 学习资料
            this.center_pic_view(this.formData.center.WriteTheAnswer.proportion);// 出题答题
            this.right_line_view(this.formData.right.CoursePageViews);// 游览次数
            this.right_line_viewtwo(this.formData.right.DurationOfStudy);// 学习时长对比
          })
          this.timr = setInterval(()=>{
            this.timefunction();
          },3600000);
        })
      }, 
      
      datafom(){
        this.$nextTick(() => {
          this.left_view_prepare_pic(this.formData.left.PreviewBeforeClass.proportion);// 预习完成情况
          this.left_view_task_pic(this.formData.left.TheTaskAfterClass.proportion);// 任务完成情况
          this.center_view_bir(this.formData.center.TheInteractiveSituation.proportion);// 参与互动情况
          this.center_view_bira(this.formData.center.TheInteractiveSituation.proportiona);// 参与互动情况
          this.view_pic_left(this.formData.center.LearningMaterials.proportion);// 学习资料
          this.center_pic_view(this.formData.center.WriteTheAnswer.proportion);// 出题答题
          this.right_line_view(this.formData.right.CoursePageViews);// 游览次数
          this.right_line_viewtwo(this.formData.right.DurationOfStudy);// 学习时长对比
        })
      },
      timefunction(){
        let data = this.formData;
        // 课前预习
        data.left.PreviewBeforeClass.This_day = data.left.PreviewBeforeClass.This_day + oneORtwo();
        data.left.PreviewBeforeClass.max = data.left.PreviewBeforeClass.max + oneORtwo();
        // 预习完成情况
        data.left.TheTaskAfterClass.This_day = data.left.TheTaskAfterClass.This_day + oneORtwo();
        data.left.TheTaskAfterClass.max = data.left.TheTaskAfterClass.max + oneORtwo();
        // 互动学习
        data.center.InteractiveSchool.This_day = data.center.InteractiveSchool.This_day + oneORtwo();
        data.center.InteractiveSchool.This_add = data.center.InteractiveSchool.This_add + oneORtwo();
        data.center.InteractiveSchool.max = data.center.InteractiveSchool.max + oneORtwo();
        data.center.InteractiveSchool.time = data.center.InteractiveSchool.time + oneORtwo();
        // 参与互动情况
        // data.center.TheInteractiveSituation.proportion.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // data.center.TheInteractiveSituation.proportiona.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // 学习资料
        data.center.LearningMaterials.max = data.center.LearningMaterials.max + oneORtwo();
        // data.center.LearningMaterials.proportion.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // 出题答题
        data.center.WriteTheAnswer.This_day = data.center.WriteTheAnswer.This_day + oneORtwo();
        data.center.WriteTheAnswer.max = data.center.WriteTheAnswer.max + oneORtwo();
        // 课程
        //课程
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
        // //课程预览量
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
        
        localStorage.data3 = JSON.stringify(data)
        // this.$nextTick(() => {
        //   this.left_view_prepare_pic(data.left.PreviewBeforeClass.proportion);// 预习完成情况
        //   this.left_view_task_pic(data.left.TheTaskAfterClass.proportion);// 任务完成情况
        //   this.center_view_bir(data.center.TheInteractiveSituation.proportion);// 参与互动情况
        //   this.center_view_bira(data.center.TheInteractiveSituation.proportiona);// 参与互动情况
        //   this.view_pic_left(data.center.LearningMaterials.proportion);// 学习资料
        //   this.center_pic_view(data.center.WriteTheAnswer.proportion);// 出题答题
        //   this.right_line_view(data.right.CoursePageViews);// 游览次数
        //   this.right_line_viewtwo(data.right.DurationOfStudy);// 学习时长对比
        // })
      },
      // 左侧
      // 预习完成情况
      left_view_prepare_pic(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.left_pic_view;
        let myChart = this.$echarts.init(col);
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            icon: 'rect',
            bottom: '0%',
            left: 'center',
            itemGap: 34,
            itemWidth: 26,
            itemHeight: 26,
            textStyle:{
              color:'#686D86',
              fontSize:28
            }
          },
          series: [
            {
              name: "预习完成情况",
              type: "pie",
              color: ["#54C0C6", "#8175D8"],
              center: ["50%", "45%"],
              radius: '80%',
              avoidLabelOverlap: false,
              // roseType: "radius",
              label: {            //饼图图形上的文本标签
                normal: {
                  show: true,
                  position: 'inner', //标签的位置
                  textStyle: {
                    fontWeight: 300,
                    fontSize: 28    //文字的字体大小
                  },
                  formatter: '{d}%'
                }
              },
              itemStyle: {
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
              },
              labelLine: {
                show: false
              },
              data: yData
            }
          ]
        })
        let index = 0;
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0,
        });
        myChart.on('mouseover', (e) => {
          if (e.dataIndex !== index) {
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: index,
            });
          }
        });
        myChart.on('mouseout', (e) => {
          index = e.dataIndex;
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
          });
        });
      },
      // 任务完成情况
      left_view_task_pic(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.left_task_view;
        let myChart = this.$echarts.init(col);
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            icon: 'rect',
            bottom: '3%',
            left: 'center',
            itemGap: 34,
            itemWidth: 26,
            itemHeight: 26,
            textStyle:{
              color:'#686D86',
              fontSize:28
            }
          },
          series: [
            {
              name: '',
              type: 'pie',
              center: ["50%", "45%"],
              radius: '80%',
              color: ["#BB89D1", "#D89F75"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 2,
              },
              label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 28,
                        fontWeight: '100',
                    }
                },
              },
              labelLine: {
                show: false
              },
              data: yData
            }
          ]
        })
        
        let index = 0;
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0,
        });
        myChart.on('mouseover', (e) => {
          if (e.dataIndex !== index) {
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: index,
            });
          }
        });
        myChart.on('mouseout', (e) => {
          index = e.dataIndex;
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
          });
        });
      },
      // 中间
      // 参与互动情况
      center_view_bir(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push(item.num);
          yLabel.push(item.name);
        })
        let col = this.$refs.center_top_View;
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
              fontSize: 24,
              color: '#5D6279',
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
            barWidth: 40,
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
        // MyChart.setOption({
        //   grid: {
        //     top: "5%",
        //     bottom: "15%",
        //     right: "5%"
        //   },
        //   xAxis: {
        //     data: ['消防烟感', '摄像机', '环境烟感', '路灯', '地磁'],
        //     axisLine: {
        //       show: false,
        //     },
        //     axisTick: {
        //       show: false,
        //     },
        //     splitLine: {
        //       show: false,
        //     },
        //     axisLabel: {
        //       show: true,
        //       margin: 14,
        //       fontSize: '1.5rem',
        //       textStyle: {
        //         color: "#5D6279"
        //       }
        //     }
        //   },
        //   yAxis: [
        //     {
        //       name: "总次数",
        //       type: "value",
        //       gridIndex: 0,
        //       interval: 25,
        //       splitLine: {
        //         show: true,
        //         lineStyle: {
        //           color: "rgba(77, 128, 254, 0.2)",
        //           width: 2
        //         }
        //       },
        //       axisTick: {
        //         show: false
        //       },
        //       axisLine: {
        //         show: false,
        //         lineStyle: {
        //           color: "rgba(77, 128, 254, 0.2)"
        //         }
        //       },
        //       axisLabel: {
        //         show: true,
        //         margin: 14,
        //         fontSize: '1.5rem',
        //         textStyle: {
        //           color: "#5D6279"
        //         }
        //       }
        //     }
        //   ],
        //   series: [
        //     {
        //       name: "设备在线率",
        //       type: "bar",
        //       barWidth: 16,
        //       itemStyle: {
        //         normal: {
        //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //             {
        //               offset: 0,
        //               color: "rgba(146, 225, 255, 1)"
        //             },
        //             {
        //               offset: 1,
        //               color: "rgba(0, 151, 251, 1)"
        //             }
        //           ])
        //         }
        //       },
        //       data: [21, 43, 56, 32, 64],
        //       z: 10,
        //       zlevel: 0
        //     },
        //     {
        //       // 分隔
        //       type: "pictorialBar",
        //       itemStyle: {
        //         normal: {
        //           color: "#0F375F"
        //         }
        //       },
        //       symbolRepeat: "fixed",
        //       symbolMargin: 6,
        //       symbol: "rect",
        //       symbolClip: true,
        //       symbolSize: [18, 2],
        //       symbolPosition: "start",
        //       symbolOffset: [1, 1],
        //       data: [21, 43, 56, 32, 64],
        //       width: 2,
        //       z: 0,
        //       zlevel: 1
        //     },
        //     {
        //       name: "外框",
        //       type: "bar",
        //       barGap: "-110%", // 设置外框粗细
        //       data: [100, 100, 100, 100, 100, 100, 100],
        //       barWidth: 16,
        //       itemStyle: {
        //         normal: {
        //           color: "transparent", // 填充色
        //           // barBorderRadius: 0, //圆角半径
        //           label: {
        //             // 标签显示位置
        //             show: false,
        //             position: "top" // insideTop 或者横向的 insideLeft
        //           }
        //         }
        //       },
        //       z: 0
        //     }
        //   ],

        // })
      
      },
      // 参与互动情况
      center_view_bira(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push(item.num);
          yLabel.push(item.name);
        })
        let col = this.$refs.center_top_Viewa;
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
            name: '总时长（h）',
            nameTextStyle:{
              fontSize: 24,
              color: '#5D6279',
            },
            axisLabel: {
              formatter: '{value}',
              color: '#5D6279',
              textStyle: {
                fontSize: '1.5rem'
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
            barWidth: 40,
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
                color: function (params) {
                  let colorList = [
                    '#3AC7AD', '#41c5b4', '#47c3ba', '#4dc2c0', '#54c0c6', '#5abfcc', '#60bdd2', '#66bbd8', '#6dbade', '#73b8e4', '#79b6ea', '#7ab7eb', '#7fb5f0','#7eb3ed'
                  ]
                  return colorList[params.dataIndex];
                },
              }
            },
          }]
        })
      
      },
      // 学习资料
      view_pic_left(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push(item.num);
          yLabel.push(item.name);
        })
        let bgData = []
        for (let i in yData) {
          bgData.push(2000)
        }
        let col = this.$refs.btn_pic_View;
        let MyChart = this.$echarts.init(col)
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
            name: '总数（个）',
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
            name: '总数（个）',
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
            name: '总数（个）',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 30, 30],
                color: function (params) {
                  let colorList = [
                    '#74B9E7', '#C9B900', '#4666B6', '#3084CE'
                  ]
                  return colorList[params.dataIndex];
                },
                shadowBlur: 0,
                shadowColor: 'rgba(87,220,222,0.7)'
              },
            },
            barWidth: 24,
            data: yData
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 24,
            barGap: '-100%',
            data: bgData,
            itemStyle: {
              normal: {
                color: '#292A3F',
                barBorderRadius: [30, 30, 30, 30],
              }
            },
          },
          ]
        })
      },
      // 出题答题
      center_pic_view(data){
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.btn_bir_View;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            icon: 'rect',
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '27%',
            bottom: 20,
            itemGap: 32,
            itemWidth: 26,
            itemHeight: 26,
            textStyle:{
              fontSize: 28,//字体大小
              color: '#686D86',//字体颜色
            }
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['50%', '85%'],
              center: ["40%", "50%"], 
              color:['#1890FF','#13C2C2','#2FC25B','#FACC14','#F04864'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 2,
              },
              label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 28,
                        fontWeight: '100',
                    }
                },
              },
              // emphasis: {
              //   label: {
              //     show: true,
              //     fontSize: '40',
              //     fontWeight: 'bold'
              //   }
              // },
              labelLine: {
                show: false
              },
              data: yData
            }
          ]
        })
      },
      //右侧
      right_line_view(data) {
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
            top: '3%',
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
              lineStyle: {// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#282931'
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
              lineStyle: {// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {// 设置网格线颜色
              show: false,
              lineStyle: {
                color: '#282931'
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
                  color: '#74B9E7'
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
                  color: '#B3863C'
                }
              },
              data: bb
            },
          ]
        })
      },
      right_line_viewtwo(data) {
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
            top: '3%',
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
              lineStyle: {// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#282931'
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
              lineStyle: {// 主轴线颜色
                color: '#282931'
              }
            },
            splitLine: {// 设置网格线颜色
              show: false,
              lineStyle: {
                color: '#282931'
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
                  color: '#74B9E7'
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
                  color: '#B3863C'
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