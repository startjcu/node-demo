var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
	console.log('please give a port')
	process.exit(1)
}

var server = http.createServer(function(request, response){
	var parsedUrl = url.parse(request.url, true)
	var path = request.url
	var query = ''
	if(path.indexOf('?') >= 0){
		query = path.substring(path.indexOf('?'))
	}
	var pathNoQuery = parsedUrl.pathname
	var queryObject = parsedUrl.query
	var method = request.method
	/**************************/
	console.log('HTTP 路径为\n' + path)
	if(path == '/style.js'){
		response.setHeader('Content-Type', 'text/css; charset=utf-8')
		response.write('body{background-color: #ddd;}h1{color: red;}')
		response.end()
	}else if(path == '/script.html'){
		response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
		response.write('alert("这是JS执行的")')
		response.end()
	}else if(path == '/index.css'){
		response.setHeader('Content-Type', 'text/html; charset=utf-8')
		response.write('<!DOCTYPE>\n<html>'  + 
			'<head><link rel="stylesheet" href="/style.js">' +
			'</head><body>'  +
			'<h1>你好</h1>' +
			'<script src="/script.html"></script>' +
			'</body></html>')
		response.end()
	}else{
		response.statusCode = 404
		response.end()
	}
	/**
	 * 有后缀的不一定就是一个文件，也不能通过后缀判断文件类型
	 * HTTP路径不是文件路径！！！
	 */
	/**************************/
})

server.listen(port)
console.log('listening on ' + port + '...')
