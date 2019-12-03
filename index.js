var dwarves = [ "Dopey", "Grumpy", "Bashful", "Doc" ]
  function dwarfRollCall(dwarves){
    var rollCall = ""
    dwarves.forEach(function(name,i) {
        rollCall += (i+1 + ". " + name + " ")
    })
  return rollCall
}


var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
  function summonCaptainPlanet(planeteerCalls){
    var yell = []
    planeteerCalls.forEach(function(element){
      element = element.toUpperCase() + "!"
      yell.push(element)
    })
  return yell
}


var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
function longPlaneteerCalls(planeteerCalls) {
  for (var i = 0; i < planeteerCalls.length; i++) {
  if (planeteerCalls.length > 4) {
    return true
  }
    else {
      return false
    }
  }
}


var foods = [ "crackers", "gouda", "thyme", "tomato soup", "cheddar", "oyster crackers", "gouda", "garlic", "rosemary", "bread" ]
function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if ( foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] === "camembert" ) {
      return foods[i]
    }
  }
  return "no cheese!"
}
