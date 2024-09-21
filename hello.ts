var fn = () => 'response';

var a: number | undefined;
var b: boolean;
var c:string;

a = 10;
b = true;
c = 'Hello';

// array
var arr: number[];
arr = [];
arr = [1, 2, 3];
arr.push(4);
console.log(arr.pop());
a = arr.pop();
console.log(a);

// tuples
var brr: [number, string] = [12, 'Guru'];
// brr = [20];
// brr = [1996, true];

// any
var v: any;
v = 20;
v = 'Oct';
v = true;

// union
var u: number | string;
u = 12;
u = 'Nov';
// u = true;