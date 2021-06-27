//let a = [22, 33, 44];

//let b = a.reduce((accum, item) => {
//  accum = accum + " " + item;
//  return accum;
//});
//console.log("------------");
//console.log(b);

//---------------

//let a = [4, -5, 7, -6, 2];
//let b = a.reduce((accum, item) => {
//  if (item > 0) {
//    accum += item;
//    return accum;
//  }
//  return accum;
//});

//console.log("------------");
//console.log(b);

// -----------------

//let a = [-3, 4, -5, 7, -6, 2];
//let b = a.reduce((accum, item) => {
//  if (item > 0) {
//    accum += item;
//    return accum;
//  }
//  return accum;
//}, 0);

//console.log("------------");
//console.log(b);

// -----------------

//let a = [-3, 4, -5, 75, -6, 2];
//let b = a.reduce((accum, item) => {
//  if (item > accum) {
//    accum = item;
//  }
//  return accum;
//});

//console.log("------------");
//console.log(b);

// -----------------

let a = [
  {
    iin: "g8f0s0sf",
    user: "Ivanov",
    debt: 4,
  },
  {
    iin: "88fs0spd",
    user: "Petrov",
    debt: 0,
  },
  {
    iin: "8s9sdssp",
    user: "Sidrov",
    debt: 0,
  },
  {
    iin: "c98ss0sf",
    user: "ItGid.info",
    debt: 14,
  },
  {
    iin: "52983435",
    user: "OOO MMM",
    debt: 71400,
  },
  {
    iin: "cd8ss0sf",
    user: "Spirtbank",
    debt: 2654,
  },
];

let b = a.reduce((a, i) => {
  ~a.push(i.debt);
  return a;
}, []);

console.log(b);

b = "Miban";
console.log(inc.isArray(b));
