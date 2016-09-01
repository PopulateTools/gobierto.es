'use strict';

var debtProjection = Class.extend({
  init: function(containerId, width, height){
    var margin = {top: 10, right: 30, bottom: 60, left: 120};

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
        .innerTickSize(-this.width)
        .outerTickSize(0)
        .tickPadding(10)
        .tickFormat(function(v){
          return accounting.formatMoney(v, '€/hab.');
        })
        .orient("left");
    this.debtLine = d3.svg.line()
        .interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yDebt(d.value); }.bind(this));

    this.municipalityDebtLine = d3.svg.line()
        .interpolate("cardinal")
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
    this.dataDebtProjectionClosed = null;
    this.projectedDebtClosedOffset = 6;
    this.municipalityDebtCompleteYear = null;
  },

  render: function(url, callback){
    function type(d) {
      d.year = d3.time.format("%Y").parse(d.year);
      d.debt = +d.debt;
      d.ine_code = +d.ine_code;
      d.population = +d.population;
      d.value = d.debt/d.population;
      return d;
    }

    function typeDebtProjectedClosed(d) {
      d.ine_code = +d.ine_code;
      return d;
    }


    d3.csv(url, type, function(error, data) {
      d3.csv('/charts/data/debt-projected-closed.csv', typeDebtProjectedClosed, function(error, dataDebtProjectionClosed) {
        if (error) throw error;

        this.dataDebtProjectionClosed = d3.nest()
          .key(function(d) { return d3.time.format("%Y").parse(d.year); })
          .rollup(function(leaves) { return leaves.length; })
          .entries(dataDebtProjectionClosed);

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
            return "<strong>" + accounting.formatMoney(d.value, '€/hab.') + "</strong><br>" +
                   "en </strong> " + d.year.getFullYear() + "</strong>";
          });
        this.svg.call(this.tip);

        this.x.domain(d3.extent(this.countryData, function(d) { return d.year; }));
        this.yDebt.domain([
            0,
            d3.max(this.usedData, function(d) { return d.value * 1.05; })
        ]);

        this.svg.append("g")
          .append('rect')
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", this.width)
          .attr("height", this.height)
          // .attr("fill", "#f5f5f5")
          // .attr("stroke", "#f5f5f5")
          .classed('background-rect', true)
          .attr("opacity", 1);

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
              .attr("class", 'rect debt-projection')
              .on('mouseover', function(d){
                $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
                this.tip.show(d);
              }.bind(this))
              .on('mouseout', function(d){
                $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 0);
                this.tip.hide(d);
              }.bind(this));

        this.svg.append("g")
            .selectAll("circle")
            .data(this.countryData)
            .enter()
              .append('circle')
              .on('mouseover', function(d){
                $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
                this.tip.show(d);
              }.bind(this))
              .attr('r', 5)
              .attr('data-year', function(d){return d.year.getFullYear()})
              .attr("cx", function(d){return this.x(d.year);}.bind(this))
              .attr("cy", function(d){return this.yDebt(d.value);}.bind(this))
              .attr("opacity", 0)
              .attr("class", 'circle debt-projection');

        if(callback)
          callback();

      }.bind(this));
    }.bind(this));
  },

  renderProjection: function(callback){
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

    var newMaxYear = d3.max(this.countryDataProjected, function(d) { return d.year; });
    newMaxYear = new Date(newMaxYear.getFullYear()+this.projectedDebtClosedOffset, 0, 1);
    this.x.domain([
      d3.min(this.countryData, function(d) { return d.year; }),
      newMaxYear
    ]);

    // New projected line
    this.yProjectedDebt.domain(this.yDebt.domain());

    this.projectedDebtLine = d3.svg.line()
        .interpolate("cardinal")
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
          .attr("class", "current-time-separator debt-projection")
          .attr('x1', x)
          .attr('x2', x)
          .attr('y1', -10)
          .attr('y2', this.height + 25);

      this.svg.append("text")
          .attr('x', x)
          .attr('y', this.height + 35)
          .classed('actual_moment', true)
          .text('Momento actual');

      path = this.svg.append("path")
        .datum(this.countryDataProjected)
        .attr("class", "small-line debt-projection")
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
            .attr("class", 'rect debt-projection')
            .on('mouseover', function(d){
              $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
              this.tip.show(d);
            }.bind(this))
            .on('mouseout', function(d){
              $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 0);
              this.tip.hide(d);
            }.bind(this));

      this.svg.append("g")
          .selectAll("circle")
          .data(this.countryDataProjected)
          .enter()
            .append('circle')
            .on('mouseover', function(d){
              $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
              this.tip.show(d);
            }.bind(this))
            .attr('r', 5)
            .attr('data-year', function(d){return d.year.getFullYear()})
            .attr("cx", function(d){return this.x(d.year);}.bind(this))
            .attr("cy", function(d){return this.yDebt(d.value);}.bind(this))
            .attr("opacity", 0)
            .attr("class", 'circle debt-projection');

      this.svg.append('circle')
        .attr('r', 5)
        .attr("cx", this.x(this.countryDataProjected[this.countryDataProjected.length-1].year))
        .attr("cy", this.height)
        .attr("opacity", 1)
        .attr("class", 'circle');

      if(callback){
        setTimeout(callback, 1500);
      }

    }.bind(this));
  },

  clearMunicipalityLine: function(){
                           $('.municipality-line.debt-projection').remove();
                           this.municipalityTip = null;
                           $('.secondary-line.debt-projection').remove();
                           $('.secondary-circle.debt-projection').remove();
                           $('.small-secondary-line.debt-projection').remove();
  },

  renderMunicipalityLine: function(ineCode, callback){
    if(ineCode === ""){
      return;
    }
    this.clearMunicipalityLine();

    ineCode = parseInt(ineCode);
    var municipalityData = this.municipalitiesData.filter(function(d){ return d.ine_code === ineCode; });
    this.usedData = this.usedData.concat(municipalityData);
    this.yDebt.domain([
        0,
        d3.max(this.usedData, function(d) { return d.value; })
    ]);
    this.yProjectedDebt.domain(this.yDebt.domain());

    var t = this.svg.transition().duration(1500).ease("sin-in-out");
    t.selectAll(".y.axis").call(this.yAxisDebt);
    t.selectAll(".line").attr("d", this.debtLine);
    t.selectAll("circle.debt-projection")
      .attr("cx", function(d){return this.x(d.year);}.bind(this))
      .attr("cy", function(d){return this.yDebt(d.value);}.bind(this));

    t.selectAll(".rect.debt-projection")
      .attr("x", function(d){return this.x(d.year) - this.rectSize/2;}.bind(this))
      .attr("y", function(d){return this.yDebt(d.value) - this.rectSize / 2;}.bind(this));

    t.selectAll(".small-line.debt-projection").attr("d", this.projectedDebtLine);

    var x = municipalityData.map(function(d){ return d.year.getFullYear(); }).slice(3, 6);
    var y = municipalityData.map(function(d){ return d.value; }).slice(3, 6);
    this.municipalityLr = this._linearRegression(x, y);

    this.municipalityTip = d3.tip()
      .direction('s')
      .attr('class', 'd3-tip')
      .html(function(d) {
        return "<strong>" + accounting.formatMoney(d.value, '€/hab.') + "</strong><br>" +
               "en </strong> " + d.year.getFullYear() + "</strong>";
      });
    this.svg.call(this.municipalityTip);

    // here
    this.svg.append("path")
        .datum(municipalityData)
        .attr("class", "secondary-line debt-projection")
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
          .classed('rect', true)
          .classed('municipality-line', true)
          .classed('debt-projection', true)
          .on('mouseover', function(d){
            $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
            this.tip.show(d);
          }.bind(this))
          .on('mouseout', function(d){
            $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 0);
            this.tip.hide(d);
          }.bind(this));

    this.svg.append("g")
        .selectAll("circle")
        .data(municipalityData)
        .enter()
          .append('circle')
          .on('mouseover', function(d){
            $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
            this.tip.show(d);
          }.bind(this))
          .attr('r', 5)
          .attr('data-year', function(d){return d.year.getFullYear()})
          //.attr("cx", function(d){return this.xMunicipalities(d.year);}.bind(this))
          .attr("cx", function(d){return this.x(d.year);}.bind(this))
          .attr("cy", function(d){return this.yDebt(d.value);}.bind(this))
          .attr("opacity", 0)
          .classed('secondary-circle', true)
          .classed('debt-projection', true)
          .classed('municipality-line', true);

    this.renderMunicipalityLineProjection(ineCode, callback);
  },

  renderMunicipalityLineProjection: function(ineCode, callback){
    this.municipalityDataProjected = [];
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
    this.municipalityDebtCompleteYear = newYear;
    this.municipalityDataProjected.push({year: new Date(newYear, 0, 1), value: projectedDebtPerPerson});

    this.projectedMunicipalityDebtLine = d3.svg.line()
        .interpolate("cardinal")
        .x(function(d) { return this.x(d.year); }.bind(this))
        .y(function(d) { return this.yProjectedDebt(d.value); }.bind(this));

    path = this.svg.append("path")
      .datum(this.municipalityDataProjected)
      .attr("class", "small-secondary-line debt-projection")
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
        .attr("class", 'rect municipality-line debt-projection')
        .on('mouseover', function(d){
          $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
          this.tip.show(d);
        }.bind(this))
        .on('mouseout', function(d){
          $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 0);
          this.tip.hide(d);
        }.bind(this));

    this.svg.append("g")
      .selectAll("circle")
      .data(this.municipalityDataProjected)
      .enter()
        .append('circle')
        .on('mouseover', function(d){
          $('circle.debt-projection[data-year='+d.year.getFullYear()+']').attr('opacity', 1);
          this.tip.show(d);
        }.bind(this))
        .attr('r', 5)
        .attr('data-year', function(d){return d.year.getFullYear()})
        .attr("cx", function(d){return this.x(d.year);}.bind(this))
        .attr("cy", function(d){return this.yProjectedDebt(d.value);}.bind(this))
        .attr("opacity", 0)
        .attr("class", 'secondary-circle debt-projection');

    this.svg.append('circle')
      .attr('r', 5)
      .attr("cx", this.x(this.municipalityDataProjected[this.municipalityDataProjected.length-1].year))
      .attr("cy", this.height)
      .attr("opacity", 1)
      .attr("class", 'secondary-circle');

    if(callback)
      callback();
  },

  renderDebtProjectionDistribution: function(){
    // Define axis and scales
    var x = d3.scale.ordinal().rangeRoundBands([0, this.width], .1);
    var height = (2*this.height)/3;

    var y = d3.scale.linear()
      .range([this.height, 150]);

    var yAxis = d3.svg.axis()
      .scale(y)
      .tickFormat(function(v){
        return v + '%';
      })
      .orient("right");

    var maxYear = this.x.domain()[1].getFullYear();

    var totalMunicipalities = 0;
    this.dataDebtProjectionClosed.forEach(function(d){
      totalMunicipalities += d.values;
    });

    this.dataDebtProjectionClosed = this.dataDebtProjectionClosed.map(function(d){
      return { key: new Date(d.key), values: d.values };
    }).sort(function(a, b){
      return a.key - b.key;
    });

    // Transform the data
    var total = 0;
    this.dataDebtProjectionClosed.slice().reverse().forEach(function(d, index, object) {
      var date = new Date(d.key);
      if(date.getFullYear() >= maxYear){
        total += d.values;
        this.dataDebtProjectionClosed.splice(object.length - 1 - index, 1);
      }
    }.bind(this));

    var lastIndex = this.dataDebtProjectionClosed.findIndex(function(d, index, object){
      var date = new Date(d.key);
      return date.getFullYear() == maxYear - 1;
    });

    //this.dataDebtProjectionClosed[lastIndex].values = total;

    this.dataDebtProjectionClosed.forEach(function(d){
      d.values = ((d.values / totalMunicipalities)*100).toFixed();
    });

    var dates = this.dataDebtProjectionClosed.map(function(d){
      return d.key;
    });

    dates.unshift(new Date(2014, 0, 1));
    dates.unshift(new Date(2013, 0, 1));
    dates.unshift(new Date(2012, 0, 1));
    dates.unshift(new Date(2011, 0, 1));
    dates.unshift(new Date(2010, 0, 1));
    x.domain(dates);

    y.domain([0, d3.max(this.dataDebtProjectionClosed, function(d) { return d.values; })]);

    var t = 0;
    this.dataDebtProjectionClosed.forEach(function(d){
      t += d.values;
    });

    this.svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .attr("transform", "translate(" + this.width + ",0)")
      ;
      // .append("text")
      // .attr("transform", "rotate(-90)")
      // .attr("y", 6)
      // .attr("dy", ".71em")
      // .style("text-anchor", "end")
      // .text("Num. municipios que saldan su deuda por año");

    this.svg.selectAll(".bar")
      .data(this.dataDebtProjectionClosed)
      .enter().append("rect")
      .attr("class", "bar")
      .attr('fill', '#fa7d76')
      .attr('opacity', '0.5')
      .attr("x", function(d) { return x(d.key); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.values); })
      .attr("height", function(d) { return this.height - y(d.values); }.bind(this));

    this.svg.selectAll(".bar-text")
      .data(this.dataDebtProjectionClosed)
      .enter().append("text")
      .text(function(d){
        return d.values + '%';
      })
      .attr("class", "bar-text")
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .attr("x", function(d) { return x(d.key) + 12; })
      .attr("y", function(d) { return y(d.values) + 15; });
  },

  renderTextResults: function(municipalityName, year, $container){
     var message;
     if(year < 2026) {
       message = "¡Enhorabuena! Al ritmo actual <strong>" + municipalityName + "</string> acabaría de pagar su deuda antes que la media de los municipios."
     } else {
       message = "¡Ooohhh! Al ritmo actual <strong>" + municipalityName + "</strong> acabaría de pagar su deuda después que la media de los municipios."
     }
     $container.html(message);
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
