---
layout: chart
title: Explora deuda
description: Explora deuda
source_name: Ministerio Hacienda y Administraciones Públicas
source_url: http://www.minhap.gob.es/es-ES/Areas%20Tematicas/Administracion%20Electronica/OVEELL/Paginas/DeudaViva.aspx
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/8.5.1/nouislider.min.css"/>

<style type="text/css">

body {
  font-family: sans-serif;
  font-size:12px;
}
.clearfix, %clearfix {
  &:after, &:before {
content: '';
display: table;
  }

  &:after {
clear: both;
  }
}
.container {
width: 100%;
}
h4 {
  font-size:13px;
}

ul {
  list-style-type: none;
padding:0;
margin:0;
}
div#charts {
width: 100%;
display: inline-block;
float: left;
       border-top: 1px solid #DFDFDF;
}
.controls_cont {
  border-top: 1px solid #DFDFDF;
}
ul#controls {
  vertical-align: top;

}
li.control_holder {
width: 33%;
display: inline-block;
         vertical-align: top;
padding: 2%;
         box-sizing: border-box;
float: left;
}
li h4 {
height: 36px;
}

div#plot, div#bars,div#search {
display: inline-block;
float: left;
overflow: hidden;
}
div#plot {
width: 75%;
}
div#bars {
width: 25%;
       /*position: absolute;
top: 200px;
left:110px;*/
}

#search {
  padding-left:50px;
}

.d3-tip {
  line-height: 1.2em;
  font-weight: normal;
  font-family: sans-serif;
  font-size: 11px;
padding: 12px;
background: rgba(0, 0, 0, 0.8);
color: #fff;
       border-radius: 2px;
       pointer-events: none;
       z-index: 10000000;
}

.d3-tip strong {
  font-weight: bold;
  font-size:1.3em;
display: block;
         margin-bottom: .2em;
}

.d3-tip table {
margin:1em 0;
}

.d3-tip th,
  .d3-tip td {
padding:.4em;
        text-align: right;
  }

/* Creates a small triangle extender for the tooltip */
.d3-tip:after {
  box-sizing: border-box;
display: inline;
         font-size: 10px;
width: 100%;
       line-height: 1;
color: rgba(0, 0, 0, 0.8);
position: absolute;
          pointer-events: none;
}

/* Northward tooltips */
.d3-tip.n:after {
content: "\25BC";
margin: -1px 0 0 0;
top: 100%;
left: 0;
      text-align: center;
}

/* Eastward tooltips */
.d3-tip.e:after {
content: "\25C0";
margin: -4px 0 0 0;
top: 50%;
left: -8px;
}

/* Southward tooltips */
.d3-tip.s:after {
content: "\25B2";
margin: 0 0 1px 0;
top: -8px;
left: 0;
      text-align: center;
}

/* Westward tooltips */
.d3-tip.w:after {
content: "\25B6";
margin: -4px 0 0 -1px;
top: 50%;
left: 100%;
}

.axis path,
  .axis line {
fill: none;
stroke: black;
        shape-rendering: crispEdges;
  }

.axis text {
  font-family: sans-serif;
  font-size: 9px;
  z-index: -1;
}

.label {
  font-family: sans-serif;
  font-size: 10px;
display: none;
fill:red;
}

.legend {
  margin-top:15px;
}

.legend span {
display: inline-block;
width:35px;
      text-align: center;
}

.short, .exceed {
stroke:#f5f5f5;
       stroke-width:.5;
}

.selected {
  stroke-width:3;
stroke:#f90;
}

