//mixins
let mixin = {
    madeIn() {
        console.log('This car was made in yeary 2019~');
    }
}

let carMixin = {
    __proto__: mixin,

    madeIn() {
        super.madeIn();
    }
}



class Car{
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color`;
    }
}

class SUV extends Car{
    constructor(doors, engine, color, brand, carStats) {
        super(doors, engine, color);
        this.brand = brand;
        this.carStats = carStats;
        this.wheels = 4;
        this.ac = true;

        // assign mixin
        Object.assign(this, carMixin);
    }

    myBrand() {
        return console.log(`This SUV is a ${this.brand}`);
    }
}

const cx5 = new SUV(4, 'V6', 'grey', 'mazda');
console.log(cx5);

cx5.myBrand();

console.log(cx5.madeIn());

