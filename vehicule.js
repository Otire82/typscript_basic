var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, firstRegistrationYear, horsePower, width, length) {
        this.brand = brand;
        this.model = model;
        this.firstRegistrationYear = firstRegistrationYear;
        this.horsePower = horsePower;
        this.width = width;
        this.length = length;
    }
    Car.prototype.drive = function () {
        console.log("I'm driving my " + this.brand + " " + this.model + " from " + this.firstRegistrationYear);
    };
    return Car;
}());
var car = new Car("Alfa Romeo", "159 SW", 2007, 200, 1828, 4660);
car.drive();
var Pickup = /** @class */ (function (_super) {
    __extends(Pickup, _super);
    function Pickup(brand, model, firstRegistrationYear, horsePower, width, length, loadCapacity) {
        var _this = _super.call(this, brand, model, firstRegistrationYear, horsePower, width, length) || this;
        _this.loadCapacity = loadCapacity;
        return _this;
    }
    Pickup.prototype.start = function () {
        console.log("TataTataTataTataTataTata! TataTataTataTataTataTataRrrrrrRRRrrrrrRRrrRRRrrrrRRRrr");
    };
    return Pickup;
}(Car));
var FormulaOne = /** @class */ (function (_super) {
    __extends(FormulaOne, _super);
    function FormulaOne(brand, model, firstRegistrationYear, horsePower, width, length, maxSpeed) {
        var _this = _super.call(this, brand, model, firstRegistrationYear, horsePower, width, length) || this;
        _this.maxSpeed = maxSpeed;
        return _this;
    }
    FormulaOne.prototype.goVeryFast = function () {
        console.log("Nnnniiiiiiiiiiiioooonnnnnnnnnnnnnnnnnnn");
    };
    return FormulaOne;
}(Car));
var pickup = new Pickup("Ford", "Ranger", 2016, 160, 1860, 5362, 455);
var formulaOne = new FormulaOne("Ferrari", "F1", 2017, 1000, 1800, 4500, 320);
pickup.drive();
pickup.start();
formulaOne.drive();
formulaOne.goVeryFast();
