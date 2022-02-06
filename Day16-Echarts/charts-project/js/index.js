// 监控区域模块制作
(function() {
    $(".monitor ,tabs").on("click", "a", function() {
        $(this).addClass("active")
            .siblings("a")
            .removeClass("active");

        //选取对应索引号的content
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
    })
})();
// 点位分布统计模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2.指定配置项和数据
    var option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        series: [{
            name: 'Area Mode',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            //修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            //修饰引导线样式
            labelLine: {
                //连接到图形的线长度
                length: 6,
                //连接到文字的线长度
                length2: 8
            },
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ]
        }]
    };
    // 3.配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4.当我们浏览器缩放的时候，图标也等比例缩放
    window.addEventListener("resize", function() {
        //让我们的图标调用 resize这个方法
        myChart.resize();
    })
})();
// 柱形图模块
(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar'));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            // axisPointer: {            // 坐标轴指示器，坐标轴触发有效  这个模块我们此时不需要删掉即可
            // type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            // }
        },
        //修改线性渐变色方式1
        // color: new echarts.graphic.LinearGradient(
        //     // (x1,y2) 点到点 (x2,y2) 之间进行渐变
        //     0, 0, 0, 1, [
        //         { offset: 0, color: '#00fffb' }, // 0 起始颜色
        //         { offset: 1, color: '#0061ce' } // 1 结束颜色
        //     ]
        // ),
        // 修改线性渐变色方式2
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0061ce' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        // 直角坐标系内绘图网格（区域）

        grid: {
            top: '3%',
            left: '0%',
            right: '3%',
            bottom: '3%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            // 刻度设置
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间

                alignWithLabel: false,
                // 不显示刻度
                show: false,
            },
            // x坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
        }],
        // 控制y轴
        yAxis: [{
            // 使用类目，必须有data属性
            type: 'value'
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }]
    };
    // 3.把配置给实例对象
    myChart.setOption(option);
})()