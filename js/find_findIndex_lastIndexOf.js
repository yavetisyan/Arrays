//const a = [2, 3, 4, 5];
const a = [20, 30, 40, 50];

// find

//let b = a.find((item) => {
//  if (item >= 33 && item <= 45) {
//    return true;
//  }
//});

//console.log(b);

const b = [
  {
    name: "Ivan",
    age: 54,
  },
  {
    name: "Iva",
    age: 46,
  },
  {
    name: "den",
    age: 34,
  },
  {
    name: "severn",
    age: 44,
  },
  {
    name: "oleg",
    age: 14,
  },
];

let c = b.find((item) => {
  if (item.age <= 18) {
    return true;
  }
});

console.log(c);

// findIndex

const d = [22, 33, 44, 55, 33, 66, 77];

let e = d.findIndex((item) => {
  if (item > 48) {
    return true;
  }
});

console.log(e);

// lastIndexOf

const k = "hello";

let j = d.lastIndexOf(33);

console.log(j);
