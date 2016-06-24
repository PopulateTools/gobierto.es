'use strict';

var debtProjection = Class.extend({
  init: function(containerId, width, height){
    var margin = {top: 40, right: 90, bottom: 30, left: 120};

    this.width = width - margin.left - margin.right;
    this.height = height - margin.top - margin.bottom;

    this.x = d3.time.scale()
        .range([0, this.width]);

    this.yDebt = d3.scale.linear()
        .range([this.height, 0]);

    this.yProjectedDebt = d3.scale.linear()
        .range([this.height, 0]);

    this.xAxis = d3.svg.axis()
        .scale(this.x)
        .orient("bottom");

    this.yAxisDebt = d3.svg.axis()
        .scale(this.yDebt)
        .tickFormat(function(v){
          return accounting.formatMoney(v);
        })
        .orient("left");

    this.debtLine = d3.svg.line()
        //.interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yDebt(d.debt); }.bind(this));

    this.svg = d3.select("#"+containerId).append("svg")
        .attr("width", this.width + margin.left + margin.right)
        .attr("height", this.height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.tip = null;
    this.countryData = null;
    this.countryDataProjected = [];
    this.municipalitiesData = null;
    this.municipalitiesDataProjected = [];
    this.lr = null;
    this.rectSize = 60;
    this.projectedDebtLine = null;
  },

  render: function(url){
    function type(d) {
      d.year = d3.time.format("%Y").parse(d.year);
      d.debt = +d.debt/1000000;
      d.ine_code = +d.ine_code;
      return d;
    }

    d3.csv(url, type, function(error, data) {
      if (error) throw error;

      this.municipalitiesData = data.filter(function(d){
        return d.ine_code !== 0;
      });

      this.countryData = data.filter(function(d){
        return d.ine_code === 0;
      });

      var x = this.countryData.map(function(d){ return d.year.getFullYear(); }).slice(3, 6);
      var y = this.countryData.map(function(d){ return d.debt; }).slice(3, 6);
      this.lr = this._linearRegression(x, y);

      this.tip = d3.tip()
        .direction('s')
        .attr('class', 'd3-tip')
        .html(function(d) {
          return "<strong>" + accounting.formatMoney(d.debt) + " deuda</strong><br>" +
                 "en </strong> " + d.year.getFullYear() + "</strong>";
        });
      this.svg.call(this.tip);

      this.x.domain(d3.extent(this.countryData, function(d) { return d.year; }));
      this.yDebt.domain([0, d3.max(this.countryData, function(d) { return d.debt * 1.05; })]);

      this.svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + this.height + ")")
          .call(this.xAxis);

      this.svg.append("g")
          .attr("class", "y axis")
          .call(this.yAxisDebt);

      this.svg.append("path")
          .datum(this.countryData)
          .attr("class", "line")
          .attr("d", this.debtLine);

      this.svg.append("g")
        .append('rect')
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", this.width)
        .attr("height", this.height)
        .attr("fill", "#aaa")
        .attr("stroke", "#aaa")
        .attr('class', 'background-rect')
        .attr("opacity", 0.5);

      this.svg.append("g")
          .selectAll(".rect")
          .data(this.countryData)
          .enter()
            .append('rect')
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
            .attr("y", function(d){return this.yDebt(d.debt) - this.rectSize / 2;}.bind(this))
            .attr("width", this.rectSize)
            .attr("height", this.rectSize)
            .attr("fill", "black")
            .attr("stroke", "black")
            .attr("opacity", 0)
            .attr("class", 'rect')
            .on('mouseover', function(d){
              $('circle[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
              this.tip.show(d);
            }.bind(this))
            .on('mouseout', function(d){
              $('circle[data-year='+d.year.getFullYear()+']').attr('opacity', 0);
              this.tip.hide(d);
            }.bind(this));

      this.svg.append("g")
          .selectAll("circle")
          .data(this.countryData)
          .enter()
            .append('circle')
            .attr('r', 5)
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("cx", function(d){return this.x(d.year);}.bind(this))
            .attr("cy", function(d){return this.yDebt(d.debt);}.bind(this))
            .attr("opacity", 0)
            .attr("class", 'circle');

      setTimeout(function(){
        this.renderProjection();
      }.bind(this), 2000);
    }.bind(this));
  },

  renderProjection: function(){
    var newYear = 2016;
    var projectedDebt = this.lr.fn(newYear);
    this.countryDataProjected.push({year: new Date(2015, 0, 1), debt: this.countryData[this.countryData.length-1].debt});
    while ( projectedDebt > 0){
      this.countryDataProjected.push({year: new Date(newYear, 0, 1), debt: projectedDebt});
      newYear++;
      projectedDebt = this.lr.fn(newYear);
    }
    this.countryDataProjected.push({year: new Date(newYear, 0, 1), debt: projectedDebt});

    this.x.domain([
      d3.min(this.countryData, function(d) { return d.year; }),
      d3.max(this.countryDataProjected, function(d) { return d.year; })
    ]);

    // New projected line
    this.yProjectedDebt.domain(this.yDebt.domain());

    this.projectedDebtLine = d3.svg.line()
        //.interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yProjectedDebt(d.debt); }.bind(this));


    var t = this.svg.transition().duration(1500).ease("sin-in-out");
    t.selectAll(".x.axis").call(this.xAxis);
    t.selectAll(".line").attr("d", this.debtLine);
    t.selectAll("circle")
      .attr("cx", function(d){return this.x(d.year);}.bind(this))
      .attr("cy", function(d){return this.yDebt(d.debt);}.bind(this));

    t.selectAll(".rect")
      .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
      .attr("y", function(d){return this.yDebt(d.debt) - this.rectSize / 2;}.bind(this));

    t.selectAll(".background-rect")
      .attr('width', this.x(d3.max(this.countryData, function(d){return d.year;})));

    t.each('end', function(){
      // Line actual moment
      var x = this.x(d3.max(this.countryData, function(d){return d.year;}));
      var path = this.svg.append("line")
          .attr("class", "current-time-separator")
          .attr('x1', x)
          .attr('x2', x)
          .attr('y1', -20)
          .attr('y2', this.height + 20);

      this.svg.append("text")
          .attr('x', x)
          .attr('y', this.height + 30)
          .style('text-anchor', 'middle')
          .text('Momento actual');

      path = this.svg.append("path")
        .datum(this.countryDataProjected)
        .attr("class", "small-line")
        .attr("d", this.projectedDebtLine)
        .attr('fill', 'none');

      var totalLength = path.node().getTotalLength();

      path
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(2000)
        .ease("linear")
        .attr("stroke-dashoffset", 0);


      this.svg.append("g")
          .selectAll("rect")
          .data(this.countryDataProjected)
          .enter()
            .append('rect')
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
            .attr("y", function(d){return this.yDebt(d.debt) - this.rectSize / 2;}.bind(this))
            .attr("width", this.rectSize)
            .attr("height", this.rectSize)
            .attr("fill", "black")
            .attr("stroke", "black")
            .attr("opacity", 0)
            .attr("class", 'rect')
            .on('mouseover', function(d){
              $('circle[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
              this.tip.show(d);
            }.bind(this))
            .on('mouseout', function(d){
              $('circle[data-year='+d.year.getFullYear()+']').attr('opacity', 0);
              this.tip.hide(d);
            }.bind(this));

      this.svg.append("g")
          .selectAll("circle")
          .data(this.countryDataProjected)
          .enter()
            .append('circle')
            .attr('r', 5)
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("cx", function(d){return this.x(d.year);}.bind(this))
            .attr("cy", function(d){return this.yDebt(d.debt);}.bind(this))
            .attr("opacity", 0)
            .attr("class", 'circle');

    }.bind(this));

  },

  // PRIVATE
  _linearRegression: function(x, y){
    var lr = {};
    var n = y.length;
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_xx = 0;
    var sum_yy = 0;

    for (var i = 0; i < y.length; i++) {
      sum_x += x[i];
      sum_y += y[i];
      sum_xy += (x[i]*y[i]);
      sum_xx += (x[i]*x[i]);
      sum_yy += (y[i]*y[i]);
    }

    lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
    lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
    lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);
    lr['fn'] = function (x) { return this.slope * x + this.intercept; };

    return lr;
  },


});