.autocomplete-suggestions { border: 1px solid #999; background: #FFF; overflow: auto; }
.autocomplete-suggestion { padding: 2px 5px; white-space: nowrap; overflow: hidden; }
.autocomplete-selected { background: #F0F0F0; }
.autocomplete-suggestions strong { font-weight: normal; color: #3399FF; }
.autocomplete-group { padding: 2px 5px; }
.autocomplete-group strong { display: block; border-bottom: 1px solid #000; }
</style>

<!--<div id="exploreDebt" data-chart-container="exploreDebt" width="100%" data-chart-data-url="/charts/explore-debt.csv"></div>-->
<div class="container">
  <div class="controls_cont" class="clearfix">
    <ul id="controls" class="clearfix">
      <li class="control_holder">
        <h4>Desviación de Ejecución sobre Presupuesto (por habitante)</h4>
        <div id="deviation"></div>
        <div class="legend">
          <span id="deviation_number"></span>
        </div>
      </li>
      <li class="control_holder">
        <h4>Habitantes</h4>
        <div id="population"></div>
        <div class="legend">
          Entre <span id='size_value_0'></span> y <span id='size_value_1'></span>
        </div>
      </li>
      <li class="control_holder">
        <h4>Comunidad Autónoma</h4>
        <div id="aarr_province">

        </div>
      </li>
    </ul>
  </div>
  <div id="charts">
    <div id="plot"></div>
    <div id="search">
      <h4>Localiza un municipio</h4>
      <input id="suggest" type="text" placeholder="Nombre Municipio">
    </div>
  </div>
</div>

 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.devbridge-autocomplete/1.2.24/jquery.autocomplete.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/8.5.1/nouislider.min.js" charset="utf-8"></script>

<script type="text/javascript">
var locale = d3.locale({
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

var dataset, filtered_dataset, provinceset, aarrset, counted_set, tip;
var dimension = 'inhabitant';
var other_dimension = (dimension == 'inhabitant') ? 'total' : 'inhabitant';
var dimension_translated = (dimension == 'inhabitant') ? 'Por habitante' : 'Total';
var other_dimension_translated = (dimension == 'inhabitant') ? 'Total' : 'Por habitante';
var svg;
var percent = d3.format('.0%');
var tick_format = locale.numberFormat("$,0f");
//var xScale = d3.scale.linear();
//var yScale = d3.scale.linear();
var xScale = d3.scale.log();
var yScale = d3.scale.linear();
var rRange = [4,4];
var cScale = d3.scale.threshold();
var cRange = ["#7bccc4","#43a2ca","#0868ac"];
// var cRange = ["#0868ac","#43a2ca","#0868ac"];
// var cRange = ["#7bccc4","#43a2ca","#7bccc4"];
var tScale = d3.scale.threshold();
var tRange = ["short","inrange","exceed"];
var xAxis = d3.svg.axis().orient('bottom').tickFormat(tick_format).ticks(5);
var yAxis = d3.svg.axis().orient('left').tickFormat(tick_format).ticks(5);
var padding = 45;

var element = document.getElementById("plot");
var positionInfo = element.getBoundingClientRect();
var w = positionInfo.width;
var h = 2*w/3;

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

svg = d3.select("div#plot")
              .append('svg')
              .attr('width',w)
              .attr('height',h);

//xAxis
svg.append('g')
    .attr('class','x axis')
    // .attr("transform", "translate(0," + (h - padding) + ")")
  .append('text')
  .classed('x_axis_label',true)
  .attr('style', 'text-anchor:end')
  // .attr("transform","translate(" + (w - padding * 2) + ",-5)")
  .text('Poblacion');

//yAxis
svg.append('g')
    .attr('class','y axis')
    // .attr("transform", "translate(" + padding + ",0)")
  .append('text')
  .classed('y_axis_label',true)
  .attr('style', 'text-anchor:start')
  // .attr("transform","translate(5," + (padding + 5) + ")")
  .text('Diff');


//Dropdown variables
var aarr_dropdown;
var excluded_aarr = [15,16,18,19];

aarr_dropdown = d3.select('#aarr_province')
    .append('select')
    .attr('name','autonomous_regions');

function delta(d) {
  var budgeted_kw = "budgeted_" + dimension;
  var executed_kw = "executed_" + dimension;
  var dt = ((d[executed_kw] - d[budgeted_kw])/d[budgeted_kw]);
  return d3.round(dt,2);
}

function threshold() {
  return dev_slider.noUiSlider.get();
}

function fall_short_size() {
  return d3.selectAll('circle.short').size();
}

function fall_inrange_size() {
  return d3.selectAll('circle.inrange').size();
}

function exceed_range_size() {
  return d3.selectAll('circle.exceed').size();
}

function population_lower_limit() {
  return parseInt(pop_slider.noUiSlider.get()[0]);
}

function population_upper_limit() {
  return parseInt(pop_slider.noUiSlider.get()[1]);
}

function within_population_range(d) {
  return (population_lower_limit() <= d['population'] && d['population'] <= population_upper_limit());
}

function outside_population_range(d) {
  return (d.population < population_lower_limit() || population_upper_limit() < d.population);
}

function in_selected_province(d) {
  var selected_province = aarr_dropdown.property('value');
  return (selected_province == "" || d.province_id == selected_province);
}

function in_selected_aarr(d) {
  var selected_aarr = aarr_dropdown.property('value');
  return (selected_aarr == "" || d.aarr_id == selected_aarr);
}

function filter_dataset() {
  filtered_dataset = dataset.filter(within_population_range).filter(in_selected_aarr);
}

function count_dataset() {
  var short_count = fall_short_size();
  var inrange_count = fall_inrange_size();
  var exceed_count = exceed_range_size();
  var total = short_count + inrange_count + exceed_count;

  counted_dataset = [
  {key: 'short', value: short_count, percent: percent(short_count/total)},
  {key: 'inrange', value: inrange_count, percent: percent(inrange_count/total)},
  {key: 'exceed', value: exceed_count, percent: percent(exceed_count/total)}]
}

function update_counts_and_colors(values, handle) {
  cScale.domain([threshold()*-1,threshold()]);
  tScale.domain([threshold()*-1,threshold()]);

  d3.selectAll('circle')
    .attr('fill', function(d) {
        return cScale(delta(d));
    })
    .attr('class', function(d) {
        return tScale(delta(d));
    });

  count_dataset();
  d3.select('#deviation_number').text("+/-" + percent(threshold()));
}

function update_visible_circles() {
  d3.selectAll('circle').filter(outside_population_range)
    .attr('style', 'display:none')

  d3.selectAll('circle')
    .filter(within_population_range)
    .attr('style', 'display:inline')
}

function reset_auto_complete() {
  $('#suggest').val('');
  $('#suggest').autocomplete({
    lookup: filter_municipality_suggestions(),
    onInvalidateSelection: function() { 
      tip.hide();
      d3.select("circle.selected").classed("selected",false).moveToBack(); 
    },
    onSelect: function(suggestion) {
      tip.hide();
      d3.select("circle.selected").classed("selected",false).moveToBack();
      var selected = d3.select("circle[data-ine-code='" + suggestion.data + "']").classed('selected',true).moveToFront();
      tip.show(selected.datum(), selected.node());
    }
  })
}

/*
autonomous_region_id: "2"
budget_line_amount: ""
budget_line_amount_per_inhabitant: ""
debt: "25000.0"
ine_code: "44001"
name: "Ababuj"
population: "73"
province_id: "44"
total_budget: "0.0"
total_budget_per_inhabitant: "0.0"
year: "2015"
*/


function render() {

  xScale.domain(d3.extent(dataset, function(d){ return d.population; }));
  xScale.range([padding, w - padding * 2]);

  yScale.domain(d3.extent(dataset, function(d){ return d.diff; }))
  yScale.range([h - padding, padding]);

  cScale.domain([threshold()*-1,threshold()])
  cScale.range(cRange);

  tScale.domain([threshold()*-1,threshold()]);
  tScale.range(tRange);

  xAxis.scale(xScale);
  yAxis.scale(yScale);

  d3.select('.x.axis').attr("transform", "translate(0," + (h - padding) + ")");
  d3.select('.y.axis').attr("transform", "translate(" + padding + ",0)")

  d3.select('.x_axis_label').attr("transform","translate(" + (w - padding * 2) + ",-5)")
  d3.select('.y_axis_label').attr("transform","translate(5," + (padding + 5) + ")")

  d3.transition(svg).select(".x.axis").call(xAxis).selectAll('.tick text')
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");
  d3.transition(svg).select(".y.axis").call(yAxis);

  if (tip != undefined)
    tip.hide();

  tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
    return "<strong>" + d.name + "</strong>" +
          "<br>Población: " + d.population +
          "<br>Partida: " + d.budget_line_amount +
          "<br>Diff: " + d.diff +
          "<br>Deuda: " + d.debt;
  });

  tip.offset([-5,0]);

  svg.call(tip);

  var circles = svg.selectAll('circle')
      .data(filtered_dataset, function(d) { return d.ine_code })

  var circles_enter = circles.enter()
      .append('circle')
      .on('mouseover', function(d, i) {
        tip.show(d,this);
      })
      .on('mouseout', function(d, i) {
        tip.hide();
      })
      .attr('style','opacity:0')
      .transition().delay(750)
      .attr('style','opacity:1');

  var circles_update = d3.transition(circles)
      .attr('cx', function(d) { return xScale(d.population); })
      .attr('r', 4)
      .attr('cy', function(d) { return yScale(d.diff); })
      .attr('data-ine-code', function(d) { return d.ine_code; })

  var circles_exit = circles.exit()
    .remove();

  update_counts_and_colors();
  reset_auto_complete();
}

function render_provinces() {
  aarr_dropdown.selectAll('option')
    .data(aarrset)
    .enter()
    .append('option')
    .attr('value',function(p) { return p.key})
    .text(function(p) {return p.values})

  aarr_dropdown.selectAll('option')
    .filter(function(p) { return excluded_aarr.indexOf(parseInt(p.key)) > -1 })
      .attr('disabled','true');

  aarr_dropdown.on('change', function(d,i) {
    filter_dataset();
    d3.transition().duration(1000).delay(100).each(function() { render(dimension)});
  })
}

function filter_municipality_suggestions() {
  var municipality_suggestions = [];
  $.each(filtered_dataset, function(index, val) {
    municipality_suggestions.push({value: val.name, data: val.ine_code})
  })
  return municipality_suggestions;
}

var dev_slider = document.getElementById('deviation');
noUiSlider.create(dev_slider, {
  start: 0.1,
  step: 0.01,
  range: {
    'min': 0,
    'max': 1
  }
});

dev_slider.noUiSlider.on('update', function( values, handle ) {
  update_counts_and_colors();
});

dev_slider.noUiSlider.on('change', function( values, handle ) {
  update_counts_and_colors();
});

var POPULATION_START = [0, 5000000];
var pop_slider = document.getElementById('population');
noUiSlider.create(pop_slider, {
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

pop_slider.noUiSlider.on('update', function( values, handle ) {
  d3.select('#size_value_' + handle).text(locale.numberFormat(".1s")(values[handle]));
});

pop_slider.noUiSlider.on('change', function( values, handle ) {
  filter_dataset();
});

d3.json('/pages/data/provinces_2014.json', function(error,json) {
  if (error) console.warn(error);
  provinceset = json;
  // aarrset = d3.nest().key(function(p) { return p.aarr_name }).sortKeys(d3.ascending).entries(provinceset);
  aarrset = d3.nest().key(function(p) { return p.aarr_id })
    .sortValues(d3.ascending)
    .rollup(function(values) { return values[0].aarr_name})
    .entries(provinceset);
  aarrset.unshift({key:'',values:'Todas'});
  render_provinces();
});

function type(d) {
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
  return d;
}

d3.csv('/charts/explore-debt.csv', type, function(error, data) {

  if (error) console.warn(error);
  console.log(data);
  dataset = data;
  filter_dataset();
  render();
});

</script>

