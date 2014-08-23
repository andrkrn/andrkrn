Kurkur.ArticlesRoute = Ember.Route.extend(Kurkur.SeoMixin, {
  title: null,
  description: null,

  activate: function() {
    this.set('title', 'Blog | Andri Kurnia');
    this.set('description', 'Andri Kurnia - Blog or article for Web Developer, Enginner, Dota 2, and many more');
  },
  
  model: function() {
    console.log(this.store.find('article'))
    return this.store.find('article');
  }
});