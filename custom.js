function Point(x,y){
  this.x = x;
  this.y = y;
}

Point.prototype = {
  print: function() { console.log(this.x,this.y);}
};


var p1 = new Point(10,20);
p1.print();
console.log(p1 instanceof Point);

var p2 = new (Point)(10,20);
p2.print();
console.log(p2 instanceof Point);

var a = ["world"];
var value = a[0];
a[1] = 3.14;
i =2;
a[i] =3;
a[i+1] ="hello";
a[a[i]] = a[i+1] + " "+ a[0];
console.log(a);
