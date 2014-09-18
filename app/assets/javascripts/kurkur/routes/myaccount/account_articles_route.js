Kurkur.AccountArticlesRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render({outlet: 'account'})
  },

  model: function(params) {
  },

  afterModel: function(model) {
  }
});