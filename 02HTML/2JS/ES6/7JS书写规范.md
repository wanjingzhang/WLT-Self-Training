source from https://github.com/airbnb/javascript#types

## 1. References
### 1.1 确保无法重新分配引用，这可以导致错误或者难以理解代码。
> 给你所以的引用使用const关键字，避免使用var。
```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```
### 1.2 let 是块作用域而不是函数作用域重新分配引用使用let而不是var.
> 注意let和const都是块范围
```javascript
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}

// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError

```

## 2. Object
#### 2.1 使用文字语法创建对象
``` javascript
// bad
const item = new Object();

// good
const item = {};
```
const item = {};
#### 2.2 使用对象速记法
```javascript
// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```
#### 2.3 使用属性速记
```javascript
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};

```
#### 2.4 在对象申明的开始放置速写属性
```javascirpt
// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```
#### 2.5 不要直接使用 Object.prototype 方法, 例如 hasOwnProperty, propertyIsEnumerable, 和 isPrototypeOf
```javascript
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
// ...
console.log(has.call(object, key));
```


## 3. Array
#### 3.1 使用数组语法创建数组
```javascript
// bad
const items = new Array();
// good
const items = [];
```

#### 3.2 使用push方法比直接指定数值要好
```javascript
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```
#### 3.3 使用 ... 复制数组.
```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```
#### 3.4 把对象迭代成数组使用...方法而不是使用Array.froms 
```javascript
const foo = document.querySelectorAll('.foo');
// good
const nodes = Array.from(foo);
// best
const nodes = [...foo];
```
#### 3.5 使用 Array.from 代替 ... for 便利迭代器, 因为可以避免使用中间数组
```javascript
// bad
const baz = [...foo].map(bar);
// good
const baz = Array.from(foo, bar);
``` 
#### 3.6 在数组方法中使用return返回
```javascript
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map(x => x + 1);
```

#### 3.7 如果数组有多行的情况，在开始和结束内换行
```javascript
// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```
## 4. Destructuring
#### 4.1 当使用多个对象的属性时，使用对象结构方法
```javascript
// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
#### 4.2 使用数组结构
```javascript
const arr = [1, 2, 3, 4];
// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```
## 5. Strings
#### 5.1 字符串超过100个字符的需要不要使用断行符
```javascript
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

```
#### 5.2 使用模版字串代替拼写字串
```javascript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
} 

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```
#### 5.3 不要不必要的过多使用分号
```javascript
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```
## 6. Functions
#### 6.1 ECMA-262 定义了一组申明. 一个方法申明不是一个表达式.
```javascript
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```
#### 6.2 不要使用arguments做参数 它将会优先使用方法的arguments参数.
```javascript
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
```
#### 6.3 不要arguments,而是选择使用 ...
```javascript
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```
#### 6.4 默认参数总是放在参数的最后面
```javascript
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```
#### 6.5 不要使用Function关键之新建方法 
```javascript
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```
#### 6.6 永远不要改变参数
```javascript
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
```
#### 6.7 不要在指定方法的参数.
```javascript
// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}
```
#### 6.8 使用...方法
```javascript
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);
```
## 7. Arrow function
#### 7.1 在使用匿名函数时使用箭头函数
```javascript
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```
#### 7.2  If the function body consists of a single statement returning an expression without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a return statement.
// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// No implicit return with side effects
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
  bool = true;
});

#### 7.3  If your function takes a single argument and doesn’t use braces, omit the parentheses.
// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map(number => (
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

// bad
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

#### 7.4 Avoid confusing arrow function syntax (=>) with comparison operators (<=, >=)
// bad
const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item) => {
  const { height, largeSize, smallSize } = item;
  return height > 256 ? largeSize : smallSize;
};

## 8. Classes & Constructors
#### 8.1 Always use class
// good
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}
#### 8.2 Use extends for inheritance
// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
#### 8.3 Methods can return this to help with method chaining.
// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);

#### 8.4 It's okay to writer a custom toString() method, just make sure it works successfully and causes no side efforts.
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}

#### 8.5 Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. eslint:
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}

## 9. Module
#### 9.1 Always use modules (import/export) over a non-standard module system. You can always transpile to your preferred module system.
Modules are the future, let's start using the future now.

// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;

#### 9.2 Do not use wildcard imports.
// bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// good
import AirbnbStyleGuide from './AirbnbStyleGuide';

#### 9.3 Do not export mutable bindings. Mutation should be avoided in general, but in particular when exporting mutable bindings.

// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };

#### 9.4 In modules with a single export, prefer default export over named export
// bad
export function foo() {}

// good
export default function foo() {}

#### 9.5 Put all imports above non-import statements.
// bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';

foo.init();

#### 9.6 Multiline imports should be indented just like multiline array and object literals
// bad
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

// good
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';

#### 9.7 Disallow Webpack loader syntax in module import statements.
// bad
import fooSass from 'css!sass!foo.scss';
import barCss from 'style!css!bar.css';

// good
import fooSass from 'foo.scss';
import barCss from 'bar.css';

## 10. Iterators and Generators
#### 10.1 Don't use iterators. Pefer Javascript's higer-order functions instead of loops for-in for for-of.
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne = numbers.map(num => num + 1);


#### 10.3 If you must use generators, or if your disregard our advice, make sure their function
signature is spaced properly.
// good
function* foo() {
  // ...
}

// good
const foo = function* () {
  // ...
};

## 11. Properties
#### 11.1 Use dot notation when accessing properties.
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;

