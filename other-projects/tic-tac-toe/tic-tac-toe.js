let toggle = -1;


   $(".AskO").on("click", function() {
   $(".game").on("click", function() {
         gridVerif();
      $(this).html("O").addClass("TickedO").removeClass("noTick TickedX").unbind();
      toggle *=-1;
      if(toggle === 1){
         $(".game").on("click", function() {
             gridVerif();
      $(this).html("X").addClass("TickedX").removeClass("noTick TickedO").unbind();
      });
      }
       if(toggle === -1){
         $(".game").on("click", function() {
             gridVerif();
      $(this).html("O").addClass("TickedO").removeClass("noTick TickedX").unbind();
      });
      }
   });
});

$(".AskX").on("click", function() {
   $(".game").on("click", function() {
      $(this).html("X").addClass("TickedX").removeClass("noTick TickedO").unbind();
      toggle *=-1;
       gridVerif();
     if(toggle === 1){
         $(".game").on("click", function() {
      $(this).html("O").addClass("TickedO").removeClass("noTick TickedX").unbind();
             gridVerif();
      });
   };
      if(toggle === -1){
         $(".game").on("click", function() {
      $(this).html("X").addClass("TickedX").removeClass("noTick TickedO").unbind();
             gridVerif();
      });};
  });
});

const Reset = () => {
$(".game").empty().removeClass("TickedO TickedX").addClass("noTick").unbind(); 
    setTimeout(() =>{$("#title").html("TIC TAC TOE");}, 1000)
}

const gridVerif = () => {
  if($("#1").hasClass("TickedO") && $("#2").hasClass("TickedO") && $("#3").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
 else if($("#4").hasClass("TickedO") && $("#5").hasClass("TickedO") && $("#6").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
  else if($("#7").hasClass("TickedO") && $("#8").hasClass("TickedO") && $("#9").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
  else if($("#1").hasClass("TickedO") && $("#5").hasClass("TickedO") && $("#9").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
 else if($("#3").hasClass("TickedO") && $("#5").hasClass("TickedO") && $("#7").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
 else if($("#3").hasClass("TickedO") && $("#6").hasClass("TickedO") && $("#9").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
 else if($("#1").hasClass("TickedO") && $("#4").hasClass("TickedO") && $("#7").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
 else if($("#2").hasClass("TickedO") && $("#5").hasClass("TickedO") && $("#8").hasClass("TickedO")){
      $("#title").html("O won");

      Reset();
  }  
    
 if($("#1").hasClass("TickedX") && $("#2").hasClass("TickedX") && $("#3").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }  
 else if($("#4").hasClass("TickedX") && $("#5").hasClass("TickedX") && $("#6").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }  
  else if($("#7").hasClass("TickedX") && $("#8").hasClass("TickedX") && $("#9").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }  
  else if($("#1").hasClass("TickedX") && $("#5").hasClass("TickedX") && $("#9").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }  
 else if($("#3").hasClass("TickedX") && $("#5").hasClass("TickedX") && $("#7").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }  
 else if($("#3").hasClass("TickedX") && $("#6").hasClass("TickedX") && $("#9").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }  
 else if($("#1").hasClass("TickedX") && $("#4").hasClass("TickedX") && $("#7").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }  
 else if($("#2").hasClass("TickedX") && $("#5").hasClass("TickedX") && $("#8").hasClass("TickedX")){
      $("#title").html("X won");

      Reset();
  }
};

$("#reset").on("click",function(){
   $(".game").removeClass("TickedX TickedO").addClass("noTick").empty().unbind();
});