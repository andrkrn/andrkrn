Kurkur.ArticlesRoute = Ember.Route.extend(Kurkur.SeoMixin, {
  title: 'Blog | Andri Kurnia',
  description: 'Andri Kurnia - Blog or article for Web Developer, Enginner, Dota 2, and many more',

  model: function() {
    return this.store.find('article');
  }
});