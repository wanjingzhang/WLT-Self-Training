```javascript
// Immediately invoked functional expressions
var firstFraction = 7 / 16;
var secondFraction = 13 / 25;

var theBiggest = (function findBiggestFraction(a, b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result;

    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction, secondFraction);
 
console.log(theBiggest); 

```