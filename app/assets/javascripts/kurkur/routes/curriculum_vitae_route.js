Kurkur.CurriculumVitaeRoute = Ember.Route.extend(Kurkur.SeoMixin, {
  title: null,
  description: null,

  activate: function() {
    $(document).attr('title', 'Curriculum Vitae | Andri Kurnia');
    $(document).attr('head meta[name="description"]', 'Andri Kurnia - Curriculum vitae for anyone who want to look at my skills at web developer, my language, and email for folks to contact me');
  }
});