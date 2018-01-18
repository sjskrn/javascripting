var input = process.argv.slice(2);
var diceRoll = [];

for (var i = 0; i < input; i++) {
	
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;    //The maximum is inclusive and the minimum is inclusive 
  
  }

  diceRoll.push (getRandomIntInclusive(1, 6));
	
}

console.log ("Rolled " + input + " dice: " + diceRoll);