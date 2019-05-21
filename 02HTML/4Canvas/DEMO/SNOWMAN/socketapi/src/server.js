// 1. 导入构建socket，使用io变量
const io = require('socket.io')();
var rankings = new Array();

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
    // 添加新的数据
    client.on('subscribeToTimer', (rank) => {
        console.log('client submit the rank obj:', rank);

        // 插入数据，然后进行潘旭
        rankings.push(rank); 
        rankings.sort((a, b) => {
            return b.score - a.score;
        })  
        
        if (rankings.length >= 10) { //删除最后一个数据
            rankings.pop();
        }

        console.log('server return the ranking list:' , rankings);
        client.emit('timer', rankings); 
        client.emit('getData', rankings);
    })

    // 获取初始化数据
    client.on('getInitData', () => {
        client.emit('getData',rankings);
    })

    // 实时同步数据
    
 
});

// 3. 完成之后，需要告诉socket.io去开始监听客户端
const port = 8000;
io.listen(port);
console.log('listening on port', port);