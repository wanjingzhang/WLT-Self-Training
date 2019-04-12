# Generators
>While custom iterators are a useful tool, their creation requires careful programming due to 
>the need to explicitly maintain their internal state.Generators provide a powerful alternative: 
>they allow you to define a interative algorithm by writing a single witch can maintain its own state.

>A GeneratorFuntion is a special type of function that works as a factory for iterators.
>When it is executed it returns a new Generator object.A function becomes a GeneratorFunction if it uses
>the function* syntax.

```javascript
function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

# Iterables
>An object is iterable if it defines its iteration behavior, such as what values are looped over in a 
>`for...of` construct. Some built-in types, such as `Array` or `Map`, have a default interation behavior,
>while other types(such as `Object`)do not.
>In order to be iterable, an object must implement the @@iterator method, meaning that the object
>(or one of the objects up its prototype chain)must have a property with a `Symbol.iterator` key:

#### User-defined iterables
>We can make our own iterables like this:

```javascript
var myIterable = {};
myIterable[Symbol.iterator] = function*(){
  yield 1;
  yield 2;
  yield 3;
}

for(let value of myIterable){
  console.log(value);
}
```

#### Built-in iterables
>`String`, `Array`, `TypedArray`, `Map` and `Set` are all built-in interrables, because their 
>prototype objects all have a `Symbol.iterator` method.

#### Syntaxes expecting iterables
>Some statements and expressions are expecting iterables, for example the `for-of` loops,
>`spread syntax`, `yield*`, and `destructuring assignment`.
```javascript
for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c" 

function* gen() {
  yield* ['a', 'b', 'c'];
} 
gen().next(); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
a; // "a"
```

# Advanced generators
>Generators compute their yielded value on demand, which allows them to efficiently
>represent sequences that are expensive to computer, or even infinite sequences as demonstrated above.

>The `next()` method also accepts a value witch can be used to modify the internal statue of the generator.
>A value passed to `next()` will be treated as the result of the last yield expression that paused the generator.

>Here is a fibonacci generator using `next(x)` to restart the sequence:
```javascript
function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {  
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
```
>You can force a generator to throw an exception by calling its `throw()` method 
>and passing the exception value is should throw.This exception will be thrown frome the 
>current suspended context `挂起上下文` of the generator, as if the `yield` that is currently suspended 
>were instead a throw value statement. 

>If a `yield` is not encountered during the processing of the thrown exception, then the
>exception will progpagate up `传播` through the call to `throw()`, and subsequent calls to `next()`
>will result in the `done` property being true.
