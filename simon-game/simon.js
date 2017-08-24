const redSound = new Audio(
   "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
);
const yelSound = new Audio(
   "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
);
const greSound = new Audio(
   "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
);
const bluSound = new Audio(
   "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
);
let Score = 0;
let round = 0;
let btns = ["red", "yellow", "green", "blue"];
let Pattern = [];
let UsedPatt = [];
let User = [];
let IsStrict = false;
let isRunning = false;
let isOn = false;

const PattChoose = () => {
   Pattern.push(btns[Math.floor(Math.random() * 4)]);
   console.log(Pattern);
};

const nextPlay = color => {
   if (color === Pattern[Score]) {
      if (Score === Pattern.length - 1) {
         $("#win").html("Pattern completed");
         setTimeout(()=> $("#win").html(""), 500);
         Score = 0;
         round++;
         $("#scr").html("SCORE : " + Score);
         $("#round").html("ROUND " + round);
         PattChoose();
         setTimeout(() => Playing(), 1000);
      } else {
         Score++;
         $("#scr").html("SCORE : " + Score);
         $("#round").html("ROUND " + round);
         $(".mainbtn").unbind("click").css("cursor", "initial");
      }
   } else {
      $("#win").html("try again");
      Score = 0;
      Pattern.pop();
      User.pop();
      setTimeout(() => Playing(), 1000);
      if(IsStrict === true){
      $("#win").html("Missed, Restarting")
      setTimeout(()=> $("#win").html(""), 500);
         Pattern = [];
         User = [];
         Score = 0;
         round = 0;
      }
   }
   if (round === 20) {
      Score = 0;
      round = 0;
      alert("you beat the game !");
      $("#win").html("PLAY AGAIN");
   }
};

$(".btn1").on("click", () => {
   User.push("red");
   console.log(User);
   if (isOn === true) {
      nextPlay("red");
   }
   $(".btn1").css("opacity", "0.4");
   redSound.play();
   setTimeout(() => {
      $(".btn1").css("opacity", "1");
   }, 500);
});

$(".btn2").on("click", () => {
   User.push("yellow");
   console.log(User);
   if (isOn === true) {
      nextPlay("yellow");
   }
   $(".btn2").css("opacity", "0.4");
   yelSound.play();
   setTimeout(() => {
      $(".btn2").css("opacity", "1");
   }, 500);
});

$(".btn3").on("click", () => {
   User.push("green");
   console.log(User);
   if (isOn === true) {
      nextPlay("green");
   }
   $(".btn3").css("opacity", "0.4");
   greSound.play();
   setTimeout(() => {
      $(".btn3").css("opacity", "1");
   }, 500);
});

$(".btn4").on("click", () => {
   User.push("blue");
   console.log(User);
   if (isOn === true) {
      nextPlay("blue");
   }
   $(".btn4").css("opacity", "0.4");
   bluSound.play();
   setTimeout(() => {
      $(".btn4").css("opacity", "1");
   }, 500);
});

const showPatt = (step, i) => {
   setTimeout(() => {
      if (step == "red") {
         redSound.play();
      } else if (step == "green") {
         greSound.play();
      } else if (step == "yellow") {
         yelSound.play();
      } else if (step == "blue") {
         bluSound.play();
      }
      console.log(step);
      $("#"+step).css("opacity", "0.4");

      setTimeout(function() {
         $("#"+step).css("opacity", "1");
      }, 600);
   }, i * 650);
};

const Playing = () => {
   PattChoose();
   for (var i = 0; i < Pattern.length; i++) {
      showPatt(Pattern[i], i);
   }
};

$("#str").on("click", () => (IsStrict = true));

$("#play").on("click", () => {
   isOn = true;
   $("#play").hide();
   $("#reset").show();
   User = [];
   Playing();
});

$("#reset").on("click", () => {
   Score = 0;
   User = [];
   Pattern = [];
   round = 0;
   IsStrict = false;
   $("#play").show();
   $("#reset").hide();
   $("#win").html("");
   $("#scr").html("SCORE : " + Score);
   $("#round").html("ROUND " + round);
   $("#play").on("click", () => Playing());
});

$(document).ready(() => {$("#reset").hide();})