
let trash= "";
let bins={
  waste: 2,
  recycling: 2,
  compost: 2
}


function smartGarbage(trash, bins){
  if (trash==="waste"){
    bins.waste++
  }else if (trash==='recycling'){
    bins.recycling++;
  }else if (trash==='compost'){
    bins.compost++;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));