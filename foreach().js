var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
//loop over the following array and add 100 to each of the values if the value is divisible by 3.

test.forEach(function (scores, index){
  return scores %3===0? test[index]+=100 : scores;
})
console.log(test)