$(document).ready(function() {
   var url = "https://api.twitch.tv/kraken/streams/freecodecamp";

   $.ajax({
      type: "GET",
      url: url,
      headers: {
         "Client-ID": "2ajzhy07owqzb5jai3ohinrj3w7rdx"
      },
      dataType: "json",
      success: function(data1) {
         if (data1.stream === null) {
            $("#fccstatus").html("Free Code Camp is currently OFFLINE");
         } else {
            $("#fccstatus").html("Free Code Camp is currently STREAMING");
         }
      },
      error: function(errorMessage) {
         alert("sorry but something went wrong");
      }
   });
   
   $.ajax({
      type: "GET",
      url:"https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/" ,
      headers: {
         "Client-ID": "2ajzhy07owqzb5jai3ohinrj3w7rdx"
      },
      dataType: "json",
      success: function(data2){
         for (var i = 0; i < data2.follows.length; i++) {
    console.log(data2.follows[0]);
      var displayName = data2.follows[i].channel.display_name;
      var logo = data2.follows[i].channel.logo;
    var status= data2.follows[i].channel.status;
    if(logo==null){
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
    }
     $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<a href='https://www.twitch.tv/"+ displayName+"' target = '_blank'><img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-2 '>" + status + "</div></div>");
    }    
    }    
  });
  var deletedFollowers=['brunofin', 'comster404'];
  for(var i=0;i<deletedFollowers.length;i++){
     $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/"+deletedFollowers[i],
    headers:{
      'Client-ID': 'lpcfra5atdz9k7jtdldz5729cfh4zua'
    },
     error: function(data3){
       var logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
       var displayName= data3.statusText;
       var status= data3.status;
         $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4 '>" +
              "<a  href='https://www.twitch.tv/" +displayName+  +"'><img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-4 '>" + displayName + "</div>" + "<div class='col-md-4 '>" + status + "</div></div>");
     }
      });
   };
});
