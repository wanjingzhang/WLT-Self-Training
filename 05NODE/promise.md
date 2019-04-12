# Promise 
>A `Promise` is proxy for a value not necessarily know when the promise is created.

#### Syntax
```javascript
new Promise(/* executor */ function(resolve, reject){ ... });
```
>Parameters
>A function that is passed with the arguments `resolve` and `reject`.The `executor`
>function is executed immediately by the Promise implementation, passing `resolve` 
>and `reject` functions(the executor is called before the `Promise` constructor even
>returns the created object). The `resolve` and `reject` functions, when called, resolve or
>reject the promise, respectively.

#### Description
>A `Promise` is a proxy for a value not necessarily known when the promise is created. 
>It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
>This lets asynchronous methods return values like synchronous methods: instead of immediately returning the 
>final value, the asynchronous method returns a promise to supply the value at some point in the future.

###### A Promise is in one of these states:
* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.

#### Methods
* Promise.all(iterable)
>Returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects. If the returned promise fulfills, it is fulfilled with an array of the values from the fulfilled promises in the same order as defined in the iterable. If the returned promise rejects, it is rejected with the reason from the first promise in the iterable that rejected. This method can be useful for aggregating results of multiple promises.
* Promise.race(iterable)
>Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise.
* Promise.reject(reason)
>Returns a Promise object that is rejected with the given reason.
* Promise.resolve(value)
>Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise.

#### Promise prototype
* Promise.prototype.catch(onRejected) 
* Promise.prototype.then(onFulfilled, onRejected) 
* Promise.prototype.finally(onFinally) 

# Examples 
```javascript
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
```

# Advanced Example
```javascript
'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
       (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // This is only an example to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // We define what to do when the promise is resolved with the then() call,
    // and what to do when the promise is rejected with the catch() call
    p1.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
    .catch(
        // Log the rejection reason
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}
```