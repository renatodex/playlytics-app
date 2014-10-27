$(document).ready(function() {
  var PlaylistRouter = Backbone.Router.extend({
    routes: {
      "create-playlist":"create_playlist",    // #help
    },

    create_playlist: function() {
      var modalView = new NewPlaylistModal();
      $('#modal-wrapper').html(modalView.render().el);
    }
  });

  window.PageRouter = new PlaylistRouter();
  Backbone.history.start();
});
