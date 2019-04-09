class Person{
    constructor(name, age, gender, smoke, marital) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.smoke = smoke;
        this.marital = marital;
    }

    describeYourself() {
        console.log(`Hello, My name's ${this.name}, I'm ${this.age} years old, and I'm a ${this.gender}.`);
    }
}

class Regional extends Person{
    constructor(name, age, gender, smoke, marital, comefrom) {
        super(name, age, gender, smoke, marital);
        this.comefrom = comefrom;
    }

    descriptYourComefrom() {
        console.log(`I'm come from ${this.comefrom}.`);
    }
}

var XiaoQiang = new Person("XiaoQiang",18, "male", "smoking", "single");
XiaoQiang.describeYourself();


var ZhangSan = new Regional("ZhangSan", 22, "female", "non-smoking", "single", "ShangHai");
ZhangSan.descriptYourComefrom();