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
    var item = {
            name: '',
            value: 1200,
            // 修改当前柱形的样式
            itemStyle: {
                color: '#254065'
            },
            // 鼠标放到柱子上不想高亮显示
            emphasis: {
                itemStyle: {
                    color: "#254065"
                }
            },
            tooltip: {
                extraCssText: "opacity:0"
            }

        }
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
            // series
            data: ["上海", "广州", "北京", "深圳", "合肥", "", "……", "", "厦门", "济南", "成都", "重庆"],
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
            type: 'value',
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            },
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    };
    // 3.把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
// 订单功能
(function() {
    // 1. 准备数据
    var data = {
            day365: ['20,301,987', '99834'],
            day90: ['301,987', '9834'],
            day30: ['1,987', '3834'],
            day1: ['987', '834']
        }
        // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)')
        // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order').on('click', '.filter a', function() {
            // 2. 点击切换激活样式
            $(this).addClass('active').siblings().removeClass('active')
                // 3. 点击切换数据
                // console.log(data[this.dataset.type]);
            var arr = data[this.dataset.type];
            // console.log(arr[0]);
            // console.log(arr[1]);
            // var currdata = data[this.dataset.key]
            $h4Orders.html(arr[0]);
            $h4Amount.html(arr[1]);
        })
        // 4. 开启定时器切换数据
    var index = 0
    var $allTab = $('.order .filter a')
    setInterval(function() {
        index++
        if (index >= 4) index = 0
        $allTab.eq(index).click()
    }, 5000)
})();
// 销售统计模块
(function() {
    // (1)准备数据
    var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    var option = {
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        color: ['#00f2f1', '#ed3f35'],
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        series: [{
            name: '预期销售额',
            data: data.year[0],
            type: 'line',
            // 折线修饰为圆滑
            smooth: true,
            itemStyle: {
                color: '#00f2f1'
            },
            data: data.year[0]
        }, {
            name: '实际销售额',
            data: data.year[0],
            type: 'line',
            smooth: true,
            itemStyle: {
                color: '#ed3f35'
            },
            data: data.year[1]
        }]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    // 4.tab切换小伙制作

    //(2)切换
    $('.sales .caption').on('click', 'a', function() {
            index = $(this).index() - 1;
            //点击当前a 高亮显示 调用active
            $(this).addClass('active').siblings('a').removeClass('active');

            // currData 当前对应的数据  
            // this.dataset.type 标签上的data-type属性值，对应data中的属性
            // console.log(this.dataset.type);
            // console.log(data.year);
            // console.log(data["year"]);
            // console.log(data[this.dataset.type]);
            var arr = data[this.dataset.type];
            //修改图标1的数据
            // 根据拿到的数据重新渲染 series里面的data值
            option.series[0].data = arr[0];
            //修改图标2的数据
            option.series[1].data = arr[1];
            //重新把配置好的新数据给实例对象
            myChart.setOption(option);
        })
        // 5.tab栏自动切换效果
        // 开启定时器每隔3s,自动让a触发点击事件即可
    var as = $(".sales .caption a");
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 4) {
            index = 0;
        }
        as.eq(index).click();
    }, 1000);
    // 鼠标经过sales,关闭定时器,离开开启定时器
    $(".sales").hover(
        function() {
            clearInterval(timer);

        },
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 4) {
                    index = 0;
                }
                as.eq(index).click();
            }, 1000);
        })
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

// 销售渠道模块 雷达图
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置

    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ["60%", "10%"]
        },
        radar: {
            // 雷达图的指示器 内部填充数据
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            // 修改雷达图的大小
            radius: "65%",
            center: ['50%', '50%'],
            shape: "circle",
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 坐标轴在 grid 区域中的分隔线（圆圈）
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明 坐标轴轴线相关设置(竖线)axisLine
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [{
            name: "北京",
            type: "radar",
            // 填充区域的线条颜色
            lineStyle: {
                normal: {
                    color: "#fff",
                    width: 1,
                    opacity: 0.5
                }
            },
            data: [
                [90, 19, 56, 11, 34]
            ],
            // 设置图形标记 （拐点）
            symbol: "circle",
            // 这个是设置小圆点大小
            symbolSize: 5,
            // 设置小圆点颜色
            itemStyle: {
                color: "#fff"
            },
            // 让小圆点显示数据
            label: {
                show: true,
                fontSize: 10
            },
            // 修饰我们区域填充的背景颜色
            areaStyle: {
                color: "rgba(238, 197, 102, 0.6)"
            }
        }]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 销售模块 饼形图 半圆形 设置方式
(function() {
    var myChart = echarts.init(document.querySelector('.gauge'));
    var option = {
        series: [{
            name: "销售进度",
            type: "pie",
            radius: ["130%", "150%"],
            //是否启用防止标签重叠策略
            // avoidLabelOverlap: false,
            // 移动下位置  套住50%文字
            center: ['48%', '80%'],
            label: {
                normal: {
                    show: false
                }
            },
            //起始角度，支持范围0-360
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            hoveroffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d
                { value: 200, itemStyle: { color: 'transparent' } } // 透明隐藏第三块区域
            ],

        }]
    };
    myChart.setOption(option);
})();
// 全国热榜
(function() {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];
    //2.根据数据渲染各省热销sup模块内容
    var supHTML = "";
    // （1）.遍历hotData对象
    $.each(hotData, function(index, item) {
        // console.log(item.city);
        supHTML += `<li>
        <span>${item.city}</span>
        <span>${item.sales} <s class=${item.flag?"icon-up" : "icon-down"}></s></span>
    </li>`;
    });
    $('.sup').html(supHTML);
    // 3.当鼠标进入tab的时候 会高亮
    $('.province .sup').on("mouseenter", "li", function() {
        index = $(this).index();
        render($(this));
    });
    // 声明一个函数 里面设置sup当前小li高亮还有 对应的品牌对象渲染
    function render(that) {
        that.addClass('active').siblings().removeClass();
        var subHTML = "";
        $.each(hotData[that.index()].brands, function(index, item) {
            subHTML += `<li>
            <span>${item.name}</span>
            <span>${item.num} <s class=${item.flag?"icon-up" : "icon-down"}></s></span>
        </li>`;
        });
        $('.sub').html(subHTML);
    }
    // 4.默认把第一个小li处于鼠标经过状态
    var lis = $('.province .sup li');
    lis.eq(0).mouseenter();
    //5.开启定时器
    var index = 0;
    var timer = setInterval(function() {
        index++;
        render(lis.eq(index));
    }, 1000);
    $(".province .sup").hover(function() {
        // 鼠标经过事件
        clearInterval(timer);
    }, function() {
        // 鼠标离开事件
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= 5) {
                index = 0;
            }
            render(lis.eq(index));
        }, 1000);
    })

})();