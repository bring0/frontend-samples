/**
		Way One
 */

var theAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function letterExists(str) {
    str = str.toUpperCase();
    return function (trip, letter) { 					// trip is initiall true, but gets set to false as soon 
        return trip && (str.indexOf(letter) > -1); 		// letter not found in string. If set to false, it will continue to return false
    }
}

function processAllLetters(stringToProcess) {
    return theAlphabet.reduce(letterExists(stringToProcess), true);
}

console.log(processAllLetters("The quick brown fox jumps over the lazy dog"));    //True
console.log(processAllLetters("The quick brown fox jumped over the lazy dog"));   // False


/**
		Way two, unnecessary computation (doesn't stop on false)
 */

var theAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function letterExists (stringToTest) {
    stringToTest = stringToTest.toUpperCase();
    return function(letr) {
        return stringToTest.indexOf(letr) > -1;
    }
}
function processAllLetters(stringToProcess) {
    return theAlphabet.every(letterExists(stringToProcess));  		//.every() breaks on false
}

console.log(processAllLetters("The quick brown fox jumped over the lazy dog"));   // False
console.log(processAllLetters("A wizard's job is to vex chumps quickly in fog")); // True