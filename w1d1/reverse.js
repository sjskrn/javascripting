var input = process.argv[2];
var rev = "";

for (var i = input.length - 1; i >= 0; i--) {
	rev = rev + input[i];
}

console.log(rev);