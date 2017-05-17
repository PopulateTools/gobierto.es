---
layout: post
title: Los mapas no cuentan (toda) la verdad
subtitle: "Hay muchas maneras de visualizar datos geográficos. Aquí proponemos unas cuantas más."
date: 2017-05-05
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
Por último, y más como un experimento, he visualizado la renta a nivel municipal con triángulos. A mayor altura, más ingresos brutos. Los triángulos rojos son municipios con una renta inferior a la media española (24.106€), y los azules, superior.

Podemos ver lomas en la zona sur, donde la renta es menor, y mucha concentración alrededor de las de capitales de provincia. La riqueza se concentra en las ciudades, que también tienen una población más alta. Sólo se incluyen los municipios de más de mil habitantes.

<div class="js-places-map"></div>

<style>
.js-income-provinces {
  max-width: 960px;
  margin: 0 auto;
}
.triangles {
  fill: none;
  stroke-width: 1.1;
  opacity: 0.5;
  mix-blend-mode: multiply;
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
  fill: #eee;
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
