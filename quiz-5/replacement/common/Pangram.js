Pangram = function(stringToTest) {
    this.stringToTest = stringToTest;
    var theAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    function letterExists(strng) {
        strng = strng.toUpperCase();
        return function(letr) {
            return strng.indexOf(letr) > -1;
        };
    }
    this.run = function() {
        return theAlphabet.every(letterExists(this.stringToTest));
    };


};