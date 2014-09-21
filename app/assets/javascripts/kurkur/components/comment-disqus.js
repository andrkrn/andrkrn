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
 
Kurkur.DisqusCommentsComponent = Em.Component.extend({
  elementId: 'disqus_thread',
  classNames: ['comments'],
  timer: null,
 
  setupDisqus: function() {
    var controller = this.get('parentView.controller');
    var title = controller.get('title');
 
    window.disqus_title = title;
    console.log("what the fuck off one")
 
    if (!window.DISQUS) {
      var disqusShortname = Kurkur.DisqusOptions.get('shortname');
 
      window.disqus_shortname = disqusShortname;
      console.log("what the fuck one")
      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = '//' + disqusShortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
      console.log("what the fuck")
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
 
/**
Load Disqus comment count to add to each post preview
*/
 
Kurkur.DisqusCommentCount = Em.Mixin.create({
 
  setupCommentCount: function() {
    var disqusShortname = Kurkur.DisqusOptions.get('shortname');
 
    window.disqus_shortname = disqusShortname;
 
    Em.run.later(this, function() {
      /* * * DON'T EDIT BELOW THIS LINE * * */
      var s = document.createElement('script'); s.async = true;
      s.type = 'text/javascript';
      s.src = '//' + disqusShortname + '.disqus.com/count.js';
      (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }, 1000)
  }.on('didInsertElement'),
});
 
Kurkur.ArticleView.reopen(
  Kurkur.DisqusCommentsComponent, {
 
});
 
Em.LinkView.reopen({
 
  addDisqusTag: function() {
    var commentCount = this.get('commentCount');
 
    if (commentCount) {
      var isLinkToPost = this.get('isLinkToPost');
      var href = this.get('href');
      var disqusTag = '#disqus_thread';
 
      this.set('href', href + disqusTag);
    }
  }.on('willInsertElement'),
});