class Car {
  brand: string;
  model: string;
  firstRegistrationYear: number;
  horsePower: number;
  width: number;
  length: number;

  constructor(brand: string, model: string, firstRegistrationYear: number, horsePower: number, width: number, length: number) {
    this.brand = brand;
    this.model = model;
    this.firstRegistrationYear = firstRegistrationYear;
    this.horsePower = horsePower;
    this.width = width;
    this.length = length;
  }

  drive() {
    console.log("I'm driving my " + this.brand + " " + this.model + " from " + this.firstRegistrationYear);
  }
}

var car = new Car("Alfa Romeo", "159 SW", 2007, 200, 1828, 4660);
car.drive();

class Pickup extends Car {
  loadCapacity: number;

  constructor(brand: string, model: string, firstRegistrationYear: number, horsePower: number, width: number, length: number, loadCapacity: number) {
    super(brand, model, firstRegistrationYear, horsePower, width, length);
    this.loadCapacity = loadCapacity;
  }

  start() {
    console.log("TataTataTataTataTataTata! TataTataTataTataTataTataRrrrrrRRRrrrrrRRrrRRRrrrrRRRrr");
  }
}

class FormulaOne extends Car {
  maxSpeed: number;

  constructor(brand: string, model: string, firstRegistrationYear: number, horsePower: number, width: number, length: number, maxSpeed: number) {
    super(brand, model, firstRegistrationYear, horsePower, width, length);
    this.maxSpeed = maxSpeed;
  }

  goVeryFast() {
    console.log("Nnnniiiiiiiiiiiioooonnnnnnnnnnnnnnnnnnn");
  }
}

var pickup = new Pickup("Ford", "Ranger", 2016, 160, 1860, 5362, 455);
var formulaOne = new FormulaOne("Ferrari", "F1", 2017, 1000, 1800, 4500, 320);

pickup.drive();
pickup.start();

formulaOne.drive();
formulaOne.goVeryFast();