//let str = "hello, hi, mi, frer, aklsdf";
//let a = str.split("");

//console.log(a);

// every

const a = [4, 5, 6, 7, 8];

let b = a.every((item) => {
  if (item > 4) {
    return true;
  }
});

console.log(b);

let d = a.some((item) => {
  if (item > 7) {
    return true;
  }
});
console.log(d);

// flat

const i = [3, [6, 7], 4, [[5, 8]]];
let j = i.flat(2);

console.log(j);
