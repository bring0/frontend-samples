
function sortWords(sentence) {
    var arr = sentence.split(" ");
    arr.sort(function (a, b) {
        return a.length - b.length; // could also use a.length > b.length
    });
    return arr.join(' ');
}

console.log(sortWords("The quick brown fox jumped over the lazy dog"));

console.log(sortWords("A wizard's job is to vex chumps quickly in fog"));

console.log(sortWords("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));
