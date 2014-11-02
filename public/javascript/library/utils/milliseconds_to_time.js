$(document).ready(function () {
    if(typeof(Utils) == "undefined") {
      window.Utils = function(){}
    }

    Utils.prototype.millisecondsToTime = function(ms){
        x = ms / 1000;
        seconds = Math.round(x % 60);
        x /= 60;
        minutes = Math.round(x % 60);
        x /= 60;
        hours = Math.round(x % 24);
        x /= 24;
        days = Math.round(x);

        return {days : days, hours : hours, minutes : minutes, seconds : seconds};
    }
});
