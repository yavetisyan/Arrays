//// map

//let z = [5, 28, 892];

//let bar = z.map(function (val, i) {
//  return val * 2;
//});
//console.log(z);
//console.log(bar);

//let people = [
//  {
//    name: "avetisyan",
//    age: 33,
//  },
//  {
//    name: "petrov",
//    age: 14,
//  },

//  {
//    name: "poitrov",
//    age: 37,
//  },
//  {
//    name: "alekseev",
//    age: 43,
//  },
//];

//let users = people.map(function (val) {
//  return val.name;
//});
//console.log(users);

// -----------
// F = C*1.8+32

//const temp = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2];

//const z = [];

//let tF = temp.map((item) => {
//  console.log(item);
//  let cel;
//  return (cel = item * 1.8 + 10);
//});

//console.log(tF);

//let a = [33, 44, 55];

//let b = a.map((item, index, array) => {
//  if (index == 2) {
//    array[index + 1] = 66;
//  }
//  return item;
//});

//console.log(b);
//console.log(a);

//---------------

const z = [
  {
    name: " Ivan",
    order: 12,
    sum: "123,5",
  },
  {
    name: " sergey   ",
    order: 12,
    sum: "123.5",
  },
  {
    name: "Matilda   ",
    order: 12,
    sum: "123, 5",
  },
  {
    name: " Ivanov petr  ",
    order: 12,
    sum: "123,50",
  },
];

const zBack = z.map((item) => {
  item.name = item.name.trim().toLowerCase();
  return item;
});

console.log(zBack);
