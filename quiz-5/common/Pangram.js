var theAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var Panagram = {

    test: function (stringToTest) {

        return theAlphabet.every(function (letterToTest) {
            stringToTest = stringToTest.toUpperCase();
            
            return function () {
                console.log(letterToTest);
                return stringToTest.indexOf(letterToTest) > -1;
            }
        });
    }

}

console.log(Panagram.test("hey"));