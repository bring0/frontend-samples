
var something;
setTimeout(function() {
    // I don't know why but "something" doesn't work unless i put setTimeout around it!!1! @_@
    something = $($('#results-template').text());
}, 100);

$(document).ready(function($) {

$('form').on('submit', function() {

var anotherSomething = something.clone();
anotherSomething.find('p.input').text($('form input[name=sentence]').val());

        $('#results').prepend(anotherSomething);

          $('form input[name=sentenc]').val('');

        return false;
    });
});
