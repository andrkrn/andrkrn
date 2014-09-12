Kurkur.IndexRoute = Ember.Route.extend({

  activate: function() {
    $(document).attr('title', 'Andri Kurnia');
    $('head meta[name="description"]').attr('content', 'Andri Kurnia - Personal website and some good article or blog for Web developer, Enginner, and of course my favorite game Dota 2');
  }
});