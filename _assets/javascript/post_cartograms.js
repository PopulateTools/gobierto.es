//= require vendor/d3.v4.min
//= require vendor/topojson
//= require vendor/d3-composite-projections
//= require ./charts/epaCartogram
//= require ./charts/epaMap

$(function(){
  if ($('.js-cartogram').length !== 0) {
    var carto = new epaCartogram('.js-cartogram');
    carto.render();
  }
  
  if ($('.js-map').length !== 0) {
    var map = new epaMap('.js-map');
    map.render();
  }
});
