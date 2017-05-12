//= require vendor/d3.v4.min
//= require vendor/topojson
//= require vendor/d3-composite-projections
//= require ./charts/cartogram

$(function(){
  if ($('.js-cartogram').length !== 0) {
    var carto = new cartogram('.js-cartogram');
    carto.render();
  }
});
