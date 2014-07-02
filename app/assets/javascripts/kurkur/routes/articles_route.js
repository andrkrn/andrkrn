Kurkur.ArticlesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('article');
  },
  setupController: function(controller, model) {
    var that = this;
    that._super();
    controller.set('content', model);
  }
});