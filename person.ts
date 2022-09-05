class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName() {
    console.log(`i am ${this.name}`);
  }
  tellMyAge() {
    console.log(`i am ${this.age} years old`);
  }
}

const person1 = new Person("John", 40);
const person2 = new Person("Marie", 35);

person1.tellMyName();
person2.tellMyAge();