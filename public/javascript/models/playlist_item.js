$(document).ready(function() {
  var PlaylistItem = Backbone.Model.extend({
    defaults: {
      user_playlist_id: '',
      track: '',
      artist: '',
      album: '',
      duration: '',
      image_url: '',
      link: '',
      popularity: 0
    }
  });

  window.PlaylistItem = PlaylistItem;
});
