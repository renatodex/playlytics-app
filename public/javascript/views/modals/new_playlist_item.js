$(document).ready(function() {
  var NewPlaylistItemModal = Backbone.Modal.extend({
    template: _.template($('#new-playlist-item-template').html()),
    submitEl: '.bbm-button',

    beforeCancel: function() {
      window.PageRouter.navigate('/');
    },

    submit: function() {
      PageAction.createPlaylistItem(
        $('.playlist_id').val(),
        $('.playlist_item_track').val(),
        $('.playlist_item_artist').val(),
        $('.playlist_item_album').val(),
        $('.playlist_item_duration').val(),
        $('.playlist_item_image_url').val(),
        $('.playlist_item_link').val(),
        $('.playlist_item_popularity').val()
      );
      window.PageRouter.navigate('/');
      PageAction.fetchPlaylistItems();
    }
  });

  window.NewPlaylistItemModal = NewPlaylistItemModal;
});