#### 11.2 Use bracket notation [] when accessing properties with a variable.
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');

#### 11.3 Use exponentiation operator ** when calculating exponetiations.
// bad
const binary = Math.pow(2, 10);

// good
const binary = 2 ** 10;

## 12. Variables
#### 12.1 Always use const or let to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();

#### 12.2 Use one const or let declaration per variable.
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';

#### 12.3 Group all your consts, and group all your let's.
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;

#### 12.4 Don't chain variable assigments.
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`

#### 12.5 Avoid using unary increments and decrements(++,--).
// bad

const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// good

const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;

#### 12.6 Avoid linebreaks before or after = in an assignment. If your assignment violates max-len, surround the value in parens.
// bad
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo
  = 'superLongLongLongLongLongLongLongLongString';

// good
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongString';

## 13. Hoisting
#### 13.1 Use shortcuts for booleans, but explicit comparisons for strings and numbers.

// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}

#### 14.4 Use braces to create blocks in case and default clauses that contain lexical declarations (e.g. let, const, function, and class).
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}

#### 14.6 Tarnaries should not be nested and generally be single line expression.
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;

14.7 Avoid unneeded ternary statements.
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;

#### 14.8 When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators since their precedence is broadly understood.
// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const bar = a ** b - 5 % d;

// bad
// one may be confused into thinking (a || b) && c
if (a || b && c) {
  return d;
}

// good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// good
const bar = (a ** b) - (5 % d);

// good
if (a || (b && c)) {
  return d;
}

// good
const bar = a + b / c * d;

## 15. Semicolons
#### 15.1

// bad - raises exception
const luke = {}
const leia = {}
[luke, leia].forEach(jedi => jedi.father = 'vader')

// bad - raises exception
const reaction = "No! That's impossible!"
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}())

// bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
function foo() {
  return
    'search your feelings, you know it to be foo'
}

// good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// good
const reaction = "No! That's impossible!";
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}());

// good
function foo() {
  return 'search your feelings, you know it to be foo';
}

## 16. Type Casting & Coercion
#### 16.1 Strings
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);

#### 16.2 Number
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);

#### 16.3 if for whatever reason you are doing something wild and parseInt is your bottleneck and need to use Bitshift for performance reasons.

// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
const val = inputValue >> 0;

#### 16.4 Booleans

const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;

## 17. Naming Conventions
#### 17.1 Use camelCase when naming objects, functions, and instances.
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}

#### 17.2 Use PascalCase only when naming constructors or classes.
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});

#### 17.3 Do not use trailing or leading underscores.
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';
// good
this.firstName = 'Panda';
// good, in environments where WeakMaps are available
// see https://kangax.github.io/compat-table/es6/#test-WeakMap
const firstNames = new WeakMap();
firstNames.set(this, 'Panda');

#### 17.4 Don’t save references to this
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}

#### 17.5 A base filename should exactly match the name of its default export.
// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js

#### 17.6 Use camelCase when you export-default a function. Your filename should be identical to your function’s name.
function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;

#### 17.7 Use PascalCase when you export a constructor / class / singleton / function library / bare object.
const AirbnbStyleGuide = {
  es6: {
  },
};

export default AirbnbStyleGuide;

#### 17.8  Acronyms and initialisms should always be all capitalized, or all lowercased.
// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HTTPRequests = [
  // ...
];

// also good
const httpRequests = [
  // ...
];

// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
  // ...
];

#### 17.9 You may optionally uppercase a constant only if it (1) is exported, (2) is a const (it can not be reassigned), and (3) the programmer can trust it (and its nested properties) to never change.
// bad
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// ---

// allowed but does not supply semantic value
export const apiKey = 'SOMEKEY';

// better in most cases
export const API_KEY = 'SOMEKEY';

// ---

// bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
  KEY: 'value'
};

// good
export const MAPPING = {
  key: 'value'
};

## 18. Accessors
#### 18.1  Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal('hello').
// bad
class Dragon {
  get age() {
    // ...
  }

  set age(value) {
    // ...
  }
}

// good
class Dragon {
  getAge() {
    // ...
  }

  setAge(value) {
    // ...
  }
}

#### 18.2 If the property/method is a boolean, use isVal() or hasVal()
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}

#### 18.3 It's okay to creat get() and set() functions, but be consistent.
class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}

## 19. Events
#### 19.1 When attaching data payloads to events instead of a raw value.
// bad
$(this).trigger('listingUpdated', listing.id);

// ...

$(this).on('listingUpdated', (e, listingID) => {
  // do something with listingID
});

#### 19.2 Cache jQuery lookups.
// bad
function setSidebar() {
  $('.sidebar').hide();

  // ...

  $('.sidebar').css({
    'background-color': 'pink',
  });
}

// good
function setSidebar() {
  const $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...

  $sidebar.css({
    'background-color': 'pink',
  });
}

#### 19.3 Use find with scoped jQuery object queries.
// bad
$('ul', '.sidebar').hide();

// bad
$('.sidebar').find('ul').hide();

// good
$('.sidebar ul').hide();

// good
$('.sidebar > ul').hide();

// good
$sidebar.find('ul').hide();


## 20.Constructors and object instances

#### 20.1 constructor function is JavaScript's version of a class.
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

//creat some object, add constructor calls.
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
person1.name
person1.greeting()
person2.name
person2.greeting()

#### 20.2 Understanding prototype objects




[GoBack](https://github.com/wanjingzhang/Self-Training/tree/master/02HTML/2JS/ES6)



























