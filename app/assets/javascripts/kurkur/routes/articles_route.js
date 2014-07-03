Kurkur.ArticlesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('article');
  }
});