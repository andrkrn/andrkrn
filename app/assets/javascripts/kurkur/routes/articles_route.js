Kurkur.ArticlesRoute = Ember.Route.extend({

  activate: function() {
    $(document).attr('title', 'Blog | Andri Kurnia');
    $(document).attr('head meta[name="description"]', 'Andri Kurnia - Blog or article for Web Developer, Enginner, Dota 2, and many more');
  },
  
  model: function() {
    // console.log(this.store.find('article'))
    return this.store.find('article');
  }
});