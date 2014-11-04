$(document).ready(function() {
  var PlaylistItem = Backbone.Model.extend({
    defaults: {
      user_playlist_id: '',
      track: '',
      artist: '',
      album: '',
      duration: 0,
      image_url: '',
      link: '',
      popularity: 0,
      position:0
    },

    duration_time : function() {
      var utils = new Utils()
      var time = utils.millisecondsToTime(this.get('duration'));
      return [time.minutes, ':', time.seconds, 'min'].join('') ;
    }
  });

  window.PlaylistItem = PlaylistItem;
});
