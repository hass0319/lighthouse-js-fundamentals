
// function howManyHundreds(num){
//   for (let i=num; i>=100; i++){
//     let division =num/100;
//     if (division % 100 === 0 ){
//     return num;
//   }else {
//     return Math.floor(division)
//   }
// }
// }


// function howManyHundreds(num){
//   for (i=num; i>=100; i++){
//     let lob =(num/100)%100;
//     return Math.floor(lob);
//   }
// }




const howManyHundreds = function (num) {
  let division = num / 100
  if (division % 100 === 0) {
    return num
  } else {
    return Math.floor(division)
  }
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(1234))
console.log(howManyHundreds(123456))
console.log(howManyHundreds(55))
console.log(howManyHundreds(100))