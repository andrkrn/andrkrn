Kurkur.RegistrationsNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({outlet: 'session'});
  },

  beforeModel: function(transition) {
    if (Kurkur.AuthManager.isAuthenticated()) {
      this.transitionTo('index');
    }
  },

  model: function() {
    return Ember.Object.create();
  },

  setupController: function(controller) {
    controller.set('content', Ember.Object.create());
    controller.set('errors', false);
  }
});