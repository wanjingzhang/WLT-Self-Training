// 1. 导入构建socket，使用io变量
const io = require('socket.io')();


// 2. Websocket在client和server中使用两个频道
// 最重要的事情是处理客户和服务器的连接，所以发布一个emit事件到客户端
// io.on('connect', (client) => {
//     // 在此开始发送emitting事件去客户端 
// })



// 4. 使用 node src/server.js 启动8000端口
// 此刻服务器正在监听 listening on port 8000 

// 5. 在服务器端开始一个计时器，返回给客户当前的数据
// 我们希望服务器可以为每个客户开始一个计时器，用户可以传如想要的间隔时间
// 客户可以通过服务端接口发送数据，

io.on('connect', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subcribing to timer with interval', interval);setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    })

    
});

// 3. 完成之后，需要告诉socket.io去开始监听客户端
const port = 8000;
io.listen(port);
console.log('listening on port', port);