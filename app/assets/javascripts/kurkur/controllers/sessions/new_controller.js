Kurkur.SessionsNewController = Ember.ObjectController.extend({
  errors: false,
  email: '',
  password: '',

  actions: {
    loginUser: function() {
      var that = this,
          properties = that.getProperties('email', 'password'),
          data = {user: properties};

      that.set('errors', false);

      console.log(properties);

      $.post('/api/sessions', data, function(results) {
        console.log(results)
        // Kurkur.AuthManager.authenticate()
      });
      // console.log('aw')
    }
  }
});