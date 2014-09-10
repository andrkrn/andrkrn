Kurkur.IndexRoute = Ember.Route.extend({

  activate: function() {
    $(document).attr('title', 'Andri Kurnia');
    $(document).attr('head meta[name="description"]', 'Andri Kurnia - Personal website and some good article or blog for Web developer, Enginner, and of course my favorite game Dota 2');
  }
});