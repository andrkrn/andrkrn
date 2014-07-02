// Add "animated-out" class to elements with data-animated attribute
$('[data-animated]').each(function() {
  $(this).addClass('animated-out');
});
// Switch "animated-out" class to "animated-in" when scrolling
$(window).scroll(function() {
  var scroll      = $(window).scrollTop();
  var height      = $(window).height();
  $('.animated-out[data-animated]').each(function() {
    var $this   = $(this);
    if(scroll + height >= $this.offset().top) {
      var delay   = parseInt($this.attr('data-animated'));
      if(isNaN(delay) || 0 === delay) {
        $this.removeClass('animated-out').addClass('animated-in');
      } else {
        setTimeout(function() {
        $this.removeClass('animated-out').addClass('animated-in');
      }, delay);
     }
    }
  });
});

// Smooth section scrolling
$('[href^="#"]:not([href^="#!"])').bind('click', function(e) {
  e.preventDefault();
  var $this   = $(this);
  var $target = $($this.attr('href'));
  var offset  = $('.navbar').height();
  var speed   = isNaN(parseInt($('body').attr('data-scroll-speed'))) ? 50 : parseInt($('body').attr('data-scroll-speed'));
  if(0 < $target.length) {
    $.scrollTo.window().queue([]).stop();
    $.scrollTo({left: 0, top: Math.max(0, $target.offset().top - offset)}, {duration: speed});
  }
});