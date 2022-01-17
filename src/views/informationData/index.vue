<template>
  <div class="informationData">
    <!-- 左侧 -->
    <div class="View_left">
      <ol>
        <li>
          <h2>学校数</h2>
          <div class="leftNumber">
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.teaching.This_day' :duration='duration'></countTo>
            <p class="subunit distance">今日新增 （个）</p>
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.teaching.max' :duration='duration'></countTo>
            <p class="subunit">累计（个）</p>
          </div>
          <div class="view_Bir" ref="view_Bir"></div>
        </li>
        <li>
          <h2>教室数</h2>
          <div class="leftNumber">
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.classroom.This_day' :duration='duration'></countTo>
            <p class="subunit distance">今日新增 （个）</p>
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.classroom.max' :duration='duration'></countTo>
            <p class="subunit">累计（个）</p>
          </div>
          <div class="view_Bir" ref="view_Bir2"></div>
        </li>
        <li>
          <h2>班级数</h2>
          <div class="leftNumber">
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.class.This_day' :duration='duration'></countTo>
            <p class="subunit distance">今日新增 （个）</p>
            <countTo class="figure" :startVal='startVal' :endVal='formData.left.class.max' :duration='duration'></countTo>
            <p class="subunit">累计（个）</p>
          </div>
          <div class="view_Bir" ref="view_Bir3"></div>
        </li>
        <li>
          <h2>设备数</h2>
          <!-- <dv-border-box-8 :reverse="true" :dur="4">dv-border-box-8</dv-border-box-8> -->
          <div class="equipment">
            <div class="View_advocate" v-for="(item,index) in formData.left.equipment.equipmentlist" :key="index" :index="index">
              <div class="borderClass"></div>
              <countTo class="figuremin" :startVal='0' :endVal='item.num' :duration='duration'></countTo>
              <p class="subunit">{{item.title}}</p>
            </div>
          </div>
          <div class="region">
            <span>地域</span>
            <span v-for="(itme,index) in formData.left.equipment.area" :key="index+1" :index="index+1">{{itme}}</span>
          </div>
        </li>
      </ol>
    </div>
    <!-- 中间-地图 -->
    <div class="View_center">
      <h1>学校信息化热力分布图</h1>
      <h4>
        <countTo class="maxh2" :startVal='0' :endVal='formData.left.teaching.max' :duration='duration'></countTo>
        <p class="maxtitle">全国信息化覆盖学校</p>
      </h4>
      <div class="View_map" ref="map"></div>
    </div>
    <!-- 右侧 -->
    <div class="View_right">
      <ol>
        <li>
          <h2 style="margin-bottom: 6.125rem;">教师数</h2>
          <div class="number">
            <countTo class="figurec" :startVal='startVal' :endVal='formData.right.teacher.This_day' :duration='duration'></countTo>
            <p class="subunit">今日新增(人)</p>
          </div><!-- 
           --><div class="number">
            <countTo class="figurec" :startVal='startVal' :endVal='formData.right.teacher.on_line' :duration='duration'></countTo>
            <p class="subunit">在线(人)</p>
          </div><!-- 
           --><div class="number">
            <countTo class="figurec" :startVal='startVal' :endVal='formData.right.teacher.max' :duration='duration'></countTo>
            <p class="subunit">累计(人)</p>
          </div>
          <div class="pic">
            <h2>学段占比</h2>
            <div class="View_pic" ref="pic"></div>
          </div>
        </li>
        <li>
          <h2 style="margin-bottom: 6.125rem;">学生数</h2>
          <div class="number" style="margin-bottom: 0;">
            <countTo class="figurec" :startVal='startVal' :endVal='formData.right.student.This_day' :duration='duration'></countTo>
            <p class="subunit">今日新增(人)</p>
          </div><!-- 
           --><div class="number" style="margin-bottom: 0;">
            <countTo class="figurec" :startVal='startVal' :endVal='formData.right.student.on_line' :duration='duration'></countTo>
            <p class="subunit">在线(人)</p>
          </div><!-- 
           --><div class="number" style="margin-bottom: 0;">
            <countTo class="figurec" :startVal='startVal' :endVal='formData.right.student.max' :duration='duration'></countTo>
            <p class="subunit">累计(人)</p>
          </div>
          <div class="bir">
            <h2>学段占比</h2>
            <div class="view_birStudent" ref="view_birStudent"></div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  import './china.js'
  import countTo from 'vue-count-to'
  import {getLiveList} from '@/api/hom.js'
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
      }
    },
    components: {
      countTo
    },
    created() {
    },
    mounted() {
      // 判断默认进来值
      if(localStorage.data1 && localStorage.data1 != 'undefined'){
        this.formData = JSON.parse(localStorage.data1);
        this.datafom();
        // 定时器开始执行 一小时触发一次（每次离开页面都会清楚 定时器 在此进入的时候打开定时器）
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
      getrandom(start, end){
        return Math.floor(Math.random() * (end - start) + start)
      },
      // 获取数据
      getViewData(data){
        getLiveList(data).then(res => {
          let add = JSON.stringify(res)
          this.formData = JSON.parse(add).data;
          localStorage.data1 = JSON.stringify(this.formData);
          // console.log(this.formData)
          this.$nextTick(() => {
            this.viewMap(this.formData.center);// 中国地图
            this.viewBir(this.formData.left.teaching.make);// 柱图-教学楼
            this.viewBir2(this.formData.left.classroom.make);// 柱图-教室数
            this.viewBir3(this.formData.left.class.make);// 柱图-班级数
            this.viewPic(this.formData.right.make);// 饼图
            this.viewBir4(this.formData.right.phase);// 学段占比
          })
          // 定时器开始执行 一小时触发一次
          this.timr = setInterval(()=>{
            this.timefunction();
          },3600000);//3600000
        })
      },
      
      datafom(){
        this.$nextTick(() => {
          this.viewMap(this.formData.center);// 中国地图
          this.viewBir(this.formData.left.teaching.make);// 柱图-教学楼
          this.viewBir2(this.formData.left.classroom.make);// 柱图-教室数
          this.viewBir3(this.formData.left.class.make);// 柱图-班级数
          this.viewPic(this.formData.right.make);// 饼图
          this.viewBir4(this.formData.right.phase);// 学段占比
        })
      },
      // 递加数据
      timefunction(){
        let data = this.formData;
        // 学校楼
        data.left.teaching.This_day = data.left.teaching.This_day + oneORtwo();
        data.left.teaching.max = data.left.teaching.max + oneORtwo();
        // data.left.teaching.make.forEach(item => {
        //   item.num += zeroORtwo();
        //   if(item.num > 100){
        //     item.num = 100;
        //   }
        // })
        // console.log(data.left.teaching.make)
        // 教室数
        data.left.classroom.This_day = data.left.classroom.This_day + oneORtwo();
        data.left.classroom.max = data.left.classroom.max + oneORtwo();
        // data.left.classroom.make.forEach(item => {
        //   item.num += zeroORtwo();
        //   if(item.num > 100){
        //     item.num = 100;
        //   }
        // })
        // 班级数
        data.left.class.This_day = data.left.class.This_day + oneORtwo();
        data.left.class.max = data.left.class.max + oneORtwo();
        // data.left.class.make.forEach(item => {
        //   item.num += zeroORtwo();
        //   if(item.num > 100){
        //     item.num = 100;
        //   }
        // })
        // 设备数
        // data.left.equipment.equipmentlist.forEach(item => {
        //   item.num += oneORtwo();
        // })
        // 教师数
        data.right.teacher.This_day = data.right.teacher.This_day + oneORtwo();
        data.right.teacher.on_line = data.right.teacher.on_line + oneORtwo();
        data.right.teacher.max = data.right.teacher.max + oneORtwo();
        // 学生数
        data.right.student.This_day = data.right.student.This_day + oneORtwo();
        data.right.student.on_line = data.right.student.on_line + oneORtwo();
        data.right.student.max = data.right.student.max + oneORtwo();
        // 学段占比
        // data.right.make.forEach(item => {
        //   item.num += zeroORtwo();
        //   if(item.num > 100){
        //     item.num = 100;
        //   }
        // })
        localStorage.data1 = JSON.stringify(data)
        this.$nextTick(() => {
          this.viewMap(data.center);// 中国地图
          this.viewBir(data.left.teaching.make);// 柱图-教学楼
          this.viewBir2(data.left.classroom.make);// 柱图-教室数
          this.viewBir3(data.left.class.make);// 柱图-班级数
          this.viewPic(data.right.make);// 饼图
          this.viewBir4(data.right.phase);// 学段占比
        })
      },
      // 中国地图
      viewMap(data) {
        var chinaGeoCoordMap = data.province;
        var chinaDatas = data.chinaDatas;

        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [116.4551, 40.2539];
            if(fromCoord && toCoord) {
              // 由北京发送各个方向
              res.push([ {
                coord: toCoord,
              },{
                coord: fromCoord,
                value: dataItem[0].value
              }]);
              // res.push([{ // 监听发送方形北京
              //   coord: fromCoord,
              //   value: dataItem[0].value
              // }, {
              //   coord: toCoord,
              // }]);
            }
          }
          return res;
        };
        var series = [];
        [['北京市', chinaDatas]].forEach(function (item, i) {
          series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 5, //图标大小
            },
            lineStyle: {
              normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .3 //尾迹线条曲直度
              }
            },
            data: convertData(item[1])
          }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function (params) {//圆环显示文字
                  return params.data.name;
                },
                fontSize: 13
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function (val) {
              return 5 + val[2] * 5; //圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: '#f00'
              }
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              };
            }),
          },
            //被攻击点
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  //offset:[5, 0],
                  color: '#0f0',
                  formatter: '{b}',
                  textStyle: {
                    color: "#0f0"
                  }
                },
                emphasis: {
                  show: true,
                  color: "#f60"
                }
              },
              symbol: 'pin',
              symbolSize: 50,
              data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10]),
              }],
            }
          );
        });
        let col = this.$refs.map;
        let MyChart = this.$echarts.init(col)
        MyChart.setOption({
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
              //根据业务自己拓展要显示的内容
              var res = "";
              var name = params.name;
              var value = params.value[params.seriesIndex + 1];
              res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
              return res;
            }
          },
          backgroundColor: "",// echarts 背景色
          visualMap: { //图例值控制
            min: 0,
            max: 1,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            zoom: 1.2,
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true, //是否允许缩放
            itemStyle: {
              normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1
              },
              emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
              }
            }
          },
          series: series
        })

      },
      // 柱图-教学楼
      viewBir(data) {
        let getmydmc = []; //名称
        let getmyd = []; //数值
        data.forEach(item => {
          getmyd.push(item.num);
          getmydmc.push(item.name);
        })
        let getmydzd = [];

        let big = 0;
        getmyd.forEach((el) => {
          if (!(el === undefined || el === '')) {
            if (big < Number(el)) {
              big = Number(el);
            }
          }
        });
        for (let i = 0; i < getmyd.length; i++) {
          getmydzd.push(big * 4);
        }
        //计算最大值
        function calMax(arr) {
          let max = 0;
          arr.forEach((el) => {
            el.forEach((el1) => {
              if (!(el1 === undefined || el1 === '')) {
                if (max < Number(el1)) {
                  max = Number(el1);
                }
              }
            });
          });
          let maxint = Math.ceil(max / 9.5);
          //不让最高的值超过最上面的刻度
          let maxval = maxint * 10;
          //让显示的刻度是整数
          return maxval;
        }
        var max = Math.ceil(calMax([getmyd]) / 10) * 10;

        let col = this.$refs.view_Bir;
        let MyChart = this.$echarts.init(col)
        MyChart.setOption({
          title: {
            text: '学校数占比',
            x: '18%',
            y: 'top',
            textStyle: {
              color: '#6A7088',
              fontSize: 24,
              fontFamily:'PingFangSC-Regular, PingFang SC',
            },
          },
          grid: {
            left: '5%',
            right: '10%',
            bottom: '10%',
            top: '12%',
            containLabel: true,
          },
          tooltip: {
            formatter: (params) => {
              if (params.name !== '') {
                return params.name + ' : ' + getmyd[params.dataIndex];
              }
            },
            textStyle: {
              align: 'left',
            },
          },
          xAxis: [
            {
              type: 'value',
              axisLabel: {
                show: false,
                // margin: 5,
                // color: '#fff',
                // formatter: function (val) {
                //   return val + '';
                // },
                // textStyle: {
                //   fontSize: '13',
                // },
              },
              min: 0,
              max: max, // 计算最大值
              interval: max / 5, //  平均分为5份
              splitNumber: 5,
              splitLine: {
                show: false,
                // lineStyle: {
                //   color: '#fff',
                // },
              },
              axisLine: {// x轴刻度线
                show: false,
                // lineStyle: {
                //   color: '#fff',
                //   width: 1,
                //   opacity: 0.3,
                // },
              },
              axisTick: {
                show: false,
              },
            },
            {
              type: 'value',
              axisLabel: {
                show: false,
              },
              min: 0,
              max: max, // 计算最大值
              interval: max / 10, //  平均分为5份
              splitNumber: 10,
              splitLine: {
                show: false,
                // lineStyle: {
                //   type: 'dashed',
                //   color: '#D8D8D8',
                // },
              },
              axisLine: {
                show: false,
                // lineStyle: {
                //   color: '#fff',
                // },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              //  boundaryGap:true,
              axisLabel: {
                // formatter: (value, index) => {
                //   if (value.length >= 12) {
                //     value = value.slice(0, 12) + `\n` + value.slice(12);
                //   }
                //   if (value.length >= 26) {
                //     value = value.slice(0, 26) + `\n` + value.slice(26);
                //   }
                //   return value;
                // },
                show: true,// y刻度值是否显示
                textStyle: {
                  color: '#6A7088',
                  fontSize: 28
                },
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {// y轴刻度线
                show: false,
                // lineStyle: {
                //   color: '#fff',
                //   width: 1,
                //   opacity: 0.3,
                // },
              },
              data: getmydmc,
            }, {// 横向滚动条右侧值
              type: 'category',
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              show: true,
              axisLabel: {
                textStyle: {
                  color: '#B4BFEB',
                  fontSize: '1.75rem'
                },
                formatter: function (value) {
                  if (value) {
                    return (value).toLocaleString() + '%';
                  }
                },
              },
              data: getmyd,
            }
          ],
          dataZoom: [
            {
              type: 'inside',
              show: true,
              height: 30,
              start: 1,
              end: 100,
              orient: 'vertical',
              zlevel: 66,
            },
          ],
          series: [
            {
              name: '值',
              type: 'bar',
              // zlevel: 1,
              xAxisIndex: 0,
              itemStyle: {
                normal: {
                  // barBorderRadius: [0, 5, 5, 0],
                  color: {
                    colorStops: [// 设置渐变色
                      {
                        offset: 0,
                        color: '#74B9E7', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#74B9E7', // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              barWidth: 30,
              data: getmyd,
              z: 0,
            },
            {
              // 分隔
              type: 'pictorialBar',
              itemStyle: {
                normal: {
                  color: '#022539',
                },
              },
              symbolRepeat: 'fixed',
              symbolMargin: 8,
              symbol: 'rect',
              symbolClip: true,
              symbolSize: [3, 30],
              symbolPosition: 'start',
              symbolOffset: [-1, 0],
              data: getmydzd,
              z: 66,
              animationEasing: 'elasticOut',
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: 30,
              barGap: '-100%',
              xAxisIndex: 1,
              data: getmydzd,
              itemStyle: {
                normal: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(57, 58, 71, 0.4)', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(57, 58, 71, 0.4)', // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              z: 0,
            },
            // {
            //   // 外边框
            //   type: 'pictorialBar',
            //   symbol: 'rect',
            //   itemStyle: {
            //     normal: {
            //       color: 'none',
            //     },
            //   },
            //   data: getmyd,
            //   z: 77,
            //   animationEasing: 'elasticOut',
            // },
          ]
        })
      },
      // 柱图-教室数
      viewBir2(data) {
        let getmydmc = []; //名称
        let getmyd = []; //数值
        data.forEach(item => {
          getmyd.push(item.num);
          getmydmc.push(item.name);
        })
        let getmydzd = [];

        let big = 0;
        getmyd.forEach((el) => {
          if (!(el === undefined || el === '')) {
            if (big < Number(el)) {
              big = Number(el);
            }
          }
        });
        for (let i = 0; i < getmyd.length; i++) {
          getmydzd.push(big * 4);
        }
        //计算最大值
        function calMax(arr) {
          let max = 0;
          arr.forEach((el) => {
            el.forEach((el1) => {
              if (!(el1 === undefined || el1 === '')) {
                if (max < Number(el1)) {
                  max = Number(el1);
                }
              }
            });
          });
          let maxint = Math.ceil(max / 9.5);
          //不让最高的值超过最上面的刻度
          let maxval = maxint * 10;
          //让显示的刻度是整数
          return maxval;
        }
        var max = Math.ceil(calMax([getmyd]) / 10) * 10;

        let col = this.$refs.view_Bir2;
        let MyChart = this.$echarts.init(col)
        MyChart.setOption({
          title: {
            text: '教室数占比',
            x: '18%',
            y: 'top',
            textStyle: {
              color: '#6A7088',
              fontSize: 24,
              fontFamily:'PingFangSC-Regular, PingFang SC',
            },
          },
          grid: {
            left: '5%',
            right: '10%',
            bottom: '10%',
            top: '12%',
            containLabel: true,
          },
          tooltip: {
            formatter: (params) => {
              if (params.name !== '') {
                return params.name + ' : ' + getmyd[params.dataIndex];
              }
            },
            textStyle: {
              align: 'left',
            },
          },
          xAxis: [
            {
              type: 'value',
              axisLabel: {
                show: false,
                // margin: 5,
                // color: '#fff',
                // formatter: function (val) {
                //   return val + '';
                // },
                // textStyle: {
                //   fontSize: '13',
                // },
              },
              min: 0,
              max: max, // 计算最大值
              interval: max / 5, //  平均分为5份
              splitNumber: 5,
              splitLine: {
                show: false,
                // lineStyle: {
                //   color: '#fff',
                // },
              },
              axisLine: {// x轴刻度线
                show: false,
                // lineStyle: {
                //   color: '#fff',
                //   width: 1,
                //   opacity: 0.3,
                // },
              },
              axisTick: {
                show: false,
              },
            },
            {
              type: 'value',
              axisLabel: {
                show: false,
              },
              min: 0,
              max: max, // 计算最大值
              interval: max / 10, //  平均分为5份
              splitNumber: 10,
              splitLine: {
                show: false,
                // lineStyle: {
                //   type: 'dashed',
                //   color: '#D8D8D8',
                // },
              },
              axisLine: {
                show: false,
                // lineStyle: {
                //   color: '#fff',
                // },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              //  boundaryGap:true,
              axisLabel: {
                // formatter: (value, index) => {
                //   if (value.length >= 12) {
                //     value = value.slice(0, 12) + `\n` + value.slice(12);
                //   }
                //   if (value.length >= 26) {
                //     value = value.slice(0, 26) + `\n` + value.slice(26);
                //   }
                //   return value;
                // },
                show: true,// y刻度值是否显示
                textStyle: {
                  color: '#6A7088',
                  fontSize: 28
                },
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {// y轴刻度线
                show: false,
                // lineStyle: {
                //   color: '#fff',
                //   width: 1,
                //   opacity: 0.3,
                // },
              },
              data: getmydmc,
            }, {// 横向滚动条右侧值
              type: 'category',
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              show: true,
              axisLabel: {
                textStyle: {
                  color: '#B4BFEB',
                  fontSize: '1.75rem'
                },
                formatter: function (value) {
                  if (value) {
                    return (value).toLocaleString() + '%';
                  }
                },
              },
              data: getmyd,
            }
          ],
          dataZoom: [
            {
              type: 'inside',
              show: true,
              height: 30,
              start: 1,
              end: 100,
              orient: 'vertical',
              zlevel: 66,
            },
          ],
          series: [
            {
              name: '值',
              type: 'bar',
              // zlevel: 1,
              xAxisIndex: 0,
              itemStyle: {
                normal: {
                  // barBorderRadius: [0, 5, 5, 0],
                  color: {
                    colorStops: [// 设置渐变色
                      {
                        offset: 0,
                        color: '#74B9E7', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#74B9E7', // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              barWidth: 30,
              data: getmyd,
              z: 0,
            },
            {
              // 分隔
              type: 'pictorialBar',
              itemStyle: {
                normal: {
                  color: '#022539',
                },
              },
              symbolRepeat: 'fixed',
              symbolMargin: 8,
              symbol: 'rect',
              symbolClip: true,
              symbolSize: [3, 30],
              symbolPosition: 'start',
              symbolOffset: [-1, 0],
              data: getmydzd,
              z: 66,
              animationEasing: 'elasticOut',
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: 30,
              barGap: '-100%',
              xAxisIndex: 1,
              data: getmydzd,
              itemStyle: {
                normal: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(57, 58, 71, 0.4)', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(57, 58, 71, 0.4)', // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              z: 0,
            },
            // {
            //   // 外边框
            //   type: 'pictorialBar',
            //   symbol: 'rect',
            //   itemStyle: {
            //     normal: {
            //       color: 'none',
            //     },
            //   },
            //   data: getmyd,
            //   z: 77,
            //   animationEasing: 'elasticOut',
            // },
          ]
        })
      },
      // 柱图-班级数
      viewBir3(data) {
        let getmydmc = []; //名称
        let getmyd = []; //数值
        data.forEach(item => {
          getmyd.push(item.num);
          getmydmc.push(item.name);
        })
        let getmydzd = [];

        let big = 0;
        getmyd.forEach((el) => {
          if (!(el === undefined || el === '')) {
            if (big < Number(el)) {
              big = Number(el);
            }
          }
        });
        for (let i = 0; i < getmyd.length; i++) {
          getmydzd.push(big * 4);
        }
        //计算最大值
        function calMax(arr) {
          let max = 0;
          arr.forEach((el) => {
            el.forEach((el1) => {
              if (!(el1 === undefined || el1 === '')) {
                if (max < Number(el1)) {
                  max = Number(el1);
                }
              }
            });
          });
          let maxint = Math.ceil(max / 9.5);
          //不让最高的值超过最上面的刻度
          let maxval = maxint * 10;
          //让显示的刻度是整数
          return maxval;
        }
        var max = Math.ceil(calMax([getmyd]) / 10) * 10;

        let col = this.$refs.view_Bir3;
        let MyChart = this.$echarts.init(col)
        MyChart.setOption({
          title: {
            text: '班级数占比',
            x: '18%',
            y: 'top',
            textStyle: {
              color: '#6A7088',
              fontSize: 24,
              fontFamily:'PingFangSC-Regular, PingFang SC',
            },
          },
          grid: {
            left: '5%',
            right: '10%',
            bottom: '10%',
            top: '12%',
            containLabel: true,
          },
          tooltip: {
            formatter: (params) => {
              if (params.name !== '') {
                return params.name + ' : ' + getmyd[params.dataIndex];
              }
            },
            textStyle: {
              align: 'left',
            },
          },
          xAxis: [
            {
              type: 'value',
              axisLabel: {
                show: false,
                // margin: 5,
                // color: '#fff',
                // formatter: function (val) {
                //   return val + '';
                // },
                // textStyle: {
                //   fontSize: '13',
                // },
              },
              min: 0,
              max: max, // 计算最大值
              interval: max / 5, //  平均分为5份
              splitNumber: 5,
              splitLine: {
                show: false,
                // lineStyle: {
                //   color: '#fff',
                // },
              },
              axisLine: {// x轴刻度线
                show: false,
                // lineStyle: {
                //   color: '#fff',
                //   width: 1,
                //   opacity: 0.3,
                // },
              },
              axisTick: {
                show: false,
              },
            },
            {
              type: 'value',
              axisLabel: {
                show: false,
              },
              min: 0,
              max: max, // 计算最大值
              interval: max / 10, //  平均分为5份
              splitNumber: 10,
              splitLine: {
                show: false,
                // lineStyle: {
                //   type: 'dashed',
                //   color: '#D8D8D8',
                // },
              },
              axisLine: {
                show: false,
                // lineStyle: {
                //   color: '#fff',
                // },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              //  boundaryGap:true,
              axisLabel: {
                // formatter: (value, index) => {
                //   if (value.length >= 12) {
                //     value = value.slice(0, 12) + `\n` + value.slice(12);
                //   }
                //   if (value.length >= 26) {
                //     value = value.slice(0, 26) + `\n` + value.slice(26);
                //   }
                //   return value;
                // },
                show: true,// y刻度值是否显示
                textStyle: {
                  color: '#6A7088',
                  fontSize: 28
                },
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {// y轴刻度线
                show: false,
                // lineStyle: {
                //   color: '#fff',
                //   width: 1,
                //   opacity: 0.3,
                // },
              },
              data: getmydmc,
            }, {// 横向滚动条右侧值
              type: 'category',
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              show: true,
              axisLabel: {
                textStyle: {
                  color: '#B4BFEB',
                  fontSize: '1.75rem'
                },
                formatter: function (value) {
                  if (value) {
                    return (value).toLocaleString() + '%';
                  }
                },
              },
              data: getmyd,
            }
          ],
          dataZoom: [
            {
              type: 'inside',
              show: true,
              height: 30,
              start: 1,
              end: 100,
              orient: 'vertical',
              zlevel: 66,
            },
          ],
          series: [
            {
              name: '值',
              type: 'bar',
              // zlevel: 1,
              xAxisIndex: 0,
              itemStyle: {
                normal: {
                  // barBorderRadius: [0, 5, 5, 0],
                  color: {
                    colorStops: [// 设置渐变色
                      {
                        offset: 0,
                        color: '#74B9E7', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#74B9E7', // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              barWidth: 30,
              data: getmyd,
              z: 0,
            },
            {
              // 分隔
              type: 'pictorialBar',
              itemStyle: {
                normal: {
                  color: '#022539',
                },
              },
              symbolRepeat: 'fixed',
              symbolMargin: 8,
              symbol: 'rect',
              symbolClip: true,
              symbolSize: [3, 30],
              symbolPosition: 'start',
              symbolOffset: [-1, 0],
              data: getmydzd,
              z: 66,
              animationEasing: 'elasticOut',
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: 30,
              barGap: '-100%',
              xAxisIndex: 1,
              data: getmydzd,
              itemStyle: {
                normal: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(57, 58, 71, 0.4)', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(57, 58, 71, 0.4)', // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              z: 0,
            },
            // {
            //   // 外边框
            //   type: 'pictorialBar',
            //   symbol: 'rect',
            //   itemStyle: {
            //     normal: {
            //       color: 'none',
            //     },
            //   },
            //   data: getmyd,
            //   z: 77,
            //   animationEasing: 'elasticOut',
            // },
          ]
        })
      },
      // 饼图
      viewPic(data) {
        let labelValue = [];
        let addNum = 0;
        data.forEach(item => {
          addNum += item.num;
          labelValue.push({value:item.num,name:item.name});
        })
        let col = this.$refs.pic;
        let myChart = this.$echarts.init(col);
        myChart.setOption({
          // backgroundColor: '#2c343c',
          title: {// 饼图标题居中到饼图中间
            // text: '{a|' + addNum + '}\n{c|' + '备课总数' + '}',// 总数'{a|' + addNum + '}\n{c|' + '备课总数' + '}'
            // x: 'center',
            // y: 'center',
            // textStyle: {
            //   rich: {
            //     a: {
            //       fontSize: 36,
            //       color: '#29EEF3',
            //       fontFamily: 'PingFangSC-Regular, PingFang SC',
            //       // lineHeight:'3.125rem'
            //     },
            //     c: {
            //       fontSize: 20,
            //       color: '#ffffff',
            //       fontFamily: 'PingFangSC-Regular, PingFang SC',
            //       // lineHeight:'1.75rem'
            //       // padding: [5,0]
            //     }
            //   }
            // }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            icon: 'circle',
            bottom: '5%',
            left: 'center',
            itemWidth:20,
            itemHeight:20,
            itemGap: 76,
            textStyle:{
              fontSize: 20,//字体大小
              color: '#fff',//字体颜色
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
            name: 'Access From',
            type: 'pie',
            radius: ['20%', '80%'],// 饼图中空比例
            center: ['50%', '50%'],// 饼图大小比例
            avoidLabelOverlap: false,
            color: ['#FB497C','#FFC760','#6FE621','#4FCCFF','#4D7BF3'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            roseType: 'radius',// 参差不齐效果
            label: {
              normal: {
                show: false,
                position: 'center',
                formatter: '{value|{d}}%\n{label|{b}}',// 自定义显示当前选中块参数及名称
                rich: {
                    value: {
                        padding: 5,
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 30,
                    },
                    label: {
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 20,
                    },
                },
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                },
              },
            },
            // emphasis: {
            //   label: {// 饼图中心显示当前模块数据类型名称
            //     show: false,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            itemStyle: {// 饼图样式
              normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',// 设置阴影
                shadowBlur: 40,
              }
            },
            data: labelValue
          }
        ]
        })
       // 默认选中
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
      viewBir4(data) {
        let getmydmc = []; //名称
        let getmyd = []; //数值
        data.forEach(item => {
          getmyd.push(item.num);
          getmydmc.push(item.name);
        })
        let col = this.$refs.view_birStudent;
        let MyChart = this.$echarts.init(col)
        MyChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '0',
            right: '5%',
            bottom: '3%',
            top: '5%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              textStyle:{
                color:'#6A7088',
                fontSize:24
              }
            },
            axisLine: {
              lineStyle: {// 刻度线样式
                color: 'rgba(51, 51, 51, 1)'
              }
            },
            data: getmydmc
          },
          yAxis: {
            type: 'value',
            show:false,// 隐藏y轴刻度值
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {// y轴刻度线
              show: false,
            },
          },
          series: [
            {
              type: 'bar',
              barWidth: 50,
              itemStyle: {
                normal: {
                  // barBorderRadius: [0, 5, 5, 0],
                  color: {
                    colorStops: [// 设置渐变色
                      {
                        offset: 0,
                        color: '#74B9E7', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#74B9E7', // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              data: getmyd,
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