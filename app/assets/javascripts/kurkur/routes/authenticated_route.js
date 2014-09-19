Kurkur.AuthenticatedRoute = Ember.Route.extend({
  userId: null,
  beforeModel: function(transition) {
    if (!Kurkur.AuthManager.isAuthenticated()) {
      this.redirectToLogin(transition);
    } else {
      return this.setCurrentCollaborator();
    }
  },

  setCurrentCollaborator: function(promise) {
    var that = this, promise;

    promise = new Ember.RSVP.Promise(function(resolve, reject) {
      // Set user
      var userId = Kurkur.AuthManager.get('apiKey.userId');

      that.store.find('user', userId).then(function(user) {
        Kurkur.__container__.lookup('controller:currentUser').set('content', user);

        resolve();
      });
    }, function(error) {
      reject(error);
    });

    return promise;
  },

  // Redirect to the login page and store the current transition so we can
  // run it again after login
  redirectToLogin: function(transition) {
    var sessionNewController = this.controllerFor('sessions.new');
    sessionNewController.set('attemptedTransition', transition);
    this.transitionTo('sessions.new');
  },

  actions: {
    error: function(reason, transition) {
      this.redirectToLogin(transition);
    }
  }
});
