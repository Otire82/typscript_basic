class Animal {
  name: string;
  numberPaws: number;
  color?: string

  constructor(name: string, numberPaws: number, color?: string) {
      this.name = name;
      this.numberPaws = numberPaws;
      this.color = color;
  }
}

class Dog extends Animal{
  isDog: boolean
  constructor(name: string, numberPaws: number, color?: string, isDog: boolean = true) {
      super (
          name, numberPaws, color
      )
      this.isDog = isDog
  }
}

class Cat extends Animal{
  isCat: boolean
  constructor(name: string, numberPaws: number, color?: string, isCat: boolean = true) {
      super (
          name, numberPaws, color
      )
      this.isCat = isCat
  }
}

class Bird extends Animal {
  isBird: boolean
  constructor(name: string, numberPaws: number, color?: string, isBird: boolean = true) {
      super (
          name, numberPaws, color
      )
      this.isBird = isBird
  }
}

class Fish extends  Animal {
  isFish: boolean
  constructor(name: string, numberPaws: number, color?: string, isFish: boolean = true) {
      super (
          name, numberPaws, color
      )
      this.isFish = isFish
  }
}

function photograph(animal: Animal) {
  console.log("You take a photo of " + animal.name)
}

function meow(cat: Cat) {
  console.log(cat.name + "says miaou miaou")
}

function bark(dog: Dog) {
  console.log(dog.name + " says wouaf wouaf")
}

function fly(bird: Bird) {
  console.log(bird.name + " fly away")
}

function swim(fish: Fish) {
  console.log(fish.name + " swim away")
}

function caress(animal: Animal) {
  if (animal.numberPaws === 4) console.log("You caress " + animal.name)
}

function feed(animal: Animal) {
  if (animal.color === "noir") console.log("You feed " + animal.name)
}

let chatEuropeen = new Cat("Chat Européen", 4, "noir");
let chatChartreux = new Cat ("Chartreux", 4);
let chienTerreNeuve = new Dog ("Terre-Neuve", 4, "noir");
let chienMoonMoon = new Dog ("Moon Moon", 4)
let mesange = new Bird ("Mésange", 2)
let merle = new Bird ("Merle", 2, "noir")
let thon = new Fish ("Thon", 0)
let requin = new Fish ("Requin", 0)
let asticot = new Animal("Asticot", 0)


photograph(asticot);
meow(chatChartreux);
bark(chienMoonMoon);
fly(merle);
swim(requin);
caress(requin);
caress(chienMoonMoon);
feed(mesange);
feed(merle);
