"use strict";

$('#left').click(function() {
    var request = $.get("http://api.icndb.com/jokes/random");

    request.done(function(data, status) {
        console.log(data);
        addChuckNorrisToPage(data);
    });

    request.fail(function(request, status, error) {
        console.log(status);
    });
});

function addChuckNorrisToPage(response) {
    $("#output").html("<blockquote><h3>" + response.value.joke + "</h3></blockquote>");
}

$('#right').click(function() {
    var request = $.get("http://quotes.stormconsultancy.co.uk/random.json");

    request.done(function(data, status) {
        console.log(data);
        addProgrammingQuoteToPage(data);
    });

    request.fail(function(request, status, error) {
        console.log(status);
    });
});

function addProgrammingQuoteToPage(response) {
    var quote = "<blockquote><h3>" + response.quote + "</h3></blockquote>";

    var author = "<p>" + response.author + "</p>";

    var quoteAndAuthor = quote + author;

    $("#output").html(quoteAndAuthor);
}