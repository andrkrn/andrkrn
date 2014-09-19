Kurkur.ApplicationController = Ember.Controller.extend({
  
  updateCurrentPath: function() {
    Kurkur.set('currentPath', this.get('currentPath'));
  }.observes('currentPath'),

  isAuthenticated: function() {
    return Kurkur.AuthManager.isAuthenticated();
  }.property('Kurkur.AuthManager.apiKey')
})