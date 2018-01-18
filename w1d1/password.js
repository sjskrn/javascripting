function obfuscate (str) {
	var newStr = str.replace(/[a]/g, 4).replace(/[e]/g, 3).replace(/[o]/g, 0).replace(/[l]/g, 1);
	return newStr;
}
var args = process.argv[2];
console.log (obfuscate(args));