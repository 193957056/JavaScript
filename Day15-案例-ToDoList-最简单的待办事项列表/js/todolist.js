$(function() {
    // alert(11);
    $("#title").on("keydown", function(event) {
        if (event.keyCode == 13) {
            // alert(11);
            // 先读取本地存储原来的数据、
            var local = getDate();
            console.log(local);
            //把local数组进行更新数据 把最新的数组追加给local数组
            local.push({ title: $(this).val(), done: false });
            //把这个数组local 存储给本地存储
            saveDate(local);

        }
    })


    //读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            //本地存储里面的数据是字符串格式的 但是我们需要的是对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    //保存本地存储数据
    function saveDate(date) {
        localStorage.setItem("todolist", JSON.stringify(date));
    }
})