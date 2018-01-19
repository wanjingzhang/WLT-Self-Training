# Iterators

>An object is and `iterator` when it knows how to access items from a collection one at a time, 
>whild keeping track of its current position within that sequence. In JavaScript an iterators is
>an object that provides a `next()` method which returns the nex item in the sequence.
>This method returns an object with two properties: `done` and `value`.

>Once created, an iterator object can be used explicitly by repeatedly calling `next()`.

```javascript
function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

>Once initilized, the `next()` method can be called to access key-value pairs from the object in turn.