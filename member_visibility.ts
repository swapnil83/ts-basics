class Car {

    constructor(private modelName: string, private brand: string) {
    }

    // constructor(public modelName: string, public brand: string) {
    // }

    // constructor(protected modelName: string, protected brand: string) {
    // }

    getModelName() {
        return this.modelName;
    }

    setModelName(modelName: string) {
        this.modelName = modelName;
    }

    getBrand() {
        return this.brand;
    }
    
    setBrand(brand: string) {
        this.brand = brand;
    }

    getInfo() {
        return this.modelName + ' ' + this.brand;
    }

    run() {
        console.log('Hey Car');
    }
}

class Sedan extends Car {
    run() {
        console.log('Hey Sedan');
        // this.modelName; // in case of public or protected it is accessible
    }

    runLikeNormalCar() {
        super.run();
    }
}

var c1: Car = new Sedan('Verna', 'Hyundia');
c1.run();
console.log(c1.getBrand());