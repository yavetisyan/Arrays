// includes
// true
// false

const transactios = [
  "571a319c8c",
  "bd32db6c05",
  "1c28a0c411",
  "9b4257070b",
  "979d1c10a1",
  "94641b2966",
];
const test = [44, 55, 66, 77, 88, 2, 3, 4];

if (transactios.includes("bd32db6c0")) {
  console.log("yes");
} else {
  console.log("no");
}

const str = "abcdfgh";

if (str.includes("fgh")) {
  console.log("yes");
} else {
  console.log("no");
}

const users = [
  {
    name: "avetisyan",
    age: 33,
  },
  {
    name: "petrov",
    age: 14,
  },

  {
    name: "poitrov",
    age: 37,
  },
  {
    name: "alekseev",
    age: 43,
  },
];

let newUsers = users.filter(function (item) {
  return item.name.includes("yan");
});

console.log(newUsers);
