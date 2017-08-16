var Player;
var Computer;
var toggle = -1;
var grid = $(".game").toArray();

   $(".AskO").on("click", function() {
   $(".game").on("click", function() {
      $(this).html("O");
      Player = "O";
      toggle *=-1;
      while(toggle === 1){
         $(".game").on("click", function() {
      $(this).html("X");
      Player = "X";
      });
         break;
      }
       while(toggle === -1){
         $(".game").on("click", function() {
      $(this).html("O");
      Player = "O";
      });
          break;
      }
   });

});

$(".AskX").on("click", function() {
   $(".game").on("click", function() {
      $(this).html("X");
      Player = "X";
      toggle *=-1;
     while(toggle === 1){
         $(".game").on("click", function() {
      $(this).html("O");
      Player = "O";
      });
        break;
   };
      while(toggle === -1){
         $(".game").on("click", function() {
      $(this).html("X");
      Player = "X";
      });
          break;
      };
});
});