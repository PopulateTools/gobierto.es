'use strict';

var exploreDebt = Class.extend({
  init: function(containerId, width, height){
    var margin = {top: 20, right: 30, bottom: 50, left: 30};

    this.width = width - margin.left - margin.right;
    this.height = height - margin.top - margin.bottom;

    var l = d3.locale({
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

    this.dev_slider = null;
    this.dataset = null;
    this.filtered_dataset = null;
    this.provinceset = null;
    this.aarrset = null;
    this.tip = null;
    this.percent = d3.format('.0%');
    this.xScale = d3.scale.log();
    this.yScale = d3.scale.log();
    this.cScale = d3.scale.threshold();
    this.cRange = ["#7bccc4","#43a2ca","#0868ac"];
    this.tRange = ["inrange","exceed"];

    var xAxisFormat = l.numberFormat(",0f");
    var yAxisFormat = l.numberFormat(",%");
    this.xAxis = d3.svg.axis().orient('bottom').tickFormat(xAxisFormat).ticks(5);
    this.yAxis = d3.svg.axis().orient('left').tickFormat(yAxisFormat).ticks(15);

    d3.selection.prototype.moveToFront = function() {
      return this.each(function(){
        this.parentNode.appendChild(this);
      });
    };

    d3.selection.prototype.moveToBack = function() {
        return this.each(function() {
            var firstChild = this.parentNode.firstChild;
            if (firstChild) {
                this.parentNode.insertBefore(this, firstChild);
            }
        });
    };

    this.svg = d3.select("#plot").append("svg")
        .attr("width", (this.width + margin.left + margin.right)*0.75)
        .attr("height", this.height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //xAxis
    this.svg.append('g')
        .attr('class','x axis')
      .append('text')
        .classed('x_axis_label',true)
        .attr('style', 'text-anchor:end')
        .text('Población');

    //yAxis
    this.svg.append('g')
        .attr('class','y axis')
      .append('text')
        .classed('y_axis_label',true)
        .attr('style', 'text-anchor:start')
        .text('Diff');

    //Bars Variables
    var bars_w = 350;
    var bars_h = 130;
    this.bars_padding = 40;
    this.bars_yScale = d3.scale.ordinal().rangeRoundBands([bars_h - this.bars_padding, this.bars_padding], .1);
    this.bars_yScale.domain(this.tRange);
    this.bars_xScale = d3.scale.linear();
    this.bars_xScale.domain([0, (this.filtered_dataset != undefined) ? this.filtered_dataset.length : 6000]);
    this.bars_xScale.range([this.bars_padding, bars_w - this.bars_padding * 2]);

    var bars_yDomain = this.tRange;

    this.bars_cScale = d3.scale.ordinal();
    this.bars_cScale.domain(bars_yDomain);
    this.bars_cScale.range(this.cRange);

    this.bars_xAxis = d3.svg.axis().orient('bottom').ticks(5);
    this.bars_yAxis = d3.svg.axis().orient('left');
    this.bars_xAxis.scale(this.bars_xScale);
    this.bars_yAxis.scale(this.bars_yScale);

    this.svg_bars = d3.select('#bars')
      .append('svg')
      .attr('width', bars_w)
      .attr('height', bars_h);

    this.svg_bars.append('g')
        .attr('class','x axis')
        .attr("transform", "translate(0," + (bars_h - this.bars_padding) + ")");

    this.svg_bars.append('g')
        .attr('class','y axis')
        .attr("transform", "translate(44,0)")

    //Dropdown variables
    this.aarr_dropdown;
    this.excluded_aarr = [15,16,18,19];

    this.aarr_dropdown = d3.select('#aarr_province')
        .append('select')
        .attr('name','autonomous_regions');
  },

  render: function(url){
    console.log('fooo');
    this.dev_slider = document.getElementById('deviation');
    noUiSlider.create(this.dev_slider, {
      start: 0.1,
      step: 0.01,
      range: {
        'min': 0,
        'max': 0.5
      }
    });

    this.dev_slider.noUiSlider.on('update', function( values, handle ) {
      this._update_counts_and_colors();
    }.bind(this));

    this.dev_slider.noUiSlider.on('change', function( values, handle ) {
      this._update_counts_and_colors();
    }.bind(this));

    var POPULATION_START = [0, 5000000];
    this.pop_slider = document.getElementById('population');
    noUiSlider.create(this.pop_slider, {
      start: POPULATION_START,
      snap: true,
      animate: false,
      connect: true,
      range: {
        'min': 0,
        '10%':1000,
        '20%':5000,
        '30%':10000,
        '40%':25000,
        '50%':50000,
        // '60%':100000,
        '70%':200000,
        // '80%':500000,
        'max': 5000000
      }
    });

    this.pop_slider.noUiSlider.on('update', function( values, handle ) {
      d3.select('#size_value_' + handle).text(values[handle]);
    });

    this.pop_slider.noUiSlider.on('change', function( values, handle ) {
      this._filter_dataset();
      d3.transition().duration(1000).delay(100).each(function() { this._render(); this._render_bars(); }.bind(this));
    }.bind(this));

    d3.json('/pages/data/provinces_2014.json', function(error,json) {
      if (error) console.warn(error);
      this.provinceset = json;
      this.aarrset = d3.nest().key(function(p) { return p.aarr_id })
        .sortValues(d3.ascending)
        .rollup(function(values) { return values[0].aarr_name})
        .entries(this.provinceset);
      this.aarrset.unshift({key:'',values:'Todas'});
      this._render_provinces();
    }.bind(this));

    function type(d) {
      d.autonomous_region_id = +d.autonomous_region_id;
      d.province_id = +d.province_id;
      d.debt = +d.debt;
      d.population = +d.population;
      d.budget_line_amount = +d.budget_line_amount;
      d.total_budget = +d.total_budget;
      // Interesante: deuda por habitante
      // d.diff = parseFloat(d.debt)/d.population;

      // Interesante: porcentaje de la partida sobre el total
      // d.diff = (d.total_budget > 0) ? (d.budget_line_amount/d.total_budget) : 0;

      // Años en pagar la deuda
      // d.diff = (d.budget_line_amount > 0 && d.debt > 0) ? d.debt / d.budget_line_amount : 0;

      // Porcentaje de deuda respecto al total del presupuesto
      d.diff = (d.debt > 0) ? (d.total_budget)/d.debt : 0;

      d.diff2 = (d.total_budget > 0) ? (d.budget_line_amount/d.total_budget)*100 : 0;
      return d;
    }

    d3.csv(url, type, function(error, data) {
      if (error) console.warn(error);
      // Remove zero values
      this.dataset = data.filter(function(d){return d.diff > 0 });
      console.log(this.dataset[0]);
      this._filter_dataset();
      this._render();
      this._render_bars();
    }.bind(this));
  },

  // PRIVATE

  _render: function(){
    var padding = 0;
    this.xScale.domain(d3.extent(this.dataset, function(d){ return d.population; }));
    this.xScale.range([0, this.width]);

    this.yScale.domain(d3.extent(this.dataset, function(d){ return d.diff; }))
    this.yScale.range([this.height, 0]);

    this.cScale.domain([0,this._threshold()])
    this.cScale.range(this.cRange);

    this.xAxis.scale(this.xScale);
    this.yAxis.scale(this.yScale);

    d3.select('.x.axis').attr("transform", "translate(0," + (this.height - padding) + ")");
    d3.select('.y.axis').attr("transform", "translate(20,0)")

    d3.select('.x_axis_label').attr("transform","translate(" + (this.width - padding * 2) + ",-5)")
    d3.select('.y_axis_label').attr("transform","translate(5," + (padding + 5) + ")")

    d3.transition(this.svg).select(".x.axis").call(this.xAxis).selectAll('.tick text')
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");
    d3.transition(this.svg).select(".y.axis").call(this.yAxis);

    if (this.tip != undefined)
      this.tip.hide();

    this.tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
      return "<strong>" + d.name + "</strong>" +
            "<br>Población: " + d3.format('d')(d.population) +
            "<br>Partida: " + accounting.formatMoney(d.budget_line_amount) +
            "<br>Total presupuesto: " + accounting.formatMoney(d.total_budget) +
            "<br>Deuda: " + accounting.formatMoney(d.debt) +
            "<br>Porcentaje: " + d3.format(',%')(d.diff);
    });

    this.tip.offset([-5,0]);

    this.svg.call(this.tip);

    var circles = this.svg.selectAll('circle')
        .data(this.filtered_dataset, function(d) { return d.ine_code })

    var circles_enter = circles.enter()
        .append('circle')
        .on('mouseover', function(d, i) {
          this.tip.show(d,this);
        }.bind(this))
        .on('mouseout', function(d, i) {
          this.tip.hide();
        }.bind(this))
        .attr('style','opacity:0')
        .transition().delay(750)
        .attr('style','opacity:1');

    var circles_update = d3.transition(circles)
        .attr('cx', function(d) { return this.xScale(d.population); }.bind(this))
        .attr('r', 4)
        .attr('cy', function(d) { return this.yScale(d.diff); }.bind(this))
        .attr('data-ine-code', function(d) { return d.ine_code; })

    var circles_exit = circles.exit()
      .remove();

    this._update_counts_and_colors();
    this._reset_auto_complete();
  },

  _render_provinces: function() {
    this.aarr_dropdown.selectAll('option')
      .data(this.aarrset)
      .enter()
      .append('option')
      .attr('value',function(p) { return p.key})
      .text(function(p) {return p.values})

    this.aarr_dropdown.selectAll('option')
      .filter(function(p) { return this.excluded_aarr.indexOf(parseInt(p.key)) > -1 }.bind(this))
        .attr('disabled','true');

    this.aarr_dropdown.on('change', function(d,i) {
      this._filter_dataset();
      d3.transition().duration(1000).delay(100).each(function() { this._render();}.bind(this));
    }.bind(this))
  },

  _render_bars: function() {
    var dict = {
      'exceed': 'Por encima',
      'inrange': 'Dentro del rango'
    };

    d3.transition(this.svg_bars).select(".x.axis").call(this.bars_xAxis);
    d3.transition(this.svg_bars).select(".y.axis").call(this.bars_yAxis);

    var bars = this.svg_bars.selectAll(".bar")
        .data(counted_dataset, function(d) { return d.key });

    var bars_enter = bars.enter().append("rect")
        .attr("class", "bar")
        .attr("height", this.bars_yScale.rangeBand())
        .attr("x", this.bars_padding + 1)
        .attr("y", function(d) { return this.bars_yScale(d.key); }.bind(this))
        .attr('fill', function(d) { return this.bars_cScale(d.key)}.bind(this));

    var bars_update = d3.transition(bars)
        .attr("width", function(d) {return this.bars_xScale(d.value) - this.bars_padding }.bind(this));

    var texts = this.svg_bars.selectAll('text')
          .data(counted_dataset, function(d) { return d.key });

    var texts_enter = texts.enter().append('text')
          .attr('y', function(d) { return this.bars_yScale(d.key) + this.bars_yScale.rangeBand() / 2 + 5 ; }.bind(this))

    var texts_update = d3.transition(texts)
          .attr('x', function(d) { return this.bars_xScale(d.value) + 4 }.bind(this))
          .text(function(d) { return d.value + " (" + d.percent + ")" });
  },

  _filter_municipality_suggestions: function() {
    var municipality_suggestions = [];
    $.each(this.filtered_dataset, function(index, val) {
      municipality_suggestions.push({value: val.name, data: val.ine_code})
    })
    return municipality_suggestions;
  },

  _reset_auto_complete: function() {
    $('#suggest').val('');
    $('#suggest').autocomplete({
      lookup: this._filter_municipality_suggestions(),
      onInvalidateSelection: function() {
        this.tip.hide();
        d3.select("circle.selected").classed("selected",false).moveToBack();
      }.bind(this),
      onSelect: function(suggestion) {
        this.tip.hide();
        d3.select("circle.selected").classed("selected",false).moveToBack();
        var selected = d3.select("circle[data-ine-code='" + suggestion.data + "']").classed('selected',true).moveToFront();
        this.tip.show(selected.datum(), selected.node());
      }.bind(this)
    })
  },

  _update_counts_and_colors: function(values, handle) {
    this.cScale.domain([0, this._threshold()]);

    d3.selectAll('circle')
      .attr('fill', function(d) {
        return this.cScale(d.diff);
      }.bind(this))
    .attr('class', function(d) {
      return (d.diff < this._threshold()) ? this.tRange[0] : this.tRange[1];
    }.bind(this));

    this._count_dataset();
    d3.select('#deviation_number').text(this.percent(this._threshold()));
    d3.transition().duration(1000).delay(100).each(function() { this._render_bars() }.bind(this));
  },

  _threshold: function() {
    return parseFloat(this.dev_slider.noUiSlider.get());
  },

  _fall_inrange_size: function() {
    return d3.selectAll('circle.inrange').size();
  },

  _exceed_range_size: function() {
    return d3.selectAll('circle.exceed').size();
  },

  _within_population_range: function(d) {
    var population_lower_limit = parseInt(this.pop_slider.noUiSlider.get()[0]);
    var population_upper_limit = parseInt(this.pop_slider.noUiSlider.get()[1]);
    return (population_lower_limit <= d['population'] && d['population'] <= population_upper_limit);
  },

  _in_selected_aarr: function(d) {
    var selected_aarr = this.aarr_dropdown.property('value');
    return (selected_aarr == "" || d.autonomous_region_id == selected_aarr);
  },

  _filter_dataset: function() {
    this.filtered_dataset = this.dataset.filter(this._within_population_range.bind(this)).filter(this._in_selected_aarr.bind(this));
  },

  _count_dataset: function() {
    var inrange_count = this._fall_inrange_size();
    var exceed_count = this._exceed_range_size();
    var total = inrange_count + exceed_count;

    counted_dataset = [
      {key: 'inrange', value: inrange_count, percent: this.percent(inrange_count/total)},
      {key: 'exceed', value: exceed_count, percent: this.percent(exceed_count/total)}
    ]
  },

});
