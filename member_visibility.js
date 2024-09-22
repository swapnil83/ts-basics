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
    function Car(modelName, brand) {
        this.modelName = modelName;
        this.brand = brand;
    }
    // constructor(public modelName: string, public brand: string) {
    // }
    // constructor(protected modelName: string, protected brand: string) {
    // }
    Car.prototype.getModelName = function () {
        return this.modelName;
    };
    Car.prototype.setModelName = function (modelName) {
        this.modelName = modelName;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Car.prototype.getInfo = function () {
        return this.modelName + ' ' + this.brand;
    };
    Car.prototype.run = function () {
        console.log('Hey Car');
    };
    return Car;
}());
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sedan.prototype.run = function () {
        console.log('Hey Sedan');
        // this.modelName; // in case of public or protected it is accessible
    };
    Sedan.prototype.runLikeNormalCar = function () {
        _super.prototype.run.call(this);
    };
    return Sedan;
}(Car));
var c1 = new Sedan('Verna', 'Hyundia');
c1.run();
console.log(c1.getBrand());
