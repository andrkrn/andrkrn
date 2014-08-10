Kurkur.IndexView = Ember.View.extend({

  didInsertElement: function() {
    Waves.displayEffect();
  },
  
  actions: {
    setScrollTo: function(target) {
      $.scrollTo(target, 1000);
    }
  }
});