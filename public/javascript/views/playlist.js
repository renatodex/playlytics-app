$(document).ready(function() {

  var PlaylistAction = function() {

    var typingTimer;
    var doneTypingInterval = 200;

    var init = function() {
      routes();
      build_playlist_name();
      fetchPlaylistItems();
      events();
    }

    var events = function() {
      $('.remove-playlist-item').unbind('click');
      $('.remove-playlist-item').bind('click', function() {
        console.log('Preparing to remove...');

        var id = $(this).data('playlist-item-id');
        var ps = new UserPlaylistItems();
        ps.fetch();

        var found = ps.findWhere({id:id})
        console.log('Found item...', found);

        found.destroy();

        console.log('Fetching playlist items...');
        fetchPlaylistItems();

        console.log('Finished to remove...');
      })

      $('.add-to-playlist').unbind('click');
      $('.add-to-playlist').on('click', function() {
        console.log('Preparing to add...');

        var track_info = $(this).data('track-info');
        console.log('Found tracking info:', track_info)

        // var ps = new UserPlaylistItems();
        // ps.create(track_info);
        createPlaylistItem(track_info);

        var playlist = retrievePlaylist();
        playlist.set('image_url', track_info.image_url);
        playlist.save();

        $('.autocomplete').empty();
        fetchPlaylistItems();

        console.log('Finished to add...');
      });

      $('.search-field').unbind('keyup');
      $('.search_field').keyup(function(){
          clearTimeout(typingTimer);
          typingTimer = setTimeout(function() {
            $('.autocomplete').empty();
            var playlistItems = SpotifyFacade.search($('.search_field').val(), function(result) {
              _.each(result.models.slice(0,5), function(playlist) {
                var template_params = playlist.toJSON();
                template_params['playlist_json'] = JSON.stringify(playlist.toJSON()).split("'").join('');
                var template_builder = _.template($('#playlist_item_autocomplete_template').html());
                $('.autocomplete').append(template_builder(template_params));
              })

              events();
            })
          }, doneTypingInterval);
      });

      $('.search_field').unbind('keydown');
      $('.search_field').keydown(function(){
          clearTimeout(typingTimer);
      });
    }

    var build_playlist_name = function() {
      $('.playlist-name span').html(retrievePlaylist().get('name'))
    }

    var routes = function() {
        var PageRouter = Backbone.Router.extend({
          routes: {
            "new-playlist-item/:playlist_id":"new_playlist_item"
          },

          new_playlist_item : function(playlist_id) {
            var modalView = new NewPlaylistItemModal();
            $('#modal-wrapper').html(modalView.render().el);
          }
        });
        window.PageRouter = new PageRouter();
        Backbone.history.start();
    }

    var fetchPlaylistItems = function() {
      var ps = new UserPlaylistItems();
      ps.fetch();

      var playlistItems = ps.where({user_playlist_id: $('#page-data').data('playlist-id')});

      $('.playlist_items').empty();
      _.each(playlistItems, function(playlist) {
        var template_builder = _.template($('#playlist_item_template').html());
        $('.playlist_items').append(template_builder(playlist.toJSON()));
      })

      events();
    }

    var retrievePlaylistItem = function(id) {
      var ps = new UserPlaylistItems();
      ps.fetch();
      return ps.findWhere({id:id});
    }

    var retrievePlaylist = function() {
      var ps = new UserPlaylists();
      ps.fetch();
      return ps.findWhere({id:$('#page-data').data('playlist-id')});
    }

    var createPlaylistItem = function(playlist_item) {
      var ps = new UserPlaylistItems();
      ps.create({
        user_playlist_id: playlist_item.user_playlist_id,
        track: playlist_item.track,
        artist: playlist_item.artist,
        album: playlist_item.album,
        duration: parse_duration(playlist_item.duration),
        image_url: playlist_item.image_url,
        link: playlist_item.link,
        popularity: playlist_item.popularity
      });
    }

    var parse_duration = function(duration) {
      var utils = new Utils()
      var time = utils.millisecondsToTime(duration);
      return [time.minutes, ':', time.seconds, 'min'].join('') ;
    }

    init();

    return {
      retrievePlaylist:retrievePlaylist,
      createPlaylistItem:createPlaylistItem,
      fetchPlaylistItems:fetchPlaylistItems
    }
  }();

  window.PageAction = PlaylistAction;
});
