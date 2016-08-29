//= require vendor/d3.v3.min
//= require vendor/d3-tip.min
//= require vendor/d3-legend
//= require vendor/accounting.min
//= require_directory ./charts/

accounting.settings = {
  currency: {
    symbol: "€/hab.",    // default currency symbol is '$'
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
    var width = $container.parents('.widget').width();

    if(window.location.hash !== ""){
      height = parseFloat(window.location.hash.substr(1));
      height = height - $container.parents('.chart-container').height() - heightOffset;
    } else {
      var minHeight = (3*width) / 4;
      var height = $('[data-height-reference]').height();
    }

    switch ($container.data('chart-container')) {
      case 'debtEvolution':
        window.g = new debtEvolution($container.attr('id'), width, height);
        window.g.render($container.data('chart-data-url'));
        break;
      case 'debtProjection':
        window.g = new debtProjection($container.attr('id'), width, height);
        window.g.render($container.data('chart-data-url'));
        break;
    }
  });

  $('[data-action]').on('click', function(e){
    e.preventDefault();
    console.log($(this).data('action'));
    window.g[$(this).data('action')]();
  });

  $('[data-municipality]').on('click', function(e){
    e.preventDefault();
    console.log('rendering municipality...');
    window.g.renderMunicipalityLine($(this).data('municipality'));
  });

});
