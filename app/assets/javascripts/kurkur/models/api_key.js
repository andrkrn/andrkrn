// Ember.Object instead of DS.Model because this will never persist to or query the server
Kurkur.ApiKey = Ember.Object.extend({
  access_token: '',
  userId: ''
});
