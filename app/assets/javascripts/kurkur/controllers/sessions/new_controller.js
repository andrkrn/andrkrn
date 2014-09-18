Kurkur.SessionsNewController = Ember.ObjectController.extend({
  errors: false,
  email: '',
  password: '',

  actions: {
    loginUser: function() {
      var that = this,
          router = that.get('target'),
          properties = that.getProperties('email', 'password'),
          data = {user: properties},
          attemptedTrans = that.get('attemptedTransition');

      // Reset Error
      that.set('errors', false);

      $.post('/api/sessions', data, function(result) {
        Kurkur.AuthManager.authenticate(result.api_key.access_token, result.api_key.user_id);
        
        Ember.run.next(that, function() {
          that.setProperties({
            email: '',
            password: ''
          });

          if (attemptedTrans) {
            attemptedTrans.retry();
            that.set('attemptedTrans', null);
          } else {
            router.transitionTo('index');
          }
        });
      });
    }
  }
});