Kurkur.SignUpRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('registrations.new');
  }
});