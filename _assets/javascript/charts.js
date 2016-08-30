//= require vendor/d3.v3.min
//= require vendor/d3-tip.min
//= require vendor/d3-legend
//= require vendor/accounting.min
//= require vendor/jquery.autocomplete.min
//= require_directory ./charts/

accounting.settings = {
  currency: {
    symbol: "M €",    // default currency symbol is '$'
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
      var height = $('[data-height-reference='+$container.attr('id')+']').height();
    }

    switch ($container.data('chart-container')) {
      case 'debtEvolution':
        window.g = new debtEvolution($container.attr('id'), width, height);
        window.g.render($container.data('chart-data-url'));
        break;
      case 'debtProjection':
        window.g = new debtProjection($container.attr('id'), width, height);
        window.g.render($container.data('chart-data-url'), function(){
          // Filter municipalities with data in 2015
          var municipalities = window.g.municipalitiesData.filter(function(e){
            return e.year.getFullYear() == 2015;
          }).
          map(function(e){
            return {value: e.name, data: e.ine_code};
          });

          $('#suggest').autocomplete({
            lookup: municipalities,
            minChars: 3,
            onSelect: function(suggestion) {
              $('[data-municipality-projection] input:hidden').val(suggestion.data);
            }
          });
        });
        break;
    }
  });

  $('[data-action]').on('click', function(e){
    e.preventDefault();
    window.g[$(this).data('action')]();
    var $parent = $(this).parent();
    var currentStep = $parent.data('step');
    $parent.hide();
    $('[data-step='+(currentStep+1)+']').show();
  });

  $('[data-municipality-projection]').on('submit', function(e){
    e.preventDefault();
    var ineCode = $(this).find('input:hidden').val();
    var municipalityName = $(this).find('input:text').val();
    var $parent = $(this).parent();
    window.g.renderMunicipalityLine(ineCode, function(){
      var currentStep = $parent.data('step');
      $parent.hide();
      $('[data-step='+(currentStep+1)+']').show();
      var $containerResults = $('[data-step='+(currentStep+1)+']').find('p > strong');
      window.g.renderTextResults(municipalityName, window.g.municipalityDebtCompleteYear, $containerResults);
    });
  });

});
