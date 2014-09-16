Kurkur.RegistrationsNewController = Ember.ObjectController.extend({
  errors: {},
  name: '',
  email: '',
  password: '',

  actions: {
    registerUser: function() {
      var that = this,
          properties = that.getProperties('name', 'email', 'password');
    }
  }
});