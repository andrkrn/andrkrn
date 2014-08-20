Kurkur.SeoMixin = Ember.Mixin.create({
  title: null,
  description: null,

  titleChanged: (function() {
    var title;
    title = this.get('title');
    if (Ember.isEmpty(title)) {
      return;
    }
    return $('head title').text(title);
  }).observes('title').on('init'),

  descriptionChanged: (function() {
    var description;
    description = this.get('description');
    if (Ember.isEmpty(description)) {
      return;
    }
    return $('head meta[name="description"]').attr('content', description);
  }).observes('description').on('init')

});