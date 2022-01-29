var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};
console.log(sister.parents)
console.log(sister["parents"])
console.log(sister.paintPicture());
console.log(sister.name)
console.log(sister["name"])
console.log(sister.pets)
console.log(sister["pets"])