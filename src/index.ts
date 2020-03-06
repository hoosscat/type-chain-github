const sayHI = (name: string, age: number, gender: string): string => {
    return (`Hello ${name}, You are ${age}, You are a ${gender}`);
};

console.log(sayHI("Hooss", 14, "male"));

export {}