Kurkur.IndexRoute = Ember.Route.extend(Kurkur.SeoMixin, {
  title: null,
  description: null,

  activate: function() {
    this.set('title', 'Andri Kurnia');
    this.set('description', 'Andri Kurnia - Personal website and some good article or blog for Web developer, Enginner, and of course my favorite game Dota 2');
  }
});