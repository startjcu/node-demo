var APP_ID = 'NMVYOmTcg6Q12SXhDXsYea4T-gzGzoHsz';
var APP_KEY = '40SHzMyvR60r8eNX1INyjhNx';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 添加数据
let myForm = document.querySelector('#postMessage');
myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var content = myForm.querySelector('input[name=content]').value;
  var user = myForm.querySelector('input[name=user]').value;
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.set({ 'user': user, 'content': content });
  message.save().then(function (res) {
    var li = document.createElement('li')
    li.innerText = res.attributes.user + ': ' + res.attributes.content
    var span = document.createElement('span')
    span.innerText = res.createdAt.toLocaleDateString()
    li.appendChild(span)
    messageList.appendChild(li)
    document.querySelector('input[name=content]').value = ''
  })
})

// 查询数据
var query = new AV.Query('Message');
query.find().then(function (res) {
  res.forEach(item => {
    var li = document.createElement('li')
    li.innerText = item.attributes.user + ': ' + item.attributes.content
    var span = document.createElement('span')
    span.innerText = item.createdAt.toLocaleDateString()
    li.appendChild(span)
    messageList.appendChild(li)
  })
});