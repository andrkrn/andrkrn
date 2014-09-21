Kurkur.ArticleView = Ember.View.extend({

  didInsertElement: function() {
    this.set_disqus();
  },

  set_disqus: function() {
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    // var disqus_shortname = 'andrkrn'; // required: replace example with your forum shortname
    // /* * * DON'T EDIT BELOW THIS LINE * * */
    // (function() {
    //     var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    //     dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    //     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    // })();
  },

  setAddthis: function() {
  }
});