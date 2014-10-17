Kurkur.MyaccountArticlesEditRoute = Kurkur.AuthenticatedRoute.extend({
  renderTemplate: function() {
    this.render({outlet: 'account'});
  },

  model: function(params) {
    return this.store.find('article', params.id);
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