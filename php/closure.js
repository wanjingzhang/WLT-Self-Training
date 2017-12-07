// ---------用闭包模拟私有方法-----------------

// var Counter = (function(){
//   var privateCounter = 0;
//   function changeBy(val){
//     privateCounter += val;
//   }
//   return{
//     increment: function(){
//       changeBy(1);
//     },
//     decrement: function(){
//       changeBy(-1);
//     },
//     value: function(){
//       return privateCounter;
//     }
//   }


// })();
// alert(Counter.value());
// Counter.increment();
// Counter.increment();
// alert(Counter.value());
// Counter.decrement();
// alert(Counter.value());


// －－－－－－－－－用闭包创建循环－－－－－－－－－－－
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
