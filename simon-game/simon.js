const btns = $(".b").toArray();
const redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const yelSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const greSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const bluSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
let Score = 0;
let Pattern = [];
let UsedPatt = [];
let User = [];
let IsStrict = false;
let isRunning = false;

function MyRand() {
 Pattern.push(Math.floor(Math.random() * 4));
}

function Btnred() {
  $(".btn1").css("background-color","white");
   setInterval(function(){$(".btn1").css("background-color","#dd4b3e");}, 1000);
   User.push(0);
   redSound.play();
}

function Btnyellow() {
 $(".btn2").css("background-color","white");
   setInterval(function(){$(".btn2").css("background-color","#ffea37");}, 1000);
   User.push(1);
   yelSound.play();
}

function Btngreen() {
  $(".btn3").css("background-color","white");
   setInterval(function(){$(".btn3").css("background-color","#3edd4b");},1000);
   User.push(2);
   greSound.play();
}

function Btnblu() {
 $(".btn4").css("background-color","white");
   setInterval(function(){$(".btn4").css("background-color","#4b3edd");}, 1000);
   User.push(3);
   bluSound.play();
}

function PatternDisplay() {
   for(var i=0;i<20;i++){
    switch(Pattern[i]){
       case  0:
          setTimeout(function(){ Btnred();},i * 1000);
          break;
       case  1:
          setTimeout(function(){ Btnyellow();}, i * 1000);
          break;
       case 2:
          setTimeout(function(){ Btngreen();}, i * 1000);
          break;
       case 3:
          setTimeout(function(){ Btnblu();},i * 1000);
          break;
               }
   }
}

$(".btn1").on("click",function(){
   Btnred();
   IsStrict ? StrictVerify() : Verify();
   isRunning ? $(".b").unbind("click") : GameOn();
});

$(".btn2").on("click",function(){
   Btnyellow();
   IsStrict ? StrictVerify() : Verify();
   isRunning ? $(".b").unbind("click") : GameOn();
});

$(".btn3").on("click",function(){
   Btngreen();
   IsStrict ? StrictVerify() : Verify();
});

$(".btn4").on("click",function(){
   Btnblu();
   IsStrict ? StrictVerify() : Verify();
});

function Reset() {
   User = [];
   Pattern = [];
   Score = 0;
   $("#scr").html("SCORE : " + Score);
   $("#win").html("PLAY");
   $(".mainbtn").on("click",function(){
       MyRand();
       PatternDisplay();
   });
  $(".mainbtn").css("cursor","pointer");
}

function GameOn() {
   PatternDisplay();
   MyRand();
   $("#win").html("");
   $(".mainbtn").unbind("click");
   $(".mainbtn").css("cursor","initial");
   UsedPatt.push(Pattern);
}

function StrictVerify() {
    for(var i=0;i<Pattern[i];i++){
    if(Pattern[i] != User[i]){
        Reset();
        alert("you lost this level, resetting");
    }
    else if(Pattern[i] === User[i]){
        GameOn();
        $("#win").html("won that level");
        if(Score == 20){
        alert("the game is over, resetting");
        Reset();
    }
    }
}
}

function Verify() {
for(var i=0;i<Pattern[i];i++){
    if(Pattern[i] != User[i]){
        $("#win").html("lost that level");
    }
    else if(Pattern[i] === User[i]){
        GameOn();
        $("#scr").html("SCORE : " + Score);
        Score++;
        $("#win").html("won that level");
        if(Score == 20){
        Reset();
        alert("the game is over, resetting");
    }
    }
}
}

$("#scr").html("SCORE : " + Score);

$(".mainbtn").on("click",function(){
   MyRand();
   PatternDisplay();
});

$("#strict").on("click",function(){
   IsStrict = true; 
});