$(document).ready(function() {
  var UserPlaylists = Backbone.Collection.extend({
    model: Playlist,
    localStorage: new Backbone.LocalStorage("UserPlaylists")
  });

  window.UserPlaylists = UserPlaylists;
});
