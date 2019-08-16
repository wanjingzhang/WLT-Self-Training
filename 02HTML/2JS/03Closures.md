```javascript
// Demo 1
function doSomeMath() {
	var a = 5;
	var b = 4;
	
	function multiply() {
		var result = a * b;
		return result;
	}

	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult()); //20

// Demo 2
function giveMeEms(pixels){
    var baseValue = 16;
    function doTheMath(){
        return pixels/baseValue;
    }
    return doTheMath;
}
var smallSize = giveMeEms(12);
var xlargeSize = giveMeEms(32);
console.log("Small size: ", smallSize());
console.log("Extra Large size: ", xlargeSize());
```

[Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)