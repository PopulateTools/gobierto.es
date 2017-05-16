---
layout: post
title: Los mapas del paro no cuentan (toda) la verdad
subtitle: "Hay muchas maneras de visualizar la tasa de paro. Aquí proponemos unas cuantas más."
date: 2017-05-05
categories: datos, gobierto
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

Uno de los métodos más populares para contrarrestar este *bias* son los [cartogramas](https://es.wikipedia.org/wiki/Cartograma). En este ejemplo cada cuadrado es una comunidad autónoma pero su tamaño está escalado de acuerdo con la población. De esta manera realmente es posible ver qué regiones son más relevantes desde el punto de vista demográfico.

El problema con este tipo de gráficos es la pérdida de la referencia geográfica. Existen varios tipos de cartogramas (contiguos, con círculos), y cada uno de ellos intenta establecer un balance entre fidelidad geográfica y estadística.

<style>
p {
  max-width: 560px;
  margin: 0 auto;
  padding-bottom: 1em;
}
.g-headline {
  margin-top: 0.5em;
}
.js-cartogram,
.js-map {
  display: inline-block;
  width: 49%;
}
.border {
  fill: none;
  stroke-width: 0.3;
  stroke: rgba(255,255,255,.5)
}
.nation {
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
</style>
