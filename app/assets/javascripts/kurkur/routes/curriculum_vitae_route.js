Kurkur.CurriculumVitaeRoute = Ember.Route.extend(Kurkur.SeoMixin, {
  title: null,
  description: null,

  activate: function() {
    this.set('title', 'Curriculum Vitae | Andri Kurnia');
    this.set('description', 'Andri Kurnia - Curriculum vitae for anyone who want to look at my skills at web developer, my language, and email for folks to contact me');
  }
});