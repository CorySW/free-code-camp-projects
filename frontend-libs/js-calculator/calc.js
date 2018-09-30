var inputs = [""];
var total;
var ops = ["+", "-", "/", "*"];
var specialop = ["."];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getVal(input) {
     if(specialop.includes(inputs[inputs.length-1]) === true && input == ".") {
  }

    else if(inputs.length == 1 && ops.includes(input) === false) {
      inputs.push(input);
    }

  else if(ops.includes(inputs[inputs.length-1]) === false) {
    inputs.push(input);
  }
    else if(nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

function update(){
    total= inputs.join("");
    $("#steps").html(total);
  }

function getTotal(){
    total = inputs.join("");
    $("#steps").html(eval(total));
  }
  
  $("button").on("click",function() {
    if(this.id == "KeyClear"){
      inputs = [""];
      update();
    }
    else if(this.id == "KeyEqual") {
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getVal(this.id);
      }
      else {
        getVal(this.id);
      }
    } 
  });