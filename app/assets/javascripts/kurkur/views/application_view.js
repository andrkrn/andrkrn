Kurkur.ApplicationView = Ember.View.extend({
  not404: function() {
    return Kurkur.currentPath != "fourOhFour"
  }.property('currentPath')
});