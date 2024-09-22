var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
aPerson.firstName = 'Bhuvan';
aPerson.lastName = 'Bam';
console.log(aPerson.getFullName());
// duck typing
var someObj = {
    firstName: 'Ishan',
    lastName: 'Sharma',
    age: 23,
    getFullName: function () { return 'Test'; }
};
aPerson = someObj;
// console.log(aPerson.age); // give error as it doesn't exists in interface
console.log(aPerson.getFullName());
