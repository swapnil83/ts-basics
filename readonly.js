var Bike = /** @class */ (function () {
    // readonly name: string;
    function Bike(name) {
        this.name = name;
        // this.name = name;
    }
    return Bike;
}());
var aBike = new Bike('Suzuki');
console.log(aBike.name);
// aBike.name = "";
