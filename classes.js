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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var p1 = new Person('John', 'Cena');
// p1.firstName = 'John';
// p1.lastName = 'Cena';
// console.log(p1);
console.log(p1.getFullName());
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.greet = function () {
        console.log('Human here!!');
    };
    return Human;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.greet = function () {
        console.log('Developer here!!');
    };
    Developer.prototype.greetUsingRef = function () {
        _super.prototype.greet.call(this);
    };
    return Developer;
}(Human));
var h = new Developer();
h.greet();
// h.greetUsingRef();
