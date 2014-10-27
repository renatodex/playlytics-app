$(document).ready(function() {
  var NewPlaylistModal = Backbone.Modal.extend({
    template: _.template($('#modal-template').html()),
    submitEl: '.bbm-button',

    beforeCancel: function() {
      window.PageRouter.navigate('/');
    },

    submit: function() {
      PlaylistAction.createPlaylist(
        $('.playlist_name').val(),
        $('.playlist_description').val()
      );
      window.PageRouter.navigate('/');
      PlaylistAction.fetchPlaylists();
    }
  });

  window.NewPlaylistModal = NewPlaylistModal;
});
