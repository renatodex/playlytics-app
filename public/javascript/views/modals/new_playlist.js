$(document).ready(function() {
  var NewPlaylistModal = Backbone.Modal.extend({
    template: _.template($('#modal-template').html()),
    cancelEl: '.bbm-button',
    beforeCancel: function() {
      window.PageRouter.navigate('/');
    }
  });

  window.NewPlaylistModal = NewPlaylistModal;
});
