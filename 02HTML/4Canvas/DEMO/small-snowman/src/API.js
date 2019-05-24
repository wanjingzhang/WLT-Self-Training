import openSocket from 'socket.io-client';
const socket = openSocket('http://172.26.13.43:8000');

// 1. 新建一个可以调用服务器事件的subscribeToTimer方法，
// 返回timer事件 到客户端
function subscribeToTimer(obj,cb) { 
    socket.on('timer', rankings => cb(rankings));
    // console.log("subscribeToTimer 1",obj);
    socket.emit('subscribeToTimer', obj); 
}

function getInitData(cb) {
    socket.on('getData', rankings => cb(rankings));
    socket.emit('getInitData');
}


/**
 * 接入 socket， 调用、回调刷新数据
 */
export { subscribeToTimer, getInitData}