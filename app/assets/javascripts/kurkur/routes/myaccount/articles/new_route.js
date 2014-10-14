Kurkur.MyaccountArticlesNewRoute = Kurkur.AuthenticatedRoute.extend({
  renderTemplate: function() {
    this.render({outlet: 'account'});
  },

  model: function() {
    return this.store.createRecord('article');
  }
});