<template>
  <div class="appData">
    <div class="app_left">
      <h2 style="margin-bottom: 2.25rem;">智慧黑板</h2>
      <div class="left_Doma left_Dom">
        <div class="son_numberData">
          <div class="number">
            <span class="title">今日新增</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.WisdomTheBlackboard.This_day' :duration='duration'></countTo>
            <span class="subunita">&nbsp;台</span>
          </div>
          <div class="number">
            <span class="title">累计</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.WisdomTheBlackboard.max' :duration='duration'></countTo>
            <span class="subunita">&nbsp;台</span>
          </div>
          <div class="number">
            <span class="title">累计使用</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.WisdomTheBlackboard.use' :duration='duration'></countTo>
            <span class="subunita">&nbsp;次</span>
          </div>
          <div class="number">
            <span class="title">累计使用</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.WisdomTheBlackboard.useh' :duration='duration'></countTo>
            <span class="subunita">&nbsp;小时</span>
          </div>
        </div>
        <div class="line" ref="line_viewDom"></div>
      </div>
      <h2 style="margin-bottom: 2.25rem;">教育一体机</h2>
      <div class="left_Domb left_Dom">
        <div class="son_numberData">
          <div class="number">
            <span class="title">今日新增</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.EducationAllInOne.This_day' :duration='duration'></countTo>
            <span class="subunita">&nbsp;台</span>
          </div>
          <div class="number">
            <span class="title">累计</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.EducationAllInOne.max' :duration='duration'></countTo>
            <span class="subunita">&nbsp;台</span>
          </div>
          <div class="number">
            <span class="title">累计使用</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.EducationAllInOne.use' :duration='duration'></countTo>
            <span class="subunita">&nbsp;次</span>
          </div>
          <div class="number">
            <span class="title">累计使用</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.EducationAllInOne.useh' :duration='duration'></countTo>
            <span class="subunita">&nbsp;小时</span>
          </div>
        </div>
        <div class="line" ref="line_viewDom2"></div>
      </div>
      <h2 style="margin-bottom: 2.25rem;">学习平板</h2>
      <div class="left_Domc left_Dom">
        <div class="son_numberData">
          <div class="number">
            <span class="title">今日新增</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.LearningTablet.This_day' :duration='duration'></countTo>
            <span class="subunita">&nbsp;台</span>
          </div>
          <div class="number">
            <span class="title">累计</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.LearningTablet.max' :duration='duration'></countTo>
            <span class="subunita">&nbsp;台</span>
          </div>
          <div class="number">
            <span class="title">累计使用</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.LearningTablet.use' :duration='duration'></countTo>
            <span class="subunita">&nbsp;次</span>
          </div>
          <div class="number">
            <span class="title">累计使用</span>
            <countTo class="figure_two" :startVal='startVal' :endVal='formData.left.LearningTablet.useh' :duration='duration'></countTo>
            <span class="subunita">&nbsp;小时</span>
          </div>
        </div>
        <div class="line">
          <div class="pic" ref="pic_view"></div>
          <div class="pic" ref="pic_view2"></div>
        </div>
      </div>
    </div>
    <div class="app_right">
      <h2 style="margin-top:2.25rem;margin-left: 3.125rem;margin-bottom: 2.875rem;">录播一体机</h2>
      <div class="lines" ref="lines"></div>
      <div class="pics">
        <div ref="pics"></div>
        <div ref="picsa"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import countTo from 'vue-count-to'
  import {getappdata} from '@/api/hom.js'
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
        formData:{
          // left:{
          //   WisdomTheBlackboard:{},
          //   EducationAllInOne:{},
          //   LearningTablet:{},
          // },
          // right:{
          //   proportion_Z:[],
          //   proportion_L:[],
          //   proportion_LIVE:[],
          //   proportion_H:[],
          //   proportion_PIC:[],
          //   proportion_PICA:[],
          // }
        }
      }
    },
    components: {
      countTo
    },
    created() { },
    mounted() {
      if(localStorage.data4  && localStorage.data4 != 'undefined'){
        this.formData = JSON.parse(localStorage.data4);
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
        getappdata(data).then(res => {
          let add = JSON.stringify(res)
          this.formData = JSON.parse(add).data;
          // console.log(this.formData)
          localStorage.data4 = JSON.stringify(this.formData);
          this.$nextTick(() => {
            this.Load_line_viewDom(this.formData.left.WisdomTheBlackboard.proportion);// 智慧黑板]
            this.load_live_viewDom2(this.formData.left.EducationAllInOne.proportion);// 教育一体机
            this.left_view_task_pic(this.formData.left.LearningTablet.proportion); // 学习平板
            this.left_view_task_pica(this.formData.left.LearningTablet.proportiona);// 学习平板
            this.right_linesView(this.formData.right);// 录播一体机 折线图
            this.right_picViewa(this.formData.right.proportion_PIC);
            this.right_picViewb(this.formData.right.proportion_PICA);
          })
          this.timr = setInterval(()=>{
            this.timefunction();
          },3600000);
        })
      },
      datafom(){
        this.$nextTick(() => {
          this.Load_line_viewDom(this.formData.left.WisdomTheBlackboard.proportion);// 智慧黑板]
          this.load_live_viewDom2(this.formData.left.EducationAllInOne.proportion);// 教育一体机
          this.left_view_task_pic(this.formData.left.LearningTablet.proportion); // 学习平板
          this.left_view_task_pica(this.formData.left.LearningTablet.proportiona);// 学习平板
          this.right_linesView(this.formData.right);// 录播一体机 折线图
          this.right_picViewa(this.formData.right.proportion_PIC);
          this.right_picViewb(this.formData.right.proportion_PICA);
        })
      },
      timefunction(){
        let data = this.formData;
        // 智慧黑板
        data.left.WisdomTheBlackboard.This_day = data.left.WisdomTheBlackboard.This_day + oneORtwo();
        data.left.WisdomTheBlackboard.max = data.left.WisdomTheBlackboard.max + oneORtwo();
        data.left.WisdomTheBlackboard.use = data.left.WisdomTheBlackboard.use + oneORtwo();
        data.left.WisdomTheBlackboard.useh = data.left.WisdomTheBlackboard.useh + oneORtwo();
        // data.left.WisdomTheBlackboard.proportion.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // 教育一体机
        data.left.EducationAllInOne.This_day = data.left.EducationAllInOne.This_day + oneORtwo();
        data.left.EducationAllInOne.max = data.left.EducationAllInOne.max + oneORtwo();
        data.left.EducationAllInOne.use = data.left.EducationAllInOne.use + oneORtwo();
        data.left.EducationAllInOne.useh = data.left.EducationAllInOne.useh + oneORtwo();
        // data.left.EducationAllInOne.proportion.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // 学习平板
        data.left.LearningTablet.This_day = data.left.LearningTablet.This_day + oneORtwo();
        data.left.LearningTablet.max = data.left.LearningTablet.max + oneORtwo();
        data.left.LearningTablet.use = data.left.LearningTablet.use + oneORtwo();
        data.left.LearningTablet.useh = data.left.LearningTablet.useh + oneORtwo();
        // data.left.LearningTablet.proportion.forEach(item => {
        //   item.num += oneORtwo();
        // });
        //录播一体机
        // data.right.proportion_Z.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // data.right.proportion_L.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // data.right.proportion_LIVE.forEach(item => {
        //   item.num += oneORtwo();
        // });
        // data.right.proportion_H.forEach(item => {
        //   item.num += oneORtwo();
        // });
        localStorage.data4 = JSON.stringify(data)
        // this.$nextTick(() => {
        //   this.Load_line_viewDom(data.left.WisdomTheBlackboard.proportion);// 智慧黑板]
        //   this.load_live_viewDom2(data.left.EducationAllInOne.proportion);// 教育一体机
        //   this.left_view_task_pic(data.left.LearningTablet.proportion); // 学习平板
        //   this.left_view_task_pica(data.left.LearningTablet.proportiona);// 学习平板
        //   this.right_linesView(data.right);// 录播一体机 折线图
        //   this.right_picViewa(data.right.proportion_PIC);
        //   this.right_picViewb(data.right.proportion_PICA);
        // })
      },
      // 智慧黑板
      Load_line_viewDom(data) {
        let label = [];
        let value = [];
        data.forEach(item => {
          value.push(item.num)
          label.push(item.name);
        });
        let col = this.$refs.line_viewDom;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          grid: {
            top: '5%',
            right: '5.5%',
            left: '4%',
            bottom: '3%',
            containLabel: true,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255,255,255,0)', // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(255,255,255,1)', // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255,255,255,0)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                formatter: '{value}',
                fontSize: 14,
                margin: 20,
                interval:0,  // 坐标轴刻度标签的显示间隔
                rotate:15, // 文字倾斜（角度）
                textStyle: {
                  color: '#B4BFEB',
                  fontSize:20
                },
              },
              axisLine: {
                lineStyle: {
                  color: '#333',
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#243753',
                },
              },
              axisTick: {
                show: false,
              },
              data: label,
            },
          ],
          yAxis: [
            {
              boundaryGap: false,
              type: 'value',
              axisLabel: {
                textStyle: {
                  color: '#B4BFEB',
                  fontSize: 20
                },
              },
              nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                lineHeight: 40,
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#243753',
                },
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#333',
                },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: '',
              type: 'line',
              // smooth: true, 折线过度（弯曲）角度
              showSymbol: true,
              symbolSize: 8,
              zlevel: 3,
              itemStyle: {
                color: '#19a3df',
                borderColor: '#a3c8d8',
                normal: {
                  color: '#a66ad5',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'solid',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#a66ad5'
                    }, {
                      offset: 1,
                      color: '#596ed6'
                    }]),//线条渐变色  
                  }
                },
                emphasis: {
                  color: '#a66ad5',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'dotted',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#a66ad5'
                    }, {
                      offset: 1,
                      color: '#596ed6'
                    }])
                  }
                }
              },
              lineStyle: {
                normal: {
                  width: 6,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(180, 114, 229, 0.4)',
                      },
                      {
                        offset: 0.8,
                        color: 'rgba(12, 116, 219, 0)',
                      },
                    ],
                    false
                  ),
                },
              },
              data: value,
            },
          ],
        })
      },
      // 教育一体机
      load_live_viewDom2(data) {
        let label = [];
        let value = [];
        data.forEach(item => {
          value.push(item.num)
          label.push(item.name);
        });
        let col = this.$refs.line_viewDom2;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          grid: {
            top: '5%',
            right: '5.5%',
            left: '4%',
            bottom: '3%',
            containLabel: true,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255,255,255,0)', // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(255,255,255,1)', // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255,255,255,0)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                formatter: '{value}',
                fontSize: 14,
                margin: 20,
                interval:0,  // 坐标轴刻度标签的显示间隔
                rotate:15, // 文字倾斜（角度）
                textStyle: {
                  color: '#B4BFEB',
                  fontSize:20
                },
              },
              axisLine: {
                lineStyle: {
                  color: '#333',
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#243753',
                },
              },
              axisTick: {
                show: false,
              },
              data: label,
            },
          ],
          yAxis: [
            {
              boundaryGap: false,
              type: 'value',
              axisLabel: {
                textStyle: {
                  color: '#B4BFEB',
                  fontSize:20
                },
              },
              nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                lineHeight: 40,
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#243753',
                },
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#333',
                },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: '',
              type: 'line',
              // smooth: true,
              showSymbol: true,
              symbolSize: 8,
              zlevel: 3,
              itemStyle: {
                color: '#72E5DD',
                normal: {
                  color: '#72E5DD',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'solid',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#72E5DD'
                    }, {
                      offset: 1,
                      color: '#DBBF0C'
                    }]),//线条渐变色  
                  }
                },
                emphasis: {
                  color: '#72E5DD',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'dotted',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#72E5DD'
                    }, {
                      offset: 1,
                      color: '#DBBF0C'
                    }])
                  }
                }
              },
              lineStyle: {
                normal: {
                  width: 6,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(114, 229, 161, 0.4)',
                      },
                      {
                        offset: 0.8,
                        color: 'rgba(12, 116, 219, 0)',
                      },
                    ],
                    false
                  ),
                },
              },
              data: value,
            },
          ],
        })

      },
      // 学习平板
      left_view_task_pic(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.pic_view;
        let myChart = this.$echarts.init(col);
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            icon: 'rect',
            bottom: '8%',
            left: 'center',
            itemGap: 36,
            itemWidth: 26,
            itemHeight: 26,
            textStyle: {
              color: '#686D86',
              fontSize:28
            }
          },
          series: [
            {
              name: "",
              type: "pie",
              color: ["#54C0C6", "#8175D8"],
              center: ["50%", "40%"],
              radius: '70%',
              avoidLabelOverlap: false,
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
              labelLine: {
                show: false
              },
              itemStyle: {
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
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
      // 学习平板
      left_view_task_pica(data) {
        let yLabel = [];
        let yData = [];
        data.forEach(item => {
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        let col = this.$refs.pic_view2;
        let myChart = this.$echarts.init(col);
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            icon: 'rect',
            bottom: '8%',
            left: 'center',
            itemGap: 36,
            itemWidth: 26,
            itemHeight: 26,
            textStyle: {
              color: '#686D86',
              fontSize: 28
            }
          },
          series: [
            {
              name: "",
              type: "pie",
              color: ["#CEAA70", "#74B9E7"],
              center: ["50%", "40%"],
              radius: '70%',
              avoidLabelOverlap: false,
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
              labelLine: {
                show: false
              },
              itemStyle: {
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
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

      // 录播一体机
      right_linesView(data) {
        let a = data.proportion_Z;// 在线状态
        let b = data.proportion_L;// 录制状态
        let c = data.proportion_LIVE;// 直播状态
        let d = data.proportion_H;// 互动状态
        let label = [];
        let valuea = [];// 在线状态
        let valueb = [];// 录制状态
        let valuec = [];// 直播状态
        let valued = [];// 互动状态
        let yLabel = [];
        a.forEach(item => {
          valuea.push(item.num)
          label.push(item.name);
        });
        b.forEach(item => {
          valueb.push(item.num)
        });
        c.forEach(item => {
          valuec.push(item.num)
        });
        d.forEach(item => {
          valued.push(item.num)
        });
        let col = this.$refs.lines;
        let MyChart = this.$echarts.init(col);
        MyChart.setOption({
          grid: {
            top: '5%',
            right: '3%',
            left: '2%',
            bottom: '3%',
            containLabel: true,
          },
          legend: {
            icon: 'circle',
            data: ['在线状态', '录制状态', '直播状态', '互动状态'],
            top: '0%',
            right: '4%',
            itemGap: 46,
            textStyle:{
              color:'#9EA8CF',
              fontSize:20
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255,255,255,0)', // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(255,255,255,1)', // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255,255,255,0)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                formatter: '{value}',
                fontSize: 14,
                margin: 20,
                textStyle: {
                  color: '#B4BFEB',
                  fontSize: 24
                },
              },
              axisLine: {
                lineStyle: {
                  color: '#333',
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#243753',
                },
              },
              axisTick: {
                show: false,
              },
              data: label,
            },
          ],
          yAxis: [
            {
              boundaryGap: false,
              type: 'value',
              axisLabel: {
                textStyle: {
                  color: '#B4BFEB',
                  fontSize: 24
                },
              },
              nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                lineHeight: 40,
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#243753',
                },
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#333',
                },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: '在线状态',
              type: 'line',
              // smooth: true,
              showSymbol: true,
              symbolSize: 8,
              zlevel: 3,
              itemStyle: {
                normal: {
                  color: '#79BBE7',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'solid',
                    color: '#79BBE7'
                  }
                },
              },
              lineStyle: {
                normal: {
                  width: 6,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(121, 187, 231, 0.4)',
                      },
                      {
                        offset: 0.8,
                        color: 'rgba(12, 116, 219, 0)',
                      },
                    ],
                    false
                  ),
                },
              },
              data: valuea,
            },
            {
              name: '录制状态',
              type: 'line',
              // smooth: true,
              showSymbol: true,
              symbolSize: 8,
              zlevel: 3,
              itemStyle: {
                normal: {
                  color: '#8175D8',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'solid',
                    color: '#8175D8'
                  }
                },
              },
              lineStyle: {
                normal: {
                  width: 6,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(129, 117, 216, 0.4)',
                      },
                      {
                        offset: 0.8,
                        color: 'rgba(12, 116, 219, 0)',
                      },
                    ],
                    false
                  ),
                },
              },
              data: valueb,
            },
            {
              name: '直播状态',
              type: 'line',
              // smooth: true,
              showSymbol: true,
              symbolSize: 8,
              zlevel: 3,
              itemStyle: {
                normal: {
                  color: '#54C0C6',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'solid',
                    color: '#54C0C6'
                  }
                }
              },
              lineStyle: {
                normal: {
                  width: 6,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(84, 192, 198, 0.4)',
                      },
                      {
                        offset: 0.8,
                        color: 'rgba(12, 116, 219, 0)',
                      },
                    ],
                    false
                  ),
                },
              },
              data: valuec,
            },
            {
              name: '互动状态',
              type: 'line',
              // smooth: true,
              showSymbol: true,
              symbolSize: 8,
              zlevel: 3,
              itemStyle: {
                normal: {
                  color: '#B3863C',
                  lineStyle: {        // 系列级个性化折线样式  
                    width: 2,
                    type: 'solid',
                    color: '#B3863C'
                  }
                }
              },
              lineStyle: {
                normal: {
                  width: 6,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(179, 134, 60, 0.4)',
                      },
                      {
                        offset: 0.8,
                        color: 'rgba(12, 116, 219, 0)',
                      },
                    ],
                    false
                  ),
                },
              },
              data: valued,
            },
          ],
        })
      },
      right_picViewa(data) {
        let yLabel = [];
        let yData = [];
        let nummax = 0;
        data.forEach(item => {
          nummax+=item.num
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        // 饼图
        let col = this.$refs.pics;
        let MyChart = this.$echarts.init(col)
        MyChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          // title: {// 饼图标题居中到饼图中间
          //   text: '{a|' + nummax + '}{c|' + '次' + '}',// 总数
          //   x: 'center',
          //   y: 'center',
          //   textStyle: {
          //     rich: {
          //       a: {
          //         fontSize: 60,
          //         color: '#B4BFE9',
          //         fontFamily: 'PingFangSC-Regular, PingFang SC',
          //         // lineHeight:'3.125rem'
          //       },
          //       c: {
          //         fontSize: 24,
          //         color: '#6A7088',
          //         fontFamily: 'PingFangSC-Regular, PingFang SC',
          //         // lineHeight:'1.75rem'
          //         // padding: [5,0]
          //       }
          //     }
          //   }
          // },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            icon: 'rect',
            bottom: '0%',
            left: 'center',
            itemGap: 40,
            itemWidth: 30,
            itemHeight: 30,
            textStyle:{
              color:'#6A7088',
              fontSize: 32
            }
          },
          visualMap: {
            show: false,
            min: 500,
            max: 600,
            inRange: {
              //colorLightness: [0, 1]
            }
          },

          series: [
            {
              name: '',
              type: 'pie',
              radius: ['50%', '80%'],// 饼图中空比例
              center: ['50%', '50%'],// 饼图大小比例
              avoidLabelOverlap: false,
              color: ['#8FAADC', '#F3BC61', '#F79FF6'],
              itemStyle: {
                borderRadius: 10,
                // borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
              },
              // roseType: 'radius',// 参差不齐效果
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
              // itemStyle: {// 饼图样式
              //   normal: {
              //     // shadowColor: 'rgba(0, 0, 0, 0.8)',// 设置阴影
              //     shadowBlur: 50,
              //   }
              // },
              data: yData
            }
          ]
        })
      },
      right_picViewb(data){
        let yLabel = [];
        let yData = [];
        let nummax = 0;
        data.forEach(item => {
          nummax+=item.num
          yData.push({value:item.num,name:item.name});
          yLabel.push(item.name);
        })
        // 饼图
        let col = this.$refs.picsa;
        let MyChart = this.$echarts.init(col)
        MyChart.setOption({
          // title: {// 饼图标题居中到饼图中间
          //   text: '{a|' + nummax + '}{c|' + ' 次' + '}',// 总数
          //   x: 'center',
          //   y: 'center',
          //   textStyle: {
          //     rich: {
          //       a: {
          //         fontSize: 60,
          //         color: '#B4BFE9',
          //         fontFamily: 'PingFangSC-Regular, PingFang SC',
          //         // lineHeight:'3.125rem'
          //       },
          //       c: {
          //         fontSize: 24,
          //         color: '#6A7088',
          //         fontFamily: 'PingFangSC-Regular, PingFang SC',
          //         // lineHeight:'1.75rem'
          //         // padding: [5,0]
          //       }
          //     }
          //   }
          // },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            icon: 'rect',
            bottom: '0%',
            left: 'center',
            itemGap: 40,
            itemWidth: 30,
            itemHeight: 30,
            textStyle:{
              color:'#6A7088',
              fontSize: 32
            }
          },
          visualMap: {
            show: false,
            min: 500,
            max: 600,
            inRange: {
              //colorLightness: [0, 1]
            }
          },

          series: [
            {
              name: '',
              type: 'pie',
              radius: ['50%', '80%'],// 饼图中空比例
              center: ['50%', '50%'],// 饼图大小比例
              avoidLabelOverlap: false,
              color: ['#8FAADC', '#F3BC61', '#F79FF6'],
              itemStyle: {
                borderRadius: 10,
                // borderColor: 'rgba(0,0,0,.4)',
                borderWidth: 4
              },
              // roseType: 'radius',// 参差不齐效果
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
              // itemStyle: {// 饼图样式
              //   normal: {
              //     // shadowColor: 'rgba(0, 0, 0, 0.8)',// 设置阴影
              //     shadowBlur: 50,
              //   }
              // },
              data: yData
            }
          ]
        })
      }
    },
    beforeDestroy(){
      clearInterval(this.timr);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './index.styl';
</style>