$(document).ready(function() {
  var UserPlaylistItems = Backbone.Collection.extend({
    model: PlaylistItem,
    localStorage: new Backbone.LocalStorage("UserPlaylistItems"),

    totalDuration : function() {
      return _.reduce(this.models, function(sum, p) {
        return sum + p.get('duration')
      }, 0)
    },

    totalDurationString : function() {
      var utils = new Utils;
      var time = utils.millisecondsToTime(this.totalDuration());
      return [time['minutes'],':',time['seconds'],'min'].join('')
    },

    calculateCoolnessFactor : function() {
      var sum_of_duration_v_popularity = _.reduce(this.models, function(coolnest,v) {
        return coolnest + (v.get('duration')*v.get('popularity'))
      },0)

      return Math.floor(sum_of_duration_v_popularity/this.totalDuration());
    }
  });

  window.UserPlaylistItems = UserPlaylistItems;
});
