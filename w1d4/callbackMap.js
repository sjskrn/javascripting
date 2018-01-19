var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
	var myArray = [];
	for (var i = 0; i < array.length; i++) {
		myArray.push(callback(array[i]));
	}
	return myArray;
}
var wordLength = map(words, function(word) {
  return word.length;
});

var wordUpCase = map(words, function(word) {
  return word.toUpperCase();
});

var wordRev = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(wordLength);
console.log(wordUpCase);
console.log(wordRev);