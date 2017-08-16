 var MyRandomQuotes = [ 
"You know you're in love when you can't fall asleep because reality is finally better than your dreams. ― Dr. Seuss", 
"But man is not made for defeat. A man can be destroyed but not defeated. - Ernest Hemingway",  
"All that we see or seem is but a dream within a dream. - Edgar Allan Poe", 
"When you reach the end of your rope, tie a knot in it and hang on.  - Franklin D. Roosevelt",
"There is nothing permanent except change. - Heraclitus", 
"There is no charm equal to tenderness of heart. - Jane Austen", "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love. - Francis of Assisi"
];

$("#MyButton").on("click",function(){
    var randomNumber = Math.floor(Math.random() * (MyRandomQuotes.length));
	document.getElementById('quoteDisplay').innerHTML = MyRandomQuotes[randomNumber];
});

$('#tweet-this').click(function() {
      var tweetQuote = $(".message").text();
      if (tweetQuote != 'Show me a new quote') {
        window.open('https://twitter.com/intent/tweet?hashtags=QuoteOfTheDay&text="' + tweetQuote + '"', '_blank');
      }
    });