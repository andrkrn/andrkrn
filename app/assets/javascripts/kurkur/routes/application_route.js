Kurkur.ApplicationRoute = Ember.Route.extend({
  init: function() {
    this._super();
    Kurkur.AuthManager = AuthManager.create();
  },

  actions: {
    logout: function() {
      Kurkur.AuthManager.reset();
      this.transitionTo('index');
    }
  }
});