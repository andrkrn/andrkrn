Kurkur.ArticlesRoute = Ember.Route.extend({

  activate: function() {
    $(document).attr('title', 'Blog | Andri Kurnia');
    $('head meta[name="description"]').attr('content', 'Andri Kurnia - Blog or article for Web Developer, Enginner, Dota 2, and many more');
  },
  
  model: function() {
    // console.log(this.store.find('article'))
    return this.store.find('article');
  }
});