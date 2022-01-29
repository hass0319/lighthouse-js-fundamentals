/* - Your code should have a variable `umbrella`
* - The variable `umbrella` should be an object
* - Your `umbrella` object should have the `color` and `isOpen` property
* - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
* - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
*/
let umbrella={
  color:'pink',
  isOpen: false,
  open: function(){
    if (umbrella.isOpen === true){
      return console.log("The umbrella is already opened!")
    }else{
      umbrella.isOpen=true;
      return "Julia opens the umbrella "
    }
  },
  close:() => {
    if (umbrella.isOpen===true){
    umbrella.isOpen=false;
    return  "Julia closes the umbrella " 
  }
    else return "The umbrella is already closed";
  }
};
console.log(umbrella.close());