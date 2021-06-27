//// push

//const browser = [];

//let a = [99, 98];

//console.log(a);

//a[0] = 66;

//console.log(a);
//a[a.length] = 55;
//console.log(a);

//a.push(88);
//console.log(a);
//a.push(44, 49, 22);

//console.log(a);

//console.log(a.push(111));

//function hello(b) {
//  return a.push(b);
//}
//// pop

//console.log(a);
//a.pop();
//console.log(a);

//console.log(a.pop());
//console.log(a);

//const b = [3];
//console.log(b);
//console.log(b.pop());
//console.log(b);
//console.log(b.pop());
//console.log(b);

// ----------------

let car = [];

document.querySelector(".push").onclick = () => {
  let id = document.querySelector("#goods").value;
  if (!car.includes(id)) {
    car.push(id);
  }
  if (car.includes("")) {
    alert("enter number");
  }
  console.log(car);
};

document.querySelector(".pop").onclick = () => {
  let id = document.querySelector("#goods").value;
  let goods = car.pop();

  alert(`Item id ${goods} was removed`);

  console.log(car);
};
