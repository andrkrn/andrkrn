Kurkur.MyaccountArticlesEditController = Ember.ObjectController.extend(Kurkur.CurrentUser, {
  needs: ['currentUser'],

  actions: {
    edit: function(id) {
      var that = this,
          properties = that.getProperties('title', 'description', 'article_content'),
          article = that.get('model');

      article.setProperties(properties);
      article.save().then(function() {
        that.get('target').transitionTo('myaccount.articles.index');
      });
    }
  }
});