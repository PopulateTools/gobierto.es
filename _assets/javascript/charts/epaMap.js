'use strict';

var epaMap = Class.extend({
  init: function(containerId){
    var margin = {top: 10, right: 10, bottom: 10, left: 10};
    
    this.data = null;
    this.pop = null;
    this.epa = null;
    this.width = d3.select(containerId).node().clientWidth - margin.left - margin.right;
    this.height = this.width * 0.8 - margin.top - margin.bottom;
    this.padding = 4;

    this.svg = d3.select(containerId).append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
  },
  getData: function() {
    d3.queue()
      .defer(d3.json, '/data/es-provinces.v1.json')
      .defer(d3.json, '/data/epa_latest.json')
      .await(function(error, es, epa) {
        this.data = es;
        this.epa = epa;
        
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
    var ccaa = topojson.feature(this.data, this.data.objects.autonomous_regions);
    var provinces = ccaa.features;
    
    var obj = [];
    
    this.epa.forEach(function(d) {
      obj[d.location_id] = d;
    });
    
    var projection = d3.geoConicConformalSpain()
      .fitSize([this.width, this.height], ccaa);
    
    var color = d3.scaleThreshold()
      .domain([12, 14, 16, 18, 20, 22, 24, 26])
      .range(['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177','#49006a']);
    
    var fontSize = d3.scaleLinear()
      .range([8, 24])
      .domain(d3.extent(provinces, function(d) { return d.area }));

    var path = d3.geoPath()
      .projection(projection);

    this.svg.append('g')
      .attr('class', 'ccaa')
      .selectAll('path')
      .data(provinces)
      .enter()
      .append('path')
      .attr('fill', function(d) {
        return color(obj[d.id].value);
      })
      .attr('stroke', 'white')
      .attr('d', path);
      
    this.svg.append("path")
      .datum(topojson.mesh(this.data, this.data.objects.provinces, function(a, b) { return a !== b; }))
      .attr("class", "border")
      .attr("d", path);
      
    this.svg.append("path")
      .datum(topojson.mesh(this.data, this.data.objects.nation))
      .attr("class", "nation")
      .attr("d", path);
      
    var cities = [
      {
        'id': '13',
        'name': 'Madrid',
        'mobile': true,
        'coords': [-3.6808241, 40.4078974]
      },
      {
        'id': '09',
        'name': 'Barcelona',
        'mobile': true,
        'coords': [2.1487679, 41.3947901]
      },
      {
        'id': '01',
        'name': 'Sevilla',
        'mobile': true,
        'coords': [-5.9270774, 37.3629559]
      },
      {
        'id': '10',
        'name': 'Valencia',
        'coords': [-0.3615113, 39.4077853]
      },
      {
        'id': '16',
        'name': 'Bilbao',
        'coords': [-2.9334981, 43.2633224]
      },
      {
        'id': '12',
        'name': 'Santiago',
        'coords': [-8.5468296, 42.8859281]
      }
    ];
    
    var cities = this.svg.append('g')
      .attr('class', 'cities')
      .selectAll('g')
      .data(cities)
      .enter();
      
    var city = cities
      .append('g')
      .attr('class', 'city')
      .attr('transform', function(d) {
        return 'translate(' + projection(d.coords)[0] + ',' + projection(d.coords)[1] + ')'
      })
      
    city.append('rect')
      .attr('width', 6)
      .attr('height', 6)
      .style('fill', function(d) {
        return obj[d.id].value > 25 ? 'white' : '#111';
      })
      .style('display', function(d) { return isMobile ? d.mobile ? 'block' : 'none' : 'block'})
      
    city.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', -5)
      .style('fill', function(d) {
        return obj[d.id].value > 25 ? 'white' : '#111';
      })
      .style('text-shadow', function(d) {
        return obj[d.id].value > 25 ? '' : '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff';
      })
      .text(function(d) { return d.name; })
      .style('display', function(d) { return isMobile ? d.mobile ? 'block' : 'none' : 'block'})
    
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
        return isMobile ? d === 12 ? d : '' || d === 26 ? d : '' : d;
      })
    
    legend.append('text')
      .attr('class', 'legend-title')
      .text('Tasa de paro (%)')
      .attr('dy', -8);
      
  },
});
