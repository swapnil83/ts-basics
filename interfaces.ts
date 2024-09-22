interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements Person {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

var aPerson = new Foo();
aPerson.firstName = 'Bhuvan';
aPerson.lastName = 'Bam';
console.log(aPerson.getFullName());



// duck typing
var someObj = {
    firstName: 'Ishan',
    lastName: 'Sharma',
    age: 23,
    getFullName: () => 'Test'
}

aPerson = someObj;
// console.log(aPerson.age); // give error as it doesn't exists in interface
console.log(aPerson.getFullName());