// For more information see: http://emberjs.com/guides/routing/

Kurkur.Router.map(function() {
  // Root
  this.route('index', {path: 'andrkrn'})
  // Sessions
  this.route('sign_in');
  this.resource('sessions', function() {
    this.route('new');
  });
  // CV
  this.route('curriculum_vitae', {path: 'curriculum-vitae'});
  // Articles
  this.resource('articles');
  // 404 Not Found
  this.route("fourOhFour", { path: "*path"});
});

Kurkur.Router.reopen({
  location: 'history'
});
