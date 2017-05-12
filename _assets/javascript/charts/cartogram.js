'use strict';

var cartogram = Class.extend({
  init: function(containerId){
    var margin = {top: 10, right: 10, bottom: 10, left: 10};
    
    this.data = null;
    this.pop = null;
    this.width = d3.select(containerId).node().clientWidth; - margin.left - margin.right;
    this.height = this.width * 0.8 - margin.top - margin.bottom;
    this.padding = 4;
    
    this.projection = d3.geoConicConformalSpain()
      .translate([this.width / 2, this.height / 2])
      .scale(3500);
      
    this.svg = d3.select(containerId).append("svg")
      .attr("width", this.width)
      .attr("height", this.height);
      
    this.rectSize = d3.scaleSqrt()
      .range([20, 120]);
  },
  getData: function() {
    d3.queue()
      .defer(d3.json, '/data/es-provinces.v1.json')
      .defer(d3.json, '/data/ccaa_pop.json')
      .await(function(error, es, pop) {
        this.data = es;
        this.pop = pop;
        
        this.updateRender();
      }.bind(this));
  },
  render: function() {
    if (this.data === null) {
      this.getData();
    } else {
      this.updateRender();
    }
  },
  updateRender: function(callback) {
    this.rectSize.domain(d3.extent(this.pop, function(d) {return d.value }));
    var provinces = topojson.feature(this.data, this.data.objects.autonomous_regions).features;

    var obj = [];
    
    this.pop.forEach(function(d) {
      obj[d.id] = d;
    });

    provinces.forEach(function(d) {
      d.pos = this.projection(d3.geoCentroid(d))
      d.x = d.pos[0]
      d.y = d.pos[1]
      d.area = this.rectSize(obj[d.id].value) // How we scale
    }.bind(this));
    
    var fontSize = d3.scaleLinear()
      .range([8, 24])
      .domain(d3.extent(provinces, function(d) { return d.area }))

    var simulation = d3.forceSimulation(provinces)
      .force("x", d3.forceX(function(d) { return d.pos[0] }).strength(.1))
      .force("y", d3.forceY(function(d) { return d.pos[1] }).strength(.1))
      .force("collide", collide)

    for (var i = 0; i < 120; ++i) simulation.tick()

    var rect = this.svg.selectAll("g")
      .data(provinces)
      .enter()
      .append("g")
      .attr("class", function(d) { return "ccaa-" + d.id })
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")" })

    rect.append("rect")
      .each(function(d) {
        d3.select(this)
          .attr("width", d.area)
          .attr("height", d.area)
          .attr("x", -d.area / 2)
          .attr("y", -d.area / 2)
          // .attr("fill", color(d.properties.paro))
          .attr("stroke", "white")
          .attr("rx", 2)
        });

    rect.append("text")
      .each(function(d) {
        d3.select(this)
          .attr("text-anchor", "middle")
          .attr("dy", 3)
          .text(d.id)
          .style("fill", "white")
          .style("font-size", fontSize(d.area) + "px")
      });

    // Canary islands path
    this.svg.append("path")
      .style("fill","none")
      .style("stroke","black")
      .attr("d", this.projection.getCompositionBorders());
      
    function collide() {
      for (var k = 0, iterations = 4, strength = 0.5; k < iterations; ++k) {
        for (var i = 0, n = provinces.length; i < n; ++i) {
          for (var a = provinces[i], j = i + 1; j < n; ++j) {
            var b = provinces[j],
                x = a.x + a.vx - b.x - b.vx,
                y = a.y + a.vy - b.y - b.vy,
                lx = Math.abs(x),
                ly = Math.abs(y),
                r = a.area/2 + b.area/2 + 2;
            if (lx < r && ly < r) {
              if (lx > ly) {
                lx = (lx - r) * (x < 0 ? -strength : strength);
                a.vx -= lx, b.vx += lx;
              } else {
                ly = (ly - r) * (y < 0 ? -strength : strength);
                a.vy -= ly, b.vy += ly;
              }
            }
          }
        }
      }
    }
    
    
  },
});
