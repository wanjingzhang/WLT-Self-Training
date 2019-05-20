import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

// 1. 新建一个可以调用服务器事件的subscribeToTimer方法，
// 返回timer事件 到客户端
function subscribeToTimer(obj,cb) { 
    socket.on('timer', rankings => cb(null, rankings));
    socket.emit('subscribeToTimer', obj); 
}

export { subscribeToTimer}