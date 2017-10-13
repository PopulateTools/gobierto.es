'use strict';

var incomeProvinceCartogram = Class.extend({
  init: function(containerId){
    var margin = {top: 10, right: 10, bottom: 10, left: 10};
    this.data = null;
    this.pop = null;
    this.income = null;
    this.width = d3.select(containerId).node().clientWidth - margin.left - margin.right;
    this.height = innerWidth < 768 ? 290 : this.width * 0.8 - margin.top - margin.bottom;
    this.padding = 2;

    this.svg = d3.select(containerId).append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
      
    this.squareScale = d3.scaleLinear()
      .range([30, 150])
      .domain([268, 960]);
      
    this.rectSize = d3.scaleSqrt()
      .range([15, this.squareScale(this.width)]);      
  },
  getData: function() {
    d3.queue()
      .defer(d3.json, '/data/es-provinces.v1.json')
      .defer(d3.json, '/data/provinces_pop.json')
      .defer(d3.json, '/data/provinces_income.json')
      .await(function(error, es, pop, income) {
        this.data = es;
        this.pop = pop;
        this.income = income;
        
        this.data.objects.provinces.geometries.forEach(function(d) {
          d.id = +d.id;
          return d
        })
        
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
    var isMobile = innerWidth < 768;
    this.rectSize.domain(d3.extent(this.pop, function(d) {return d.value }));
    
    var ccaa = topojson.feature(this.data, this.data.objects.provinces);
    var provinces = ccaa.features;
    
    var projection = d3.geoConicConformalSpain()
      .fitSize([this.width, this.height], ccaa);
    
    var color = d3.scaleThreshold()
      .domain([16000, 18000, 20000, 22000, 24000, 26000, 28000])
      .range(['#ffffd9','#edf8b1','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#0c2c84']);

    var obj = [];
    this.pop.forEach(function(d) {
      obj[d.id] = d;
    });
    
    var objIncome = [];
    this.income.forEach(function(d) {
      objIncome[d.location_id] = d;
    });

    provinces.forEach(function(d) {
      d.pos = projection(d3.geoCentroid(d))
      d.x = d.pos[0]
      d.y = d.pos[1]
      d.area = this.rectSize(obj[d.id].value) // How we scale
    }.bind(this));
    
    var fontSize = d3.scaleLinear()
      .range([8, 30])
      .domain(d3.extent(provinces, function(d) { return d.area }))

    var simulation = d3.forceSimulation(provinces)
      .force('x', d3.forceX(function(d) { return d.pos[0] }).strength(.1))
      .force('y', d3.forceY(function(d) { return d.pos[1] }).strength(.1))
      .force('collide', collide)

    for (var i = 0; i < 120; ++i) simulation.tick()

    var rect = this.svg.selectAll('g')
      .data(provinces)
      .enter()
      .append('g')
      .attr('class', function(d) { return 'ccaa-' + d.id })
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')' })

    rect.append('rect')
      .each(function(d) {
        d3.select(this)
          .attr('width', d.area)
          .attr('height', d.area)
          .attr('x', -d.area / 2)
          .attr('y', -d.area / 2)
          .attr('fill', function() {
            if (objIncome[d.id]) {
              return color(objIncome[d.id].value);
            } else {
              return '#eee';
            }
          })
          .attr('stroke', 'rgba(0,0,0,.5)')
          .attr('stroke-width', 0.5)
          .attr('rx', 1)
        });

    rect.append('text')
      .each(function(d) {
        d3.select(this)
          .attr('text-anchor', 'middle')
          .attr('dy', isMobile ? 9 : 3)
          .text(obj[d.id].abbr)
          .style('fill', function() {
            if (objIncome[d.id]) {
              return objIncome[d.id].value > 20000 ? 'white' : '#111'
            }
          })
          .style('display', isMobile ? obj[d.id].value > 3000000 ? 'block' : 'none'  : 'block')
          .style('font-size', fontSize(d.area) + 'px')
      });

    // Canary islands path
    this.svg.append('path')
      .style('fill','none')
      .style('stroke','black')
      .attr('d', projection.getCompositionBorders());
      
    var legend = this.svg.append('g')
      .attr('transform', isMobile ? 'translate(' + (this.width - 135) + ',' + (this.height - 30) + ')' : 'translate(' + (this.width - 225) + ',' + (this.height - 40) + ')')
      .attr('class', 'legend');
      
    legend.selectAll('rect')
      .data(color.range())
      .enter()
      .append('rect')
      .attr('x', function(d, i) {
        return isMobile ? i * 15 : i * 25
      })
      .attr('width', isMobile ? 15 : 25)
      .attr('height', 10)
      .attr('fill', function(d) {
        return d;
      })
    
    legend.selectAll('text')
      .data(color.domain())
      .enter()
      .append('text')
      .attr('dx', isMobile ? 6 : 19)
      .attr('dy', isMobile ? '25' : '25')
      .attr('x', function(d, i) {
        return isMobile ? i * 15 : i * 25;
      })
      .text(function(d) {
        return isMobile ? d === 16000 ? d / 1000 + 'k' : '' || d === 28000 ? d / 1000 + 'k' : '' : d / 1000 + 'k';
      })
    
    legend.append('text')
      .attr('class', 'legend-title')
      .text(isMobile ? 'Renta media bruta (€)' : 'Renta provincial media bruta (€)')
      .attr('dy', -8)
      .style('text-shadow', isMobile ? '1px 1px 0px rgb(255, 255, 255), -1px -1px 0px rgb(255, 255, 255), 1px -1px 0px rgb(255, 255, 255), -1px 1px 0px rgb(255, 255, 255)' : '')
    
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
