$(document).ready(function() {

  var PlaylistAction = function() {

    var init = function() {
      routes();
      build_playlist_name();
    }

    var build_playlist_name = function() {
      $('.playlist-name').html(["Playlist - ", retrievePlaylist().get('name')].join(''))
    }

    var routes = function() {
        var PageRouter = Backbone.Router.extend({
          routes: {
          },
        });
        window.PageRouter = new PageRouter();
        Backbone.history.start();
    }

    var retrievePlaylist = function() {
      var ps = new UserPlaylists();
      ps.fetch();
      return ps.findWhere({id:$('#page-data').data('playlist-id')});
    }

    init();

    return {
      retrievePlaylist:retrievePlaylist
    }
  }();

  window.PageAction = PlaylistAction;
});
