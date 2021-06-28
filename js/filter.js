const a = [3, 1, 3, -5, -3, -4, 5, -2, 67, 2, 9, 6, 7, 0];

//let b = a.filter((item) => {
//  if (item > -1) {
//    return true;
//  }
//});

//console.log(a);
//console.log(b);

let b = a.filter((item, index) => {
  console.log(index);
  return index;
});

console.log(a);
console.log(b);

const clients = [
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

//let debts = clients.filter(function (item) {
//  if (item.debt >= 10) {
//    return true;
//  }
//});
let debts = clients
  .filter((item) => item.debt >= 10)
  .sort((a, b) => b.debt - a.debt);

console.log(debts);
