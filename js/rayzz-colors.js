 
$(document).ready(function() {
  var curDate = new Date();
  var curHour = curDate.getHours();
  // prepareColors(curHour);
});

/*
function prepareColors(hour) {
  var numColorBars = 3;
  if (hour <= 7 || hour >= 17) {
    for (var i = 1; i <= numColorBars; i++) {
      $(".color-bar-" + i).addClass("color-bar-" + i + "-night");
      $("a").addClass("link-night");
    }
  }
}
*/
