$(document).ready(function() {

  var PlaylistAction = function() {

    var init = function() {
      routes();
    }

    var routes = function() {
        var PageRouter = Backbone.Router.extend({
          routes: {
          },
        });
        window.PageRouter = new PageRouter();
        Backbone.history.start();
    }

    init();

    return {
    }
  }();

  window.PageAction = PlaylistAction;
});
