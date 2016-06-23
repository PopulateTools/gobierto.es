//= require vendor/jquery-3.0.0.min
//= require analytics
//= require vendor/d3.v3.min
//= require vendor/d3-tip.min
//= require vendor/d3-legend
//= require vendor/queue.min
//= require vendor/accounting.min
//= require vendor/jquery.autocomplete.min
//= require vendor/nouislider.min
//= require vendor/klass
//= require_directory ./charts/

accounting.settings = {
  currency: {
    symbol: "mill €",    // default currency symbol is '$'
    format: "%v %s", // controls output: %s = symbol, %v = value/number (can be object: see below)
    decimal: ",",   // decimal point separator
    thousand:  ".",  // thousands separator
    precision: 0    // decimal places
  },
  number: {
    precision: 0,  // default precision on numbers is 0
    decimal: ",",   // decimal point separator
    thousand: ".",  // thousands separator
  }
}

$(function(){

  // Load charts
  $('[data-chart-container]').each(function(){
    var $container = $(this);
    var height;
    var heightOffset = 20;
    var width = $container.parents('.chart-body').width();

    if(window.location.hash !== ""){
      height = parseFloat(window.location.hash.substr(1));
      height = height - $container.parents('.chart-container').height() - heightOffset;
    } else {
      var minHeight = (3*width) / 4;
      height = $container.parents('.chart-container').height() - heightOffset;

      if(height < minHeight) {
        height = minHeight;
      }
    }
    console.log(width, height);

    switch ($container.data('chart-container')) {
      case 'debtEvolution':
        var g = new debtEvolution($container.attr('id'), width, height);
        g.render($container.data('chart-data-url'));
        break;
      case 'exploreDebt':
        var g = new exploreDebt($container.attr('id'), width, height);
        g.render($container.data('chart-data-url'));
        break;
      case 'municipalitiesDebt':
        var g = new municipalitiesDebt($container.attr('id'), width, height);
        g.render($container.data('chart-data-url'));
        break;
      case 'municipalitiesDebtScatterPlot':
        var g = new municipalitiesDebtScatterPlot($container.attr('id'), width, height);
        g.render($container.data('chart-data-url'));
        break;
    }

  });

});
