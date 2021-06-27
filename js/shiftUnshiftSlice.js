let a = [3, 4, 5];

// shift

let b = a.shift();
console.log(b);
console.log(a);

// unshift

let c = a.unshift(22);
console.log(a);
console.log(c);

// slice

let d = [22, 33, 44, 55, 66, 77, 88, 99];
let f = d.slice(0, 6);
console.table(d);
console.log(f);

let e = "hello";
//e.shift();
console.log(e.slice(1, 4));
