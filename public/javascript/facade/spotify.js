$(document).ready(function() {
  var SpotifyFacade = function() {

    var search = function(search, callback) {
      var search_term = search.split(' ').join('+');
      var cb = callback || function(){};

      $.get(["https://api.spotify.com/v1/search?q=", search_term ,"&type=track"].join(''), function(result) {
        cb(build_playlist_items(result));
      });
    }

    var build_playlist_items = function(result) {
      var playlist_items = new UserPlaylistItems();

      _.each(result.tracks.items, function(track) {
        playlist_items.add({
          user_playlist_id: $('#page-data').data('playlist-id'),
          track: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          duration: track.duration_ms,
          image_url: track.album.images[0].url,
          link: track.href,
          popularity: track.popularity
        })
      });

      return playlist_items;
    }

    return {
      search:search,
      build_playlist_items:build_playlist_items
    }
  }();

  window.SpotifyFacade = SpotifyFacade;
})
