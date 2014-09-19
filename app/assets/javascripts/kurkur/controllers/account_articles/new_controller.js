Kurkur.AccountArticlesNewController = Ember.ObjectController.extend(Kurkur.CurrentUser, {
  needs: ['currentUser'],
  title: '',
  description: '',
  article_content: '',

  clearProperties: function() {
    var that = this;
    that.setProperties({
      title: '',
      description: '',
      article_content: ''
    });
  },

  messageFailure: function(reason) {
    console.log(reason);
  },

  actions: {
    create: function() {
      var that = this,
          properties = that.getProperties('title', 'description', 'article_content');

      console.log(properties);
      var article = that.store.createRecord('article', properties);
      article.save().then(that.clearProperties).catch(that.messageFailure);
    }
  }
});