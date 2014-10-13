Kurkur.MyaccountArticlesRoute = Kurkur.AuthenticatedRoute.extend({

  renderTemplate: function() {
    this.render({outlet: 'account_sidebar'});
  }

});