$(document).ready(function() {
  var UserPlaylistItems = Backbone.Collection.extend({
    model: PlaylistItem,
    localStorage: new Backbone.LocalStorage("UserPlaylistItems")
  });

  window.UserPlaylistItems = UserPlaylistItems;
});
