Kurkur.IndexRoute = Ember.Route.extend({
  activate: function() {
    $('head title').text('Andri Kurnia');
    $('head meta[name="description"]').attr('content', description)
  }
});