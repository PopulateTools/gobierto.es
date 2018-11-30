// http://geoexamples.com/d3-composite-projections/ Version 1.2.0. Copyright 2017 Roger Veciana i Rovira.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-geo'), require('d3-path')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-geo', 'd3-path'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3,global.d3));
}(this, function (exports,d3Geo,d3Path) { 'use strict';

  var epsilon = 1e-6;

  function noop() {}

  var x0 = Infinity;
  var y0 = x0;
  var x1 = -x0;
  var y1 = x1;
  var boundsStream = {
    point: boundsPoint,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop,
    result: function() {
      var bounds = [[x0, y0], [x1, y1]];
      x1 = y1 = -(y0 = x0 = Infinity);
      return bounds;
    }
  };

  function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function fitExtent(projection, extent, object) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        clip = projection.clipExtent && projection.clipExtent();

    projection
        .scale(150)
        .translate([0, 0]);

    if (clip != null) projection.clipExtent(null);

    d3Geo.geoStream(object, projection.stream(boundsStream));

    var b = boundsStream.result(),
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;

    if (clip != null) projection.clipExtent(clip);

    return projection
        .scale(k * 150)
        .translate([x, y]);
  }

  function fitSize(projection, size, object) {
    return fitExtent(projection, [[0, 0], size], object);
  }

  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex(streams) {
    var n = streams.length;
    return {
      point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
      sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
      lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
      lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
      polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
      polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
    };
  }

  // A composite projection for Spain, configured by default for 960×500.
  function conicConformalSpain() {
    var cache,
        cacheStream,

        iberianPeninsule = d3Geo.geoConicConformal().rotate([5, -38.6]).parallels([0,60]), iberianPeninsulePoint,
        canaryIslands = d3Geo.geoConicConformal().rotate([5, -38.6]).parallels([0,60]), canaryIslandsPoint,

        point, pointStream = {point: function(x, y) { point = [x, y]; }};

    function conicConformalSpain(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return point = null,
          (iberianPeninsulePoint.point(x, y), point) ||
          (canaryIslandsPoint.point(x, y), point);
    }

    conicConformalSpain.invert = function(coordinates) {
      var k = iberianPeninsule.scale(),
          t = iberianPeninsule.translate(),
          x = (coordinates[0] - t[0]) / k,
          y = (coordinates[1] - t[1]) / k;

          return (y >= 0.05346 && y< 0.0897 && x >= -0.13388 && x < -0.0322 ? canaryIslands
              : iberianPeninsule).invert(coordinates);
    };

    conicConformalSpain.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex$2([iberianPeninsule.stream(cacheStream = stream), canaryIslands.stream(stream)]);
    };

    conicConformalSpain.precision = function(_) {
      if (!arguments.length) {return iberianPeninsule.precision();}
      iberianPeninsule.precision(_);
      canaryIslands.precision(_);
      return reset();
    };

    conicConformalSpain.scale = function(_) {
      if (!arguments.length) {return iberianPeninsule.scale();}
      iberianPeninsule.scale(_);
      canaryIslands.scale(_);
      return conicConformalSpain.translate(iberianPeninsule.translate());
    };

    conicConformalSpain.translate = function(_) {
      if (!arguments.length) {return iberianPeninsule.translate();}
      var k = iberianPeninsule.scale(), x = +_[0], y = +_[1];

      iberianPeninsulePoint = iberianPeninsule
          .translate(_)
          .clipExtent([[x - 0.06857 * k, y - 0.1288 * k],[x + 0.13249 * k, y + 0.06 * k]])
          .stream(pointStream);

      canaryIslandsPoint = canaryIslands
          .translate([x + 0.1 * k, y - 0.094 * k])
          .clipExtent([[x - 0.1331 * k + epsilon, y + 0.053457 * k + epsilon],[x  - 0.0354 * k - epsilon, y + 0.08969 * k - epsilon]])
          .stream(pointStream);

      return reset();
    };

    conicConformalSpain.fitExtent = function(extent, object) {
      return fitExtent(conicConformalSpain, extent, object);
    };

    conicConformalSpain.fitSize = function(size, object) {
      return fitSize(conicConformalSpain, size, object);
    };

    function reset() {
      cache = cacheStream = null;
      return conicConformalSpain;
    }

    conicConformalSpain.drawCompositionBorders = function(context) {
      var ulCanaryIslands = iberianPeninsule([-14.0346750, 34.965007]);
      var urCanaryIslands = iberianPeninsule([-7.4208899, 35.536988]);
      var ldCanaryIslands = iberianPeninsule([-7.3148275, 33.54359]);

      context.moveTo(ulCanaryIslands[0], ulCanaryIslands[1]);
      context.lineTo(urCanaryIslands[0], urCanaryIslands[1]);
      context.lineTo(ldCanaryIslands[0], ldCanaryIslands[1]);
    };
    conicConformalSpain.getCompositionBorders = function() {
      var context = d3Path.path();
      this.drawCompositionBorders(context);
      return context.toString();
    };

    return conicConformalSpain.scale(2700);
  }

  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex$2(streams) {
    var n = streams.length;
    return {
      point: function(x, y) { var i = -1; while (++i < n) {streams[i].point(x, y); }},
      sphere: function() { var i = -1; while (++i < n) {streams[i].sphere(); }},
      lineStart: function() { var i = -1; while (++i < n) {streams[i].lineStart(); }},
      lineEnd: function() { var i = -1; while (++i < n) {streams[i].lineEnd(); }},
      polygonStart: function() { var i = -1; while (++i < n) {streams[i].polygonStart(); }},
      polygonEnd: function() { var i = -1; while (++i < n) {streams[i].polygonEnd(); }}
    };
  }

  exports.geoConicConformalSpain = conicConformalSpain;

  Object.defineProperty(exports, '__esModule', { value: true });

}));