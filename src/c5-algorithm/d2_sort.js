/** 冒泡排序，从右往左排
  * 
  * 两两对比，若左边的元素 > 右边的元素，则交换两元素的位置
  * 第一次，即可将数组中最大的元素排到最右边
  * 第二次，再排剩下的arr.length-1个元素，可排出第二大的元素
  * 依此类推...一共排arr.length-1次即可排完所有元素
  */
function sortByBubble(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //ES6交换两变量的值的方法
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
var arrDemo1 = [13, 25, 3, 9, 4, 21, 4, 4]
console.log(sortByBubble(arrDemo1))

/** 选择排序(一指禅法)，从左往右排
  * 
  * 第一次，遍历整个数组，找出最小的元素，获取其位置，与首个元素交换位置，即可确定最小的元素
  * 第二次，遍历余下arr.length-1元素，找出其中最小的元素，将它与第二个位置上元素交换位置
  * 依此类推...通过arr.length-1次查找，即可排完整个数组
  */
function sortBySelection(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = arr[i]
        for (var j = i; j < arr.length; j++) {
            min = arr[j] < min ? arr[j] : min
        }
        //此处查找范围必须指定，不然具有相同值的数组会出现BUG
        var index = arr.indexOf(min, i)
        arr[index] = arr[i]
        arr[i] = min
    }
    return arr
}
var arrDemo2 = [13, 25, 3, 9, 4, 21, 4, 4]
console.log(sortBySelection(arrDemo2))

/** 插入排序(起扑克牌法)
  * 
  * 将原数组中的元素一个一个的放入新数组中
  * 第一个元素，直接放入新数组不用排
  * 第二个元素，和第一个元素比较，大于就放在它后面，小于就放在它前面
  * 第三个元素，循环地与新数组中的所有元素比对：
  * 若是遇到大于它的元素，就停止比对，将它放到那(第一个大于它的)元素之前
  * 若是没有找到大于它的元素，就放到新数组最后
  * 依此类推...将原数组中的所有元素都放入新数组后，新数组即为排序好的结果
  */
function sortByInsertion(arr) {
    var arrNew = [arr[0]]
    for (var i = 1; i < arr.length; i++) {
        var flag = false
        for (var j = 0; j < arrNew.length; j++) {
            if (arrNew[j] > arr[i]) {
                arrNew.splice(j, 0, arr[i])
                flag = true
                break
            }
        }
        //逻辑表达式返回能决定整个表达式真假的那个表达式的值
        flag || arrNew.push(arr[i])
    }
    return arrNew
}
var arrDemo3 = [13, 25, 3, 9, 4, 21, 4, 4]
console.log(sortByInsertion(arrDemo3))

/** 计数排序(强迫症收扑克牌法)
  * 用于排序范围不是很大的数组排序，空间换时间，效率比较高，无法对小数和负数排序
  * 
  * 入桶
  * 将原数组中的每一个数，都作为arrIn数组的索引
  * arrIn数组索引的值对应的是，原数组中(值为当前索引的)元素的个数
  * 出桶
  * 再从arrIn数组中提取出元素不为undefined的(对应元素个)索引值，放入arrOut数组中
  * arrOut数组即为排序好的数组
  */
function sortByCounting(arr) {
    //入桶
    var arrIn = []
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i]
        if (!arrIn[index]) {
            arrIn[index] = 1
        } else {
            arrIn[index]++
        }
    }
    //出桶
    var arrOut = []
    for (var j = 0; j < arrIn.length; j++) {
        var count = arrIn[j]
        while (count) {
            arrOut.push(j)
            count--
        }
    }
    return arrOut
}
var arrDemo4 = [13, 25, 3, 9, 4, 21, 4, 4]
console.log(sortByCounting(arrDemo4))

/** 其他排序
  * 
  * 1、桶排序
  * 一个桶放一个范围内的数据，然后在桶内使用其他排序方法，
  * 桶和桶之间的对比是独立的，减少对比次数，较计数排序减少了若干倍桶
  * 
  * 2、基数排序
  * 十个桶0~10，按位排，先排个位，再排十位，再排百位，依此类推...适用于大范围内的排序，节约空间
  * 
  * 3、二分排序(快速排序)
  * 以一个元素为基准，小于它的排左边，大于它的排右边，排一次就能将这个元素在排好序的数组中的位置了
  * 剩余的元素再按此方法排，只不过左边的只需要和左边比，右边的只需要和右边比，可以大大减少比对次数
  * 
  * 4、堆(二叉堆)排序
  * 建立在最大堆(父级总比子级大)调整的基础上
  */
