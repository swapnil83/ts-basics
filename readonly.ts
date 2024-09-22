class Bike {
    // readonly name: string;
    constructor(readonly name: string) {
        // this.name = name;
    }
}

var aBike = new Bike('Suzuki');
console.log(aBike.name);
// aBike.name = "";