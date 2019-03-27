//= require ./vendor/klass
//= require ./vendor/d3.v4.min
//= require ./vendor/topojson
//= require ./vendor/d3-composite-projections
//= require ./vendor/jquery-3.0.0.min
//= require ./charts/epaCartogram
//= require ./charts/epaMap
//= require ./charts/epaPlacesMap
//= require ./charts/incomeProvinceCartogram

$(function(){
  if ($('.js-cartogram').length !== 0) {
    var carto = new epaCartogram('.js-cartogram');
    carto.render();
  }

  if ($('.js-map').length !== 0) {
    var map = new epaMap('.js-map');
    map.render();
  }

  if ($('.js-income-provinces').length !== 0) {
    var incomeProvinces = new incomeProvinceCartogram('.js-income-provinces');
    incomeProvinces.render();
  }
  //
  // if ($('.js-places-map').length !== 0) {
  //   var epaPlaces = new epaPlacesMap('.js-places-map');
  //   epaPlaces.render();
  // }
});
