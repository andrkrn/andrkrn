Ember.Handlebars.registerBoundHelper('format_date', function(time) {
  // format = (format == null) ? 'LL' : format;
  return moment(time).format('LLL');
});