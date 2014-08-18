Kurkur.ApplicationView = Ember.View.extend({
  not404: function() {
    console.log(Kurkur.currentPath)
    return Kurkur.currentPath != "fourOhFour"
  }.property('currentPath')
});