//获取一组数据的最大最小值
var arrDemo = [13, 25, 3, 9, 4]

function getMax(arr) {
    var max = arr[1]
    for (var i = 0; i < arr.length; i++) {
        max = arr[i] > max ? arr[i] : max;
    }
    return max;
}

function getMin(arr) {
    var min = arr[1]
    for (var i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
    }
    return min;
}

console.log(getMax(arrDemo), getMin(arrDemo))