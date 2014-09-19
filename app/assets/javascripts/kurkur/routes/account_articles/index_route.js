Kurkur.AccountArticlesIndexRoute = Kurkur.AuthenticatedRoute.extend({
  renderTemplate: function() {
    this.render({outlet: 'account'});
  }
});