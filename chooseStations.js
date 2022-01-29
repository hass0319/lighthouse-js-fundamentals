let stations = [['Big Bear Donair', 10, 'restaurant'],['Bright Lights Elementary', 50, 'school'], ['Moose Mountain Community Centre', 45, 'community centre']];
//must have a capacity of at least 20, and be a school or community centre.
function chooseStations(stations){
  let name = [];
  for (const station of stations){
    let capacity = station[1];

    if (capacity >= 20){ 
      let type = station[2];
      if (type === 'school' || type ==='community center'){
        name.push(station[0]);
      }
    }
  }
  return name;
}
console.log(chooseStations(stations));