var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}



var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''

    if (pathWithQuery.indexOf('?') >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
    }

    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    if (path === '/') {
        var string = fs.readFileSync('./index.html', 'utf8')
        var amount = fs.readFileSync('./db', 'utf8')
        string = string.replace('&&&amount&&&', amount)
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(string)
        response.end()
    } else if (path === '/pay') {
        var amount = fs.readFileSync('./db', 'utf8')
        var newAmount = amount - 1//-号会自动将字符串转为数字
        fs.writeFileSync('./db', newAmount)
        response.statusCode = 200
        response.write(fs.readFileSync('./favicon.png'))
        response.end()
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write('呜呜呜')
        response.end()
    }
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请在浏览器中打开 http://localhost:' + port)