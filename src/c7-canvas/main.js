var canvas = document.getElementById('canvas')
var flag = false
canvas.onmousedown = function (e) {
    flag = true
    var clientX = e.clientX
    var clientY = e.clientY
    var divChild = document.createElement('div')
    divChild.style = `
        width: 6px; 
        height: 6px; 
        background: black; 
        border-radius: 3px; 
        position: absolute; 
        left: ${clientX - 3}px; 
        top: ${clientY - 3}px;`
    canvas.appendChild(divChild)
}

canvas.onmousemove = function (e) {
    if (flag) {
        var clientX = e.clientX
        var clientY = e.clientY
        var divChild = document.createElement('div')
        divChild.style = `
        width: 6px; 
        height: 6px; 
        background: black; 
        border-radius: 3px; 
        position: absolute; 
        left: ${clientX - 3}px; 
        top: ${clientY - 3}px;`
        canvas.appendChild(divChild)
    }

}

canvas.onmouseup = function (e) {
    flag = false
}