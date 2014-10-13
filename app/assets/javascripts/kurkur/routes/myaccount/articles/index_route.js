Kurkur.MyaccountArticlesIndexRoute = Kurkur.AuthenticatedRoute.extend({
  renderTemplate: function() {
    this.render({outlet: 'account'});
  },

  model: function() {
    return this.store.find('article');
  },

  actions: {
    showConfirmation: function() {
      swal({
        title: "Archive this article?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Archive it!",
        closeOnConfirm: false
      }, function() {
        swal("Archived!", null, "success")
      });
    }
  }
});