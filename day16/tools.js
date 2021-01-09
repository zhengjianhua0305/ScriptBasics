//定义一个函数，用来向一个元素中添加指定的class属性值
/*
    参数:
        obj要添加class属性的元素
        cn要添加的class值
*/
function addClass(obj, cn) {
    //检查obj中是否含有cn
    if (!hasClass(obj, cn)) {
        //空格是保留原有，没有空格是替换
        obj.className += " " + cn;
    }
};
/*
    判断一个元素中是否函数有指定的class属性值
    如果有该class返回true，没有则返回false
*/
function hasClass(obj, cn) {
    //判断obj中有没有cn class
    //创建一个在正则表达式
    // var reg = /\bb2\b/;
    var reg = new RegExp('\\b' + cn + '\\b');
    // alert(reg);
    return reg.test(obj.className);
}

/*
    删除一个元素中的指定的class属性
*/
function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp('\\b' + cn + '\\b');
    //删除class
    obj.className = obj.className.replace(reg, "");
};

/*
    toggleClass可以用来切换一个类
    如果元素中具有该类，则删除
    如果元素中没有该类，则添加
*/
function toggleClass(obj, cn) {
    //判断obj中是否含有cn
    if (hasClass(obj, cn)) {
        //有，则删除
        removeClass(obj, cn);
    } else {
        //没有，则添加
        addClass(obj, cn);
    }
}