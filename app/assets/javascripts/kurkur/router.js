// For more information see: http://emberjs.com/guides/routing/

Kurkur.Router.map(function() {
  // Sessions
  this.route('sign_in');
  this.resource('sessions', function() {
    this.route('new');
  });
  // Registrations
  this.route('sign_up');
  this.resource('registrations', function() {
    this.route('new');
  });
  // CV
  this.route('curriculum_vitae', {path: '/cv'});
  // Articles
  this.resource('articles', {path: '/blog'});
  this.resource('article', {path: '/blog/:article_id'});
  // Account
  this.resource('myaccount', {path: '/account'}, function() {
    this.resource('articles', {path: '/articles'}, function() {
      this.route('article', {path: '/:article_id'});
    });
  });
  // 404 Not Found
  this.route("fourOhFour", { path: "/*path"});
});

Kurkur.Router.reopen({
  location: 'history'
});
