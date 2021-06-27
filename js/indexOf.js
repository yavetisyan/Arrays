// indexOf

const a = [3, 2, 9, 8, 7, 5, 7, 3, 5, 2];
const b = ["Hi", "hello"];

//-1

console.log(a.indexOf(3, 2));
console.table(a);

console.log(b.indexOf("Hi"));

//if(a.indexOf('7') !== -1){
//	console.log('yes');
//}else{
//	console.log('the element not in array');
//}

function indexOfEl(array, item, from = 0) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return "Not found or -1";
}

console.log(indexOfEl(a, 8));
