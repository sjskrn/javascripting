function countLetters(string) {
    var counting = {};
    for (var i=0; i<string.length;i++) {
        var char = string.charAt(i);
        if  (char === " "){}
        else if  (!counting[char]) {
           counting[char] = 1;
        } else {
           counting[char] ++;
        }
    }

    return counting;
};
console.log(countLetters("lighthouse in the house"));