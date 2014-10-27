$(document).ready(function() {

  var PlaylistAction = function() {

    var init = function() {
      routes();
      fetchPlaylists();
    }

    var routes = function() {
        var PlaylistRouter = Backbone.Router.extend({
          routes: {
            "new-playlist":"new_playlist",
          },

          new_playlist: function() {
            var modalView = new NewPlaylistModal();
            $('#modal-wrapper').html(modalView.render().el);
          }
        });
        window.PageRouter = new PlaylistRouter();
        Backbone.history.start();
    }

    var fetchPlaylists = function() {
      ps = new UserPlaylists();
      ps.fetch();

      $('.playlists').empty();
      _.each(ps.models, function(playlist) {
        var template_html = $('#template-playlist').html();
        var template_builder = _.template(template_html);
        $('.playlists').append(template_builder(playlist.toJSON()));
      })
    }

    var createPlaylist = function(name, description) {
      var ps = new UserPlaylists();
      ps.create({
        name: name,
        description: description,
        image_url: ''
      });
    }

    init();

    return {
      fetchPlaylists:fetchPlaylists,
      createPlaylist:createPlaylist
    }
  }();

  window.PlaylistAction = PlaylistAction;
});
