Kurkur.RegistrationsNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({outlet: 'session'})
  },

  model: function() {
    return Ember.Object.create();
  },

  setupController: function(controller) {
    controller.set('content', Ember.Object.create());
    controller.set('errors', false);
  }
});