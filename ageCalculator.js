function ageCalculator(name, doB, now){
  const age = now - doB;
  return name+ " is "+age+" years old.";
}
console.log(ageCalculator("Suzie", 1984, 2016))
console.log(ageCalculator("Ali", 2016, 2016))
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));