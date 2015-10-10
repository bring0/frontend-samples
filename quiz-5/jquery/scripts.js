var theAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function letterExists(stringToTest) {
    stringToTest = stringToTest.toUpperCase();
    return function(letr) {
        return stringToTest.indexOf(letr) > -1;
    }
}

function processAllLetters(stringToProcess) {
    return theAlphabet.every(letterExists(stringToProcess)); //.every() breaks on false
}

$(document).ready(function() {
    $("#submitButton").click(function(event) {
        event.preventDefault();


        var entryText = $("#sentence").val();

        var panagramText = processAllLetters(entryText) ? 'This sentence is a panagram!' : 'This sentence is not a panagram!';
        $("#sentence").val("");
        $("#resultArea").removeClass("hideMe");
        $("#results").loadTemplate($("#results-template"), {
            entry: entryText,
            isPanagramOrNot: panagramText
        }, {
            prepend: true
        });

    });
});