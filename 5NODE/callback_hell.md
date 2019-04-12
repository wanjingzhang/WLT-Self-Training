# Callback Hell
#### Definition
>the used callback function is hard to get right intuitively.A lot of code ends up has the pyramid shape `})` at the end.

```javascript
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          ......
          }.bind(this))
        }
      })
    })
  }
})
```

> 

#### How do I fix callback hell?
* Keep you code shallow
* Modulariz
* Handle every single error
   1. syntax errors caused by the programmer
   1. runtime errors caused by the programmer
   1. platform errors caused by things like invalid file permissio


#### Summary
* Don't nest functions.
* Use functionh hoisting to your advantage to move function.
* Handle every single error in every one of your callbacks.
* Create reusable functions and place them in a module to reduce the congnitive load requried to understand your code.
* Start by moving repeatedly used code into a function.
* A good module is small and focuses on one problem.
* Individual file in a module should not be longer than around 150 lines of JavaScript.
* A module shouldn't have more than one level of nested folders full of JavaScript files.
* The bigest impact comes from keeping code simple,not nested and split up into small modules.
* Regardless of the method you choose, always handle every error and keep your code simple.