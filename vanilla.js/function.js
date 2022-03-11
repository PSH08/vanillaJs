const player = {
  name: "nico",
  sayHello: function(otherPersonName) {
    console.log("hello! "  + otherPersonName + " nice meet you")
  },
};

console.log(player.name);
player.sayHello("lunn");

function plus(a,b) {
  console.log(a+b);
}
plus(5, 5);