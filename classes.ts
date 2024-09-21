class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

var p1 = new Person('John', 'Cena');
// p1.firstName = 'John';
// p1.lastName = 'Cena';
// console.log(p1);
console.log(p1.getFullName());

class Human {
    firstName: string;
    lastName: string;
    greet() {
        console.log('Human here!!');
    }
}

class Developer extends Human {
    greet() {
        console.log('Developer here!!');
    }

    greetUsingRef() {
        super.greet();
    }
}

var h: Human = new Developer();
h.greet();
// h.greetUsingRef();
