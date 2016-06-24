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

    this.xMunicipalities = d3.time.scale()
        .range([0, this.width]);

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
        .y(function(d) { return this.yDebt(d.value); }.bind(this));

    this.municipalityDebtLine = d3.svg.line()
        //.interpolate("cardinal")
        //.x(function(d) { return this.xMunicipalities(d.year); }.bind(this))
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yDebt(d.value); }.bind(this));

    this.svg = d3.select("#"+containerId).append("svg")
        .attr("width", this.width + margin.left + margin.right)
        .attr("height", this.height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.tip = null;
    this.countryData = null;
    this.countryDataProjected = [];
    this.municipalitiesData = null;
    this.municipalityDataProjected = [];
    this.lr = null;
    this.municipalityLr = null;
    this.rectSize = 60;
    this.projectedDebtLine = null;
    this.projectedMunicipalityDebtLine = null;
    this.maxYears = 30;
    this.usedData = [];
  },

  render: function(url){
    function type(d) {
      d.year = d3.time.format("%Y").parse(d.year);
      d.debt = +d.debt;
      d.ine_code = +d.ine_code;
      d.population = +d.population;
      d.value = d.debt/d.population;
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

      this.usedData = this.usedData.concat(this.countryData);

      var x = this.countryData.map(function(d){ return d.year.getFullYear(); }).slice(3, 6);
      var y = this.countryData.map(function(d){ return d.value; }).slice(3, 6);
      this.lr = this._linearRegression(x, y);

      this.tip = d3.tip()
        .direction('s')
        .attr('class', 'd3-tip')
        .html(function(d) {
          return "<strong>" + accounting.formatMoney(d.value) + "</strong><br>" +
                 "en </strong> " + d.year.getFullYear() + "</strong>";
        });
      this.svg.call(this.tip);

      this.x.domain(d3.extent(this.countryData, function(d) { return d.year; }));
      this.yDebt.domain([
          0,
          d3.max(this.usedData, function(d) { return d.value * 1.05; })
      ]);

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
        .attr("stroke", "#ccc")
        .attr('class', 'background-rect')
        .attr("opacity", 0.3);

      this.svg.append("g")
          .selectAll(".rect")
          .data(this.countryData)
          .enter()
            .append('rect')
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
            .attr("y", function(d){return this.yDebt(d.value) - this.rectSize / 2;}.bind(this))
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
            .attr("cy", function(d){return this.yDebt(d.value);}.bind(this))
            .attr("opacity", 0)
            .attr("class", 'circle');

      setTimeout(function(){
        this.renderProjection();
      }.bind(this), 300);
    }.bind(this));
  },

  renderProjection: function(){
    var newYear = 2016;
    var maxYears = 0;
    var projectedDebtPerPerson = this.lr.fn(newYear);
    this.countryDataProjected.push({
      year: new Date(2015, 0, 1),
      value: this.countryData[this.countryData.length-1].value
    });
    while ( projectedDebtPerPerson > 0 && maxYears < this.maxYears){
      this.countryDataProjected.push({
        year: new Date(newYear, 0, 1),
        value: projectedDebtPerPerson
      });
      newYear++;
      maxYears += 1;
      projectedDebtPerPerson = this.lr.fn(newYear);
    }
    this.countryDataProjected.push({
      year: new Date(newYear, 0, 1),
      value: projectedDebtPerPerson
    });

    this.x.domain([
      d3.min(this.countryData, function(d) { return d.year; }),
      d3.max(this.countryDataProjected, function(d) { return d.year; })
    ]);

    // New projected line
    this.yProjectedDebt.domain(this.yDebt.domain());

    this.projectedDebtLine = d3.svg.line()
        //.interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yProjectedDebt(d.value); }.bind(this));


    var t = this.svg.transition().duration(1500).ease("sin-in-out");
    t.selectAll(".x.axis").call(this.xAxis);
    t.selectAll(".line").attr("d", this.debtLine);
    t.selectAll("circle")
      .attr("cx", function(d){return this.x(d.year);}.bind(this))
      .attr("cy", function(d){return this.yDebt(d.value);}.bind(this));

    t.selectAll(".rect")
      .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
      .attr("y", function(d){return this.yDebt(d.value) - this.rectSize / 2;}.bind(this));

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

      console.log(this.countryDataProjected);
      console.log(this.projectedDebtLine);

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
            .attr("y", function(d){return this.yDebt(d.value) - this.rectSize / 2;}.bind(this))
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
            .attr("cy", function(d){return this.yDebt(d.value);}.bind(this))
            .attr("opacity", 0)
            .attr("class", 'circle');

    }.bind(this));

  },

  renderMunicipalityLine: function(ineCode){
    var municipalityData = this.municipalitiesData.filter(function(d){ return d.ine_code === ineCode; });
    console.log(municipalityData);
    this.usedData = this.usedData.concat(municipalityData);
    this.yDebt.domain([
        0,
        d3.max(this.usedData, function(d) { return d.value; })
    ]);
    this.yProjectedDebt.domain(this.yDebt.domain());
    console.log('yDebt');
    console.log(this.yDebt.domain());

    var t = this.svg.transition().duration(1500).ease("sin-in-out");
    t.selectAll(".y.axis").call(this.yAxisDebt);
    t.selectAll(".line").attr("d", this.debtLine);
    t.selectAll("circle")
      .attr("cx", function(d){return this.x(d.year);}.bind(this))
      .attr("cy", function(d){return this.yDebt(d.value);}.bind(this));

    t.selectAll(".rect")
      .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
      .attr("y", function(d){return this.yDebt(d.value) - this.rectSize / 2;}.bind(this));

    t.selectAll(".small-line").attr("d", this.projectedDebtLine);

    var x = municipalityData.map(function(d){ return d.year.getFullYear(); }).slice(3, 6);
    var y = municipalityData.map(function(d){ return d.value; }).slice(3, 6);
    this.municipalityLr = this._linearRegression(x, y);

    this.municipalityTip = d3.tip()
      .direction('s')
      .attr('class', 'd3-tip')
      .html(function(d) {
        return "<strong>" + accounting.formatMoney(d.value) + "</strong><br>" +
               "en </strong> " + d.year.getFullYear() + "</strong>";
      });
    this.svg.call(this.municipalityTip);

    //this.xMunicipalities.domain(d3.extent(municipalityData, function(d) { return d.year; }));

    this.svg.append("path")
        .datum(municipalityData)
        .attr("class", "secondary-line")
        .attr("d", this.municipalityDebtLine);

    this.svg.append("g")
        .selectAll(".rect")
        .data(municipalityData)
        .enter()
          .append('rect')
          .attr('data-year', function(d){return d.year.getFullYear()})
          //.attr("x", function(d){return this.xMunicipalities(d.year) - this.rectSize/2;}.bind(this))
          .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
          .attr("y", function(d){return this.yDebt(d.value) - this.rectSize / 2;}.bind(this))
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
        .data(municipalityData)
        .enter()
          .append('circle')
          .attr('r', 5)
          .attr('data-year', function(d){return d.year.getFullYear()})
          //.attr("cx", function(d){return this.xMunicipalities(d.year);}.bind(this))
          .attr("cx", function(d){return this.x(d.year);}.bind(this))
          .attr("cy", function(d){return this.yDebt(d.value);}.bind(this))
          .attr("opacity", 0)
          .attr("class", 'circle');

    this.renderMunicipalityLineProjection(ineCode);
  },

  renderMunicipalityLineProjection: function(ineCode){
    var municipalityData = this.municipalitiesData.filter(function(d){ return d.ine_code === ineCode; });

    var newYear = 2016;
    var maxYears = 0;
    var projectedDebtPerPerson = this.municipalityLr.fn(newYear);
    this.municipalityDataProjected.push({year: new Date(2015, 0, 1), value: municipalityData[municipalityData.length-1].value});
    while ( projectedDebtPerPerson > 0 && maxYears < this.maxYears){
      this.municipalityDataProjected.push({year: new Date(newYear, 0, 1), value: projectedDebtPerPerson});
      newYear++;
      maxYears += 1;
      projectedDebtPerPerson = this.municipalityLr.fn(newYear);
    }
    this.municipalityDataProjected.push({year: new Date(newYear, 0, 1), value: projectedDebtPerPerson});

    this.projectedMunicipalityDebtLine = d3.svg.line()
        //.interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yProjectedDebt(d.value); }.bind(this));

    path = this.svg.append("path")
      .datum(this.municipalityDataProjected)
      .attr("class", "small-secondary-line")
      .attr("d", this.projectedMunicipalityDebtLine)
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
        .data(this.municipalityDataProjected)
        .enter()
          .append('rect')
          .attr('data-year', function(d){return d.year.getFullYear()})
          .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
          .attr("y", function(d){return this.yProjectedDebt(d.value) - this.rectSize / 2;}.bind(this))
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
        .data(this.municipalityDataProjected)
        .enter()
          .append('circle')
          .attr('r', 5)
          .attr('data-year', function(d){return d.year.getFullYear()})
          .attr("cx", function(d){return this.x(d.year);}.bind(this))
          .attr("cy", function(d){return this.yProjectedDebt(d.value);}.bind(this))
          .attr("opacity", 0)
          .attr("class", 'secondary-circle');
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
