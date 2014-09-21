Kurkur.ArticleRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', params.article_id);
  },

  afterModel: function(model) {
    $(document).attr('title', model._data.title + ' | Blog');
    $('head meta[name="description"]').attr('content', model._data.article_content.substr(0, 110));
  }
});