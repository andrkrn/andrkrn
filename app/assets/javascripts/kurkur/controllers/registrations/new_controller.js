Kurkur.RegistrationsNewController = Ember.Controller.extend({
  errors: null,
  full_name: '',
  email: '',
  password: '',
  password_confirmation: '',

  actions: {
    registerUser: function() {
      var that = this,
          properties = that.getProperties('full_name', 'email', 'password', 'password_confirmation'),
          data = {user: properties};

      // Reset errors
      that.set('errors', null);

      // console.log(properties);

      $.post('/api/users', data, function(result) {
        Kurkur.AuthManager.authenticate(result.api_key.access_token, result.api_key.user_id);

        Ember.run.next(that, function() {
          that.setProperties({
            full_name: '',
            email: '',
            password: '',
            password_confirmation: ''
          });

          this.get('target').transitionTo('index');
        });
      }).fail(function(jqXHR, textStatus, error) {
        if (jqXHR.status === 422) {
          that.set('errors', jqXHR.responseJSON.errors);
        }
      });
    }
  }
});