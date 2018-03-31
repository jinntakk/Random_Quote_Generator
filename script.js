$(document).ready(function() {
  function getQuote() {
    let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data) {
      $(".quote").html(data.quoteText);
      $(".author").html('-' + data.quoteAuthor);
      quote = data.quoteText;
      author = data.quoteAuthor;
    });
  };
  getQuote();
  $("#newQuote").on("click", function() {
    getQuote();
  });
  $(".twitter").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + quote + ' -' + author);
  });
});