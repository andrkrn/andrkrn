'use strict';
 
/**
Add your info here to link this blog to your free Disqus account
*/
 
Kurkur.DisqusOptions = Em.Object.create({
  shortname: 'andrkrn', // Change this!
});
 
/**
View to show comments for the related blog post and/or page
*/
 
Kurkur.CommentDisqusComponent = Em.Component.extend({
  elementId: 'disqus_thread',
  classNames: ['comments'],
  timer: null,
 
  setupDisqus: function() {
    var controller = this.get('parentView.controller');
    var title = controller.get('title');
 
    window.disqus_title = title;
 
    if (!window.DISQUS) {
      var disqusShortname = Kurkur.DisqusOptions.get('shortname');
 
      window.disqus_shortname = disqusShortname;
      /* * * DON'T EDIT BELOW THIS LINE * * */
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqusShortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
 
  }.on('didInsertElement'),
 
  loadNewPostComments: function() {
    if (window.DISQUS) {
      this.reset();
    } else {
      this.set('timer', Em.run.debounce(this, this.loadNewPostComments, 100));
    }
  }.on('willInsertElement'),
 
  reset: function() {
    var controller = this.get('parentView.controller');
    var postIdentifier = controller.get('urlString');
    var postUrl = window.location.href;
 
    Em.run.scheduleOnce('afterRender', function() {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = postIdentifier;
          this.page.url = postUrl;
        }
      });
    });
  },
});
