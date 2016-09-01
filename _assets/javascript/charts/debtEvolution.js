'use strict';

var debtEvolution = Class.extend({
  init: function(containerId, width, height){
    var margin = {top: 40, right: 50, bottom: 30, left: 82};
    var heightOffset = 8;

    this.width = width - margin.left - margin.right;
    this.height = height + heightOffset - margin.top - margin.bottom;

    this.x = d3.time.scale()
        .range([0, this.width]);

    this.yDebt = d3.scale.linear()
        .range([this.height, 0]);

    this.yPercentage = d3.scale.linear()
        .range([this.height, 0]);

    this.legendScale = d3.scale.ordinal()
        .domain(['Evolución de la deuda acumulada', '% del presupuesto anual dedicado a pagar deuda'])
        .range([ "#4292a1", "#fcb842"]);

    this.xAxis = d3.svg.axis()
        .scale(this.x)
        .ticks(4)
        .orient("bottom");

    this.yAxisDebt = d3.svg.axis()
        .scale(this.yDebt)
        // .ticks(8)
        // .innerTickSize(-this.width - 20)
        // .outerTickSize(0)
        // .tickPadding(10)
        .tickFormat(function(v){
          return accounting.formatMoney(v);
        })
        .orient("left");

    this.yAxisPercentage = d3.svg.axis()
        .scale(this.yPercentage)
        .tickFormat(function(v){
          return v + '%';
        })
        .orient("right");

    this.debtLine = d3.svg.line()
        .interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yDebt(d.debt); }.bind(this));

    this.percentageLine = d3.svg.line()
        .interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yPercentage(d.percentage); }.bind(this));

    this.svg = d3.select("#"+containerId).append("svg")
        .attr("width", this.width + margin.left + margin.right)
        .attr("height", this.height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.tip= null;
  },

  render: function(url){
    function type(d) {
      d.year = d3.time.format("%Y").parse(d.year);
      d.debt = +d.debt/1000000;
      d.percentage = +d.percentage;
      return d;
    }

    d3.csv(url, type, function(error, data) {
      if (error) throw error;

      this.tip = d3.tip()
        .direction('w')
        .attr('class', 'd3-tip')
        .html(function(d) {
          return "<strong>" + accounting.formatMoney(d.debt) + " deuda</strong><br>" +
                 "<strong>" + d.percentage + "% presupuesto</strong><br>" +
                 "en </strong> " + d.year.getFullYear() + "</strong>";
        });
      this.svg.call(this.tip);

      this.x.domain(d3.extent(data, function(d) { return d.year; }));
      this.yDebt.domain([0, d3.max(data, function(d) { return d.debt; })]);
      this.yPercentage.domain([0, d3.max(data, function(d) { return d.percentage; })]);

      this.svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + this.height + ")")
          .call(this.xAxis);

      this.svg.append("g")
          .attr("class", "y axis")
          .call(this.yAxisDebt);

      this.svg.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(" + (this.width) + ",0)")
          .call(this.yAxisPercentage);

      this.svg.append("path")
          .datum(data)
          .classed("line", true)
          .classed("debt-evolution", true)
          .attr("d", this.debtLine);

      this.svg.append("path")
          .datum(data)
          .classed("secondary-line", true)
          .classed("debt-evolution", true)
          .attr("d", this.percentageLine);

      var rectSize = 80;
      this.svg.append("g")
          .selectAll("rect")
          .data(data)
          .enter()
            .append('rect')
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("x", function(d){return this.x(d.year) - rectSize/2;}.bind(this))
            .attr("y", function(d){ return d3.min([this.yDebt(d.debt), this.yPercentage(d.percentage)]) }.bind(this))
            .attr("width", rectSize)
            .attr("height", function(d){ return Math.abs(this.yDebt(d.debt)-this.yPercentage(d.percentage)); }.bind(this))
            .attr("fill", "black")
            .attr("stroke", "black")
            .attr("opacity", 0)
            .on('mouseover', function(d){
              $('circle.debt-evolution[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
              this.tip.show(d);
            }.bind(this))
            .on('mouseout', function(d){
              $('circle.debt-evolution[data-year='+d.year.getFullYear()+']').attr('opacity', 0);
              this.tip.hide(d);
            }.bind(this));

      this.svg.append("g")
          .selectAll("circle")
          .data(data)
          .enter()
            .append('circle')
            .attr('r', 5)
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("cx", function(d){return this.x(d.year);}.bind(this))
            .attr("cy", function(d){return this.yDebt(d.debt);}.bind(this))
            .attr("opacity", 0)
            .classed("circle", true)
            .classed("debt-evolution", true);

      this.svg.append("g")
          .selectAll("circle")
          .data(data)
          .enter()
            .append('circle')
            .attr('r', 5)
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("cx", function(d){return this.x(d.year);}.bind(this))
            .attr("cy", function(d){return this.yPercentage(d.percentage);}.bind(this))
            .attr("opacity", 0)
            .classed("secondary-circle", true)
            .classed("debt-evolution", true);

      this.svg.append("g")
        .attr("class", "legendOrdinal")
        .attr("transform", "translate(30,"+(this.height - 40)+")");

      var legendOrdinal = d3.legend.color()
        .shape("path", d3.svg.symbol().type("circle").size(150)())
        .shapePadding(7)
        .scale(this.legendScale);

      this.svg.select(".legendOrdinal")
        .call(legendOrdinal);

    }.bind(this));
  },

});
