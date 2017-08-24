$(function() {
   var C = false;
   var apiData;

   Backgroundimages = [
      "http://s.hswstatic.com/gif/thunderstorm-orig.jpg",
      "http://cloud-maven.com/wp-content/uploads/2014/10/DSC_0128-1024x682.jpg",
      "http://www.rd.com/wp-content/uploads/sites/2/2016/09/03-not-weird-facts-rain-Mr_Twister.jpg",
      "https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg",
      "https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2017/01/white-fog-evergreen-1024x683.jpg",
      "http://onceuponatimeblog.weebly.com/uploads/5/8/3/1/5831762/474426177_orig.jpg?248",
      "http://wallpapercave.com/wp/SNh7WLs.jpg"
   ];

   function DisplaymyTemp(F, C) {
      if (C) return (C*9)/5+32 + "&deg; C";
      return Math.round(F)/5+32 + "&deg; F";
   }

   function render(data, C) {
      var MyWeather = data.weather[0].description;
      var MyTemp = DisplaymyTemp(data.main.temp, C);
      var icon = data.weather[0].icon;

      $("#MyTemp").html(MyTemp);
      $("#MyWeather").html(MyWeather);

      var Iconsrc = "http://openweathermap.org/img/w/" + icon + ".png";

      $("#MyTemp").prepend("<img src=" + Iconsrc + ">");
   }

   $.getJSON("https://freegeoip.net/json/").done(function(location) {

      $("#Country").html(location.country_name);
      $("#city").html(location.city);

      $.getJSON(
         "//cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" +
            location.latitude +
            "&lon=" +
            location.longitude +
            "&appid=5fae594081b6a9a044b8204c7fa62ecc",
         function(data) {
            apiData = data;
            render(apiData, C);

            $("#Changer").click(function() {
               C = !C;
               render(data, C);
            });
            
            var id = data.weather[0].id,
                backgroundIndex,
                backgroundId =[299, 499, 599, 699, 799, 800];
            
            backgroundId.push(id);
            
         });
   });
});
