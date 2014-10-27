$(document).ready(function() {
  var NewPlaylistItemModal = Backbone.Modal.extend({
    template: _.template($('#new-playlist-item-template').html()),
    submitEl: '.bbm-button',

    beforeCancel: function() {
      window.PageRouter.navigate('/');
    },

    submit: function() {
      PageAction.createPlaylistItem(
        $('.playlist_name').val(),
        $('.playlist_description').val()
      );
      window.PageRouter.navigate('/');
      PageAction.fetchPlaylistItems();
    }
  });

  window.NewPlaylistItemModal = NewPlaylistItemModal;
});
