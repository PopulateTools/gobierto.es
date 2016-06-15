'use strict';

var debtEvolution = Class.extend({
  init: function(containerId, width, height){
    var margin = {top: 20, right: 50, bottom: 30, left: 90};

    this.width = width - margin.left - margin.right;
    this.height = height - margin.top - margin.bottom;

    this.x = d3.time.scale()
        .range([0, this.width]);

    this.y = d3.scale.linear()
        .range([this.height, 0]);

    this.xAxis = d3.svg.axis()
        .scale(this.x)
        .orient("bottom");

    this.yAxis = d3.svg.axis()
        .scale(this.y)
        .tickFormat(function(v){
          return accounting.formatMoney(v);
        })
        .orient("left");

    this.line = d3.svg.line()
        .interpolate("cardinal")
        .x(function(d) { return this.x(d.date); }.bind(this))
        .y(function(d) { return this.y(d.value); }.bind(this));

    this.svg = d3.select("#"+containerId).append("svg")
        .attr("width", this.width + margin.left + margin.right)
        .attr("height", this.height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.tip = null;
  },

  render: function(url){
    function type(d) {
      d.date = d3.time.format("%Y").parse(d.date);
      d.value = +d.value/1000000;
      return d;
    }

    d3.csv(url, type, function(error, data) {
      if (error) throw error;

      this.tip = d3.tip()
        .direction('s')
        .attr('class', 'd3-tip')
        .html(function(d) {
          return "<strong>Año:</strong> " + d.date.getFullYear() + "</strong>" +
            "<br><strong>Deuda:</strong> " + accounting.formatMoney(d.value);
        });
      this.svg.call(this.tip);


      this.x.domain(d3.extent(data, function(d) { return d.date; }));
      this.y.domain([0, d3.max(data, function(d) { return d.value; })]);

      this.svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + this.height + ")")
          .call(this.xAxis);

      this.svg.append("g")
          .attr("class", "y axis")
          .call(this.yAxis);

      this.svg.append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", this.line);

      var rectSize = 60;
      this.svg.append("g")
          .selectAll("rect")
          .data(data)
          .enter()
            .append('rect')
            .attr('data-year', function(d){return d.date.getFullYear()})
            .attr("x", function(d){return this.x(d.date) - rectSize/2;}.bind(this))
            .attr("y", function(d){return this.y(d.value) - rectSize/2;}.bind(this))
            .attr("width", rectSize)
            .attr("height", rectSize)
            .attr("fill", "black")
            .attr("stroke", "black")
            .attr("opacity", 0)
            .on('mouseover', function(d){
              $('circle[data-year='+d.date.getFullYear()+']').attr('opacity', 1);
              this.tip.show(d);
            }.bind(this))
            .on('mouseout', function(d){
              $('circle[data-year='+d.date.getFullYear()+']').attr('opacity', 0);
              this.tip.hide(d);
            }.bind(this));

      this.svg.append("g")
          .selectAll("circle")
          .data(data)
          .enter()
            .append('circle')
            .attr('r', 5)
            .attr('data-year', function(d){return d.date.getFullYear()})
            .attr("cx", function(d){return this.x(d.date);}.bind(this))
            .attr("cy", function(d){return this.y(d.value);}.bind(this))
            .attr("fill", "steelblue")
            .attr("stroke", "steelblue")
            .attr("opacity", 0);

    }.bind(this));
  },

});
