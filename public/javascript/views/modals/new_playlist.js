$(document).ready(function() {
  var NewPlaylistModal = Backbone.Modal.extend({
    template: _.template($('#modal-template').html()),
    cancelEl: '.bbm-button'
  });

  window.NewPlaylistModal = NewPlaylistModal;
});
