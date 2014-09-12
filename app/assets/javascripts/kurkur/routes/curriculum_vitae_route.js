Kurkur.CurriculumVitaeRoute = Ember.Route.extend({

  activate: function() {
    $(document).attr('title', 'Curriculum Vitae | Andri Kurnia');
    $('head meta[name="description"]').attr('content', 'Andri Kurnia - Curriculum vitae for anyone who want to look at my skills at web developer, my language, and email for folks to contact me');
  }
});