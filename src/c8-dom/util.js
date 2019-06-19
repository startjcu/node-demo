//添加命名空间，不会覆盖全局变量
window.jQuery = function (nodeOrSelector) {
    let node
    if (typeof nodeOrSelector === 'string') {
        node = this.document.querySelector(nodeOrSelector)
    } else {
        node = nodeOrSelector
    }
    return {
        //封装一个获取兄弟节点的函数
        getSibling: function (node) {
            var arr = { length: 0 }
            for (let i = 0; i < childEles.length; i++) {
                if (childEles[i] !== node) {
                    arr[arr.length] = childEles[i]
                }
                arr.length++
            }
            return arr
        },
        //添加或删除类
        editClass: function (node, arr) {
            for (let key in arr) {
                var methodName = arr[key] ? 'add' : 'remove'
                node.classList[methodName](key)
            }
        }
    }
}

window.$ = jQuery

window.jQuery = function (nodeOrSelector) {
    //根据传入的参数，执行不同的操作
    let nodes = {}
    //如传入的参数是个字符串，那么这个字符串应该是一个选择器，根据这个选择器获取一组DOM元素
    if (typeof nodeOrSelector === 'string') {
        let temp = document.querySelectorAll(nodeOrSelector)
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes['length'] = temp.length
        //若用户传入的本身就是一个DOM元素，直接构建成一个伪数组
    } else if (nodeOrSelector instanceof Node) {
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    } else {
        //若用户传入的是一组元素，将其遍历构建一个伪数组
        for (let i = 0; i < nodeOrSelector.length; i++) {
            nodes[i] = nodeOrSelector[i]
        }
        nodes['length'] = nodeOrSelector.length
    }

    //给nodes元素添加Text方法
    nodes.Text = function (text) {
        //若传入的文本为空，则给获取每个元素的文本节点
        if (text === undefined) {
            let texts = []
            for (let i = 0; i < nodes.length; i++) {
                texts[i] = nodes[i].textContent
            }
            return texts
        } else {
            //若传入参数不为空，则将参数设为每个元素的文本
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }
    }
    nodes.addClass = function (classes) {
        for (let key in classes) {
            for (let i = 0; i < nodes.length; i++) {
                let methodName = classes[key] ? 'add' : 'remove'
                nodes[i].classList[methodName](key)
            }
        }
    }
    return nodes
}

//将jQuery赋值给一个简单符号，方便调用
window.$ = window.jQuery

$('div').Text('hi')
$('div').addClass({
    'red': true,
    'green': false
})

