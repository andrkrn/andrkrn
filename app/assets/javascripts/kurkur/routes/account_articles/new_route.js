Kurkur.AccountArticlesNewRoute = Kurkur.AuthenticatedRoute.extend({
  renderTemplate: function() {
    this.render({outlet: 'account'});
  },

  model: function() {
    return Ember.Object.create();
  }
});