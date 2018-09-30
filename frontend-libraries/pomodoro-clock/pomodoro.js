var Count = parseInt($("#TimeNum").html());
var BreakTime = parseInt($("#breakN").html());

$("#clockSwitch").on("click", function() {
var Counter = setInterval(MyTimer, 1000);
      Count *= 60;
function MyTimer() {
         $("#clockSwitch, #Minus5T, #Add5T, #brk,#Add5Br,#Minus5Br,#breakN").hide();
         Count -= 1;
         if (Count === 0) {
            clearInterval(Counter);
            var StartBreakT = setInterval(BreakTimer, 1000);
         }
         if (Count % 60 >= 10) {
            $("#TimeNum").html(Math.floor(Count / 60) + ":" + Count % 60);
         } else {
            $("#TimeNum").html(Math.floor(Count / 60) + ":" + "0" + Count % 60);
         }

function MyBreakTimer() {
            $("#Time, #Add5Br, #Minus5Br").hide();
            $("#brk").show();
            BreakTime *= 60;
            BreakTime -= 1;
            if (BreakTime === 0) {
               clearInterval(StartBreakT);
               $("#Time, #Add5Br, #Minus5Br,#Add5T,#Minus5T,#clockSwitch").show();
            }
            if (BreakTime % 60 >= 10) {
               $("#breakN").html(Math.floor(BreakTime / 60) + ":" + BreakTime % 60);
            } else {
               $("#breakN").html(Math.floor(BreakTime / 60) + ":" + "0" + BreakTime % 60);
            }
            $("#breakN").html(BreakTime);
         }
      }
   });

$("#Minus5T").on("click", function() {
      if (Count > 0) {
         Count -= 5;
         $("#TimeNum").html(Count);
      }
   });

$("#Add5T").on("click", function() {
      if (Count < 55) {
         Count += 5;
         $("#TimeNum").html(Count);
      }
   });

$("#Minus5Br").on("click", function() {
      if (Count > 0) {
         Count -= 5;
         $("#breakN").html(Count);
      }
   });

$("#Add5Br").on("click", function() {
      if (Count < 15) {
         Count += 5;
         $("#breakN").html(Count);
      }
   });

