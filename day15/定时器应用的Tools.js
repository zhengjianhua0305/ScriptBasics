function move(obj, attr, target, speed, callback) {
    //在开启定时器前关闭上一个定时器
    clearInterval(obj.timer);
    //获取目前元素的位置
    var currentValue = parseInt(getStyle(obj, attr));
    //获取元素目前的位置
    //判断速度的正负值,如果从0向800移动，则speed为正,如果从800向0一欧东，则speed为负
    if (currentValue > target) {
        //此时速度应该为负值
        speed = -speed;
    }
    //开启一个定时器，用来执行动画效果
    //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
    obj.timer = setInterval(function () {
        //获取box1原来的left值,parsetInt取出合法数字
        var oldValue = parseInt(getStyle(obj, attr));
        //在旧值的基础上自增
        var newValue = oldValue + speed;
        //判断newValue是否小于等于0
        //向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if ((speed < 0 && newValue <= target) || (speed > 0 && newValue >= target)) {
            newValue = target;
        }
        //将新值设置给box1
        obj.style[attr] = newValue + 'px';
        //当元素移动到0px时停止动画
        if (newValue == target) {
            //到达目标关闭定时器
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            callback && callback();
        }
    }, 30);
};

//获取元素当前正在显示的样式
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        //正常浏览器
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8
        return obj.currentStyle[name];
    }
}