let cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
let carPassing= function(cars, speed){
  let newCar={
    time:Date.now(),
    speed:speed
  }
  //console.log(newCar);
  cars.push(newCar);
  console.log(cars)
  return cars;
}
const speed = 38

console.log(cars.time)
console.log(carPassing(cars, speed));