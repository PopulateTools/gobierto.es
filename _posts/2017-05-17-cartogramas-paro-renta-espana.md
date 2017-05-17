---
layout: post
title: Los mapas no cuentan (toda) la verdad
subtitle: "Hay muchas maneras de visualizar datos geográficos. Aquí proponemos unas cuantas más."
date: 2017-05-17
categories: mapas, datos, gráficos
author: Martín González
---
Cada tres meses escuchamos en el telediario la nueva tasa de desempleo. Esa misma mañana los medios suelen publicar mapas y gráficos de barras junto al análisis económico. Y aunque los mapas que publican suelen ser técnicamente correctos, la geografía esconde otras variables que nos pueden ayudar a entender mejor esta cifra.

<div class="js-map">
  <h2 class="g-headline center">Mapa de la última EPA</h2>
</div>
<div class="js-cartogram">
  <h2 class="g-headline center">Cartograma escalado por población</h2>
</div>

El problema surge al comparar las regiones. Comunidades más extensas como Castilla y León parecen más importantes al ojo debido a su tamaño, aunque éste no tenga nada que ver con la variable que estemos pintando.

Uno de los métodos más populares para contrarrestar este *bias* son los [cartogramas](https://es.wikipedia.org/wiki/Cartograma). En este ejemplo cada cuadrado es una comunidad autónoma pero su tamaño está escalado de acuerdo con la población. Así es más sencillo ver qué regiones son más relevantes desde el punto de vista demográfico.

El problema con este tipo de gráficos es la pérdida de la referencia geográfica. Existen varios tipos de cartogramas ([contiguos](http://prag.ma/code/d3-cartogram/#popest/2010), de [círculos](https://mbostock.github.io/protovis/ex/cartogram.html)), y cada uno de ellos intenta establecer un balance diferente entre fidelidad geográfica y estadística.

<h2 class="center">Visualizando la renta provincial</h2>

Aquí, el mismo ejercicio, pero con los últimos datos de la renta por provincias. A medida que tenemos más regiones en el cartograma se vuelve más fácil percibir la geografía, haciéndolo más efectivo.

La población se concentra sobre todo en Madrid y Barcelona. Andalucía también está muy poblada, pero está más distribuida por provincias. Los datos de la [Agencia Tributaria](http://www.agenciatributaria.es/AEAT.internet/datosabiertos/catalogo/hacienda/Estadistica_de_los_declarantes_del_IRPF_por_municipios.shtml) no incluyen País Vasco ni Navarra, al tener Hacienda propia.

<div class="js-income-provinces"></div>

<h2 class="center">Los picos y valles de la renta española</h2>
Por último, y más como un experimento, he visualizado la renta a nivel municipal con triángulos. Un pico más alto significa mayores ingresos brutos, un valle, menos. Los triángulos azules tienen una renta superior a la media (24.106€), los rojos, inferior (sólo se incluyen los que tienen más de mil habitantes).

Hay concentraciones de picos alrededor de las de capitales de provincia, y valles en la zona sur, donde la renta es menor. Y es las ciudades suelen tener mayor riqueza, ya que también tienen más oportunidades laborales. 

<div class="center">
<p style="padding-bottom: 0.25rem;"><strong>Renta municipal bruta</strong></p>
<p style="text-transform: uppercase; font-size: 0.85rem;"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="auto" viewBox="0 0 78 94"><g fill="none" fill-rule="evenodd" stroke="steelblue" stroke-width="15" transform="translate(1 2)" stroke-linecap="square"><path d="M.5 90.5L36.5.5M37 0L75.1837662 89.0954544"/></g></svg> Superior a la media <svg style="padding-left: 0.5rem" xmlns="http://www.w3.org/2000/svg" width="8" height="auto" viewBox="0 0 78 94"> <g fill="none" fill-rule="evenodd" stroke="#8B0000" stroke-width="15" transform="rotate(-180 38.5 46)" stroke-linecap="square"><path d="M.5 90.5L36.5.5M37 0L75.1837662 89.0954544"/></g></svg> Inferior a la media</p>
</div>

<div class="js-places-map"></div>

<hr style="color: rgba(0,0,0,.1);max-width: 560px;">

Fuentes: INE, Agencia Tributaria.

<style>
.js-income-provinces {
  max-width: 960px;
  margin: 0 auto;
}
.triangles {
  fill: none;
  stroke-width: 1.4;
  opacity: 0.5;
  mix-blend-mode: multiply;
}
.red {
  opacity: 0.25;
}
.blue {
  opacity: 0.65;
}
.column {
  width: 90%;
}
p {
  max-width: 560px;
  margin: 0 auto;
  padding-bottom: 1em;
}
.g-headline {
  margin-top: 0.5em;
}
.border {
  fill: none;
  stroke-width: 0.3;
  stroke: rgba(255,255,255,.5)
}
.js-places-map .border {
  fill: none;
  stroke: #878787
}
.js-places-map .nation {
  fill: #f5f5f5;
  stroke: black;
  stroke-width: 0.5;
}
.js-map .nation {
  fill: none;
  stroke: black;
  stroke-width: 0.5;
}
.city {
  font-size: 0.95rem;
}
.legend {
  font-size: 0.85rem;
}
.legend-title {
  text-transform: uppercase;
  font-size: 0.75rem;
}
@media (min-width: 1240px) {
  .js-cartogram,
  .js-map {
    display: inline-block;
    width: 49%;
  }
}

@media (min-width: 1400px) {
  .column {
    width: 60%;
  }
}

</style>
