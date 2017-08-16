$("#search").click(function() {
   $('body').animate({backgroundColor: '#16A085'}, 'slow');
      var SearchTerms = $("#mySearchinput").val();
      var url =
         'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + SearchTerms + '&format=json&callback=?';

      $.ajax({
         type: "GET",
         url: url,
         async: false,
         dataType: "json",
         success: function(data) {
            $("#myResult").empty();

            for (var i = 0; i < data[1].length; i++) {
               $("#myResult").prepend(
                  "<div><div class='well' style='box-shadow: 5px 10px'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>"
               );
            }
         },
         error: function(errorMessage) {
            alert("sorry but something went wrong");
         }
      });
});

