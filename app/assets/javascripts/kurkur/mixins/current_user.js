Kurkur.CurrentUser = Ember.Mixin.create({
  currentUser: function() {
    return this.get('controllers.currentUser');
  }.property('controllers.currentUser')
});