function multiply(a,b){
  return a*b;
}
const result = multiply (2,4);
console.log(result);

var x = 9;
for (i= x; i>=1; i--) {
  console.log("hello " + i);
}

for ( i=5; i < 10; i++) {
  console.log(i);
}


let solution = 12;

for (let i= 0; i <= solution; i++) {
  x =solution*i;
  console.log(x);
}

let seat =100
let row = 25
for (i=0; i<=row; i++){
  for(x=0; x<seat; x++){
    console.log("Seat row - "+i+" - seat - "+x);
  }
}