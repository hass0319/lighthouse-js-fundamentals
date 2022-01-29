let bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
//create a second array of numbers called totals that shows the bill amounts with a 15% tip added.

//method1
let totals= bills.map(function (x){
  return (x*=1.15).toFixed(3)
   //Number(x.toFixed(3))
})
console.log(totals)

//------------------------------------
//method2
// var totals = bills.map(function (element) {
//   element *= 1.15;
//   element = element.toFixed(2);
//   element = Number(element);

//   return element;
// });


/*
// Method 3
var totals = bills.map(function(element) {
  element *= 1.15;
  return Number(element.toFixed(2));
});
*/
console.log(totals);