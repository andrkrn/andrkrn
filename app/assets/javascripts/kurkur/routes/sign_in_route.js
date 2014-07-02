Kurkur.SignInRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('sessions.new');
  }
});