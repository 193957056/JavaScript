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
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
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