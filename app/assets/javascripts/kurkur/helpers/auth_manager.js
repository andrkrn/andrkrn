AuthManager = Ember.Object.extend({
  // Load the current user if the cookies exist and is valid
  init: function() {
    var store = JSON.parse(localStorage.getItem('andrkrn-session'));
        accessToken = store ? store.access_token : null;
        authUserid  = store ? store.auth_user : null;

    this._super();
    if (!Ember.isEmpty(accessToken) && !Ember.isEmpty(authUserid)) {
      this.authenticate(accessToken, authUserid);
    }
  },

  // Determine if the user is currently authenticated.
  isAuthenticated: function() {
    return !Ember.isEmpty(this.get('apiKey.accessToken')) && !Ember.isEmpty(this.get('apiKey.userId'));
  },

  // Authenticate the user. Once they are authenticated, set the access token to be submitted with all
  // future AJAX requests to the server.
  authenticate: function(accessToken, authUserid) {
    $.ajaxSetup({
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });

    // Set the apiKey
    this.set('apiKey', Arc9.ApiKey.create({
      accessToken: accessToken,
      userId: authUserid
    }));
  },

  // Log out the user
  reset: function() {
    this.set('apiKey', null);
    Arc9.__container__.lookup("route:application").transitionTo('sessions.new');
    Ember.run.sync();
    Ember.run.next(this, function(){
      $.ajaxSetup({
        headers: { 'Authorization': 'Bearer none' }
      });
    });
  },

  // Ensure that when the apiKey changes, we store the data in cookies in order for us to load
  // the user when the browser is refreshed.
  apiKeyObserver: function() {
    var that = this;

    if (Ember.isEmpty(that.get('apiKey'))) {
      localStorage.setItem('andrkrn-session', JSON.stringify({
        access_token: null,
        auth_user: null
      }));
    } else {
      localStorage.setItem('andrkrn-session', JSON.stringify({
        access_token: that.get('apiKey.accessToken'),
        auth_user: that.get('apiKey.userId')
      }));
    }
  }.observes('apiKey')
});

// Reset the authentication if any ember data request returns a 401 unauthorized error
DS.rejectionHandler = function(reason) {
  if (reason.status === 401) {
    Arc9.AuthManager.reset();
  }
  throw reason;
};
