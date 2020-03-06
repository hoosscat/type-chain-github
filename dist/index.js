"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = {
    name: "Hooss",
    age: 14,
    gender: "male"
};
const lynn = new Human("lynn", 18, "female");
const sayHI = (person) => {
    return (`Hello ${person.name}, You are ${person.age}, You are a ${person.gender}!`);
};
console.log(sayHI(lynn));
//# sourceMappingURL=index.js.map