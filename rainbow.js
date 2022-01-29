// var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
// but James had this:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
// Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

// Remove "Blackberry"
// Add "Yellow" and "Green"
// Add "Purple"
rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"Purple");
console.log(rainbow);