'use strict';

var municipalitiesDebt = Class.extend({
  init: function(containerId, width, height){
    var margin = {top: 10, right: 50, bottom: 30, left: 96};

    this.d3Locale = d3.locale({
      "decimal": ",",
      "thousands": ".",
      "grouping": [3],
      "currency": ["", "€"],
      "dateTime": "%a %b %e %X %Y",
      "date": "%m/%d/%Y",
      "time": "%H:%M:%S",
      "periods": ["AM", "PM"],
      "days": ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
      "shortDays": ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
      "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });

    this.width = width - margin.left - margin.right;
    this.height = height - margin.top - margin.bottom;

    this.barPadding = 0.1;
    this.barPaddingOuter = 0.2;

    this.x = d3.scale.linear()
        .range([0, this.width]);
    this.y = d3.scale.ordinal().rangeRoundBands([0, this.height], this.barPadding, this.barPaddingOuter);

    this.xAxis = d3.svg.axis()
        .scale(this.x)
        .orient("bottom");

    this.yAxis = d3.svg.axis()
        .scale(this.y)
        .orient("left");

    this.svg = d3.select("#"+containerId).append("svg")
        .attr("width", this.width + margin.left + margin.right)
        .attr("height", this.height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.tip = null;
  },

  render: function(url){

    function type(d) {
      d.debt = +d.debt;
      return d;
    }

    d3.csv(url, type, function(error, data) {
      if (error) throw error;

      var totalDebt = d3.sum(data, function(d){ return d.debt; });
      data.forEach(function(d){
        d.percentageDebt = (d.debt*100) / totalDebt;
      });
      data = data.sort(function(d1, d2){
        return d2.percentageDebt - d1.percentageDebt;
      });
      data = data.slice(0, 20);

      this.x.domain([0, d3.max(data, function (d){ return d.percentageDebt; })]);
      this.y.domain(       data.map( function (d){ return d.name; }));

      this.tip = d3.tip()
        .direction('s')
        .attr('class', 'd3-tip')
        .html(function(d) {
          return "<strong>"+d.name+"</strong>" +
            "<br><strong>Deuda:</strong> " + this.d3Locale.numberFormat('$,.')(d.debt) +
            "<br><strong>Porcentaje:</strong> " + this.d3Locale.numberFormat(',.0%')(d.percentageDebt);
        }.bind(this));
      this.svg.call(this.tip);

      this.svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + this.height + ")")
          .call(this.xAxis);

      this.svg.append("g")
          .attr("class", "y axis")
          .call(this.yAxis);

      var bars = this.svg.selectAll("rect").data(data);
      bars.enter().append("rect")
        .attr("height", this.y.rangeBand());
      bars
        .attr("fill", "steelblue")
        .attr("x", 0)
        .attr("y",     function (d){ return this.y(d.name); }.bind(this))
        .attr("width", function (d){ return this.x(d.percentageDebt); }.bind(this))
        .on('mouseover', function(d){
          this.tip.show(d);
        }.bind(this))
        .on('mouseout', function(d){
          this.tip.hide(d);
        }.bind(this));


      bars.exit().remove();

    }.bind(this));
  },

});
