$(document).ready(function() {
  var Playlist = Backbone.Model.extend({
    defaults: {
      name: '',
      description: '',
      image_url: ''
    }
  });

  window.Playlist = Playlist;
});
