class Human{
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
}

const person = {
    name: "Hooss",
    age: 14,
    gender: "male"
};

const lynn = new Human("lynn", 18, "female");

const sayHI = (person: Human): string => {
    return (`Hello ${person.name}, You are ${person.age}, You are a ${person.gender}!`);
};

console.log(sayHI(lynn));

export {}