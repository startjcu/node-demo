let request = new XMLHttpRequest()

/** 配置请求报文 */
//第一部分
request.open('POST', '/pay')
//第二部分
request.setRequestHeader('Content-Type', 'x-www-form-urlencoded')
//第四部分
request.send('?a=1&b=2')
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status === 200) {
            window.JSON.parse(request.responseText)
        }
        /** 获取响应报文 */
        //第一部分
        request.status //获取HTTP状态码
        request.statusText //获取HTTP状态码解释文本
        //第二部分
        request.getAllResponseHeaders() //获取所有响应头
        request.getResponseHeader('Content-Type') //获取指定响应头
        //第四部分
        request.responseText //获取响应体
    }
}

window.jQuery.ajax = ({ url, method, body, success, fail }) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            console.log(xhr.status)
            if (xhr.status >= 200 && xhr.status < 300) {
                success(xhr.response)
            } else if (xhr.status >= 400) {
                fail(xhr)
            }
        }
    }
    xhr.send(body)
}

window.jQuery.ajax = ({ url, method, body }) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                console.log(xhr.status)
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response)
                } else if (xhr.status >= 400) {
                    reject(xhr)
                }
            }
        }
        xhr.send(body)
    })
}