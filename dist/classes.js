"use strict";
class Pessoa {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
class Employ extends Pessoa {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoAmI() {
        return this.name;
    }
}
const _p1 = new Pessoa(1, 'Gabriel', 22);
console.log(_p1.sayMyName());
