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
