Kurkur.MyaccountArticlesNewController = Ember.ObjectController.extend(Kurkur.CurrentUser, {
  needs: ['currentUser'],
  title: '',
  description: '',
  article_content: '',

  actions: {
    create: function() {
      var that = this,
          properties = that.getProperties('title', 'description', 'article_content');

      var article = that.store.createRecord('article', properties);
      article.save().then(function() {
        that.setProperties({
          title: '',
          description: '',
          article_content: ''
        });
        that.get('target').transitionTo('myaccount.articles.index');
      });
    }
  }
});