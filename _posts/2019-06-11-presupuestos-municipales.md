---
title: "Presupuestos Municipales 2019"
subtitle: 'Actualizamos el comparador de presupuestos de Gobierto con los datos de 2019'
date: 2019-07-03 00:00:00 +02:00
categories:
- visualizacion_de_datos
module: comparador-de-presupuestos
layout: post
author: Pedro Álvarez, Fernando Blat y Álvaro Ortiz
main_photo: posts/190703-top-ingresos-ventas.png
---

Se acaban de publicar los datos de los presupuestos municipales de 2019, así que actualizamos **Gobierto Presupuestos Municipales**, nuestro comparador de los presupuestos de los ayuntamientos españoles. Y aprovechamos para darnos una vuelta y bucear en los datos.

<script src="https://unpkg.com/vue"></script>
<script src="https://data-visualizer.populate.tools/dist/my-visualizer.min.js"></script>
<script src="https://data-visualizer.populate.tools/lib/connector.populate.umd.min.js"></script>

## Los municipios con más presupuesto

Los municipios con más ingresos son los sospechosos habituales:

{% asset 'posts/190703-top-ingresos' class='Outline Shadow caption' title="Ranking de ingresos - <a href='https://presupuestos.gobierto.es/ranking/2019/I/economic/amount?f%5Bper_inhabitant%5D%5Bfrom%5D=0&amp;f%5Bper_inhabitant%5D%5Bto%5D=20000&amp;f%5Bpopulation%5D%5Bfrom%5D=0&amp;f%5Bpopulation%5D%5Bto%5D=5000000&amp;f%5Btotal%5D%5Bfrom%5D=0&amp;f%5Btotal%5D%5Bto%5D=5000000000' target='blank'>explora</a>" %}

El orden cambia bastante si nos fijamos en los ingresos por habitante. Filtramos los municipios de cierto tamaño, ya que hay muchos municipios pequeños con ingresos por habitante disparados.

{% asset 'posts/190703-top-ingresos-habitante' class='Outline Shadow caption' title="Ranking de ingresos por habitante, municipios de más de 50.000 habitantes - <a href='https://presupuestos.gobierto.es/ranking/2019/I/economic/amount_per_inhabitant?&amp;f[population][from]=50000&amp;f[population][to]=5000000&amp;f[total][from]=0&amp;f[total][to]=5000000000&amp;f[per_inhabitant][from]=0&amp;f[per_inhabitant][to]=20000' target='blank'>explora</a>" %}


## Deuda

Las entidades locales han reducido mucho su deuda en los últimos años, obligadas por normas europeas materializadas en el Plan Económico Financiero (PEF). Aquí puedes ver cuánto y qué % del presupuesto dedica cada entidad a pagar deuda:

{% asset 'posts/190703-top-pago-deuda' class='Outline Shadow caption' title="Gasto anual en pagar deuda - <a href='https://presupuestos.gobierto.es/ranking/2019/G/functional/amount/0?f%5Bper_inhabitant%5D%5Bfrom%5D=0&amp;f%5Bper_inhabitant%5D%5Bto%5D=20000&amp;f%5Bpopulation%5D%5Bfrom%5D=0&amp;f%5Bpopulation%5D%5Bto%5D=5000000&amp;f%5Btotal%5D%5Bfrom%5D=0&amp;f%5Btotal%5D%5Bto%5D=5000000000#' target='blank'>explora</a>" %}

En esta visualización puedes explorar la deuda viva (la deuda total pendiente de pago) por municipio:

<div class="min_full_wide" style="margin-bottom: 6em; ">
  <my-visualizer id="visualizer-0"></my-visualizer>
</div>

¿Hay patrones en cuanto a la relación entre habitantes y deuda viva por provincia? Puedes seleccionar provincias específicas y visualizar qué ocurre en cada una:

<div class="min_full_wide" style="margin-bottom: 3em; ">
  <my-visualizer id="visualizer-1"></my-visualizer>
</div>

(juega y cambia otras series con los dos selectores inferiores - y de paso nos das feedback de la nueva herramienta que estamos preparando basada en Populate Data)


También puedes visualizar los datos de forma geolocalizada. Este es el mapa de deuda viva por municipio:

<div class="min_full_wide" style="margin-bottom: 3em; ">
{% asset 'posts/190703-mapa' class='Outline Shadow caption' title="Ranking de ingresos por habitante, municipios de más de 50.000 habitantes - <a href='https://presupuestos.gobierto.es/mapas/2019' target='blank'>explora</a>" %}
</div>


Y, ¿cómo ha evolucionado la deuda a lo largo de los años? Hemos agrupado por provincia para mostrar como ha cambiado en el tiempo:

<div class="min_full_wide" style="margin-bottom: 3em; ">
  {% asset 'posts/190703-deuda-animacion' class='Outline Shadow caption' title="Evolución de la deuda por municipio agrupada por provincias a lo largo de los años" %}
</div>



## En venta

¿De dónde obtienen ingresos los municipios? Además de las distintas transferencias de otras administraciones y de tasas e impuestos, los municipios pueden vender terrenos. Este es el ránking de ingresos por venta de terrenos:

{% asset 'posts/190703-top-ingresos-ventas' class='Outline Shadow caption' title="Ranking de ingresos por venta de terrenos - <a href='https://presupuestos.gobierto.es/ranking/2019/I/economic/amount/60?f%5Bper_inhabitant%5D%5Bfrom%5D=0&f%5Bper_inhabitant%5D%5Bto%5D=20000&f%5Bpopulation%5D%5Bfrom%5D=0&f%5Bpopulation%5D%5Bto%5D=5000000&f%5Btotal%5D%5Bfrom%5D=0&f%5Btotal%5D%5Bto%5D=5000000000' target='blank'>explora</a>" %}


## Compara

¿De dónde vienen los ingresos de ayuntamientos pequeños? ¿Cómo es el presupuesto de municipios similares en una misma comarca? Puedes configurar tus propias comparaciones para entender las realidades municipales:

{% asset 'posts/190703-compara-cantabria' class='Outline Shadow caption' title="Comparación de la estructura del presupuesto de municipios cántabros seleccionados - <a href='https://presupuestos.gobierto.es/compare/camaleno:cillorigo-de-liebana:pesaguero:potes:vega-de-liebana:cabezon-de-liebana/2018/G/functional' target='blank'>explora</a>" %}


## Datos

Todos estos datos están disponibles en <a href="https://populate.tools/data">Populate Data</a>, nuestro servicio para consumir datos públicos a través de una API normalizada.


## Tu municipio, tús análisis

Entra en <a href="https://presupuestos.gobierto.es"><strong>presupuestos.gobierto.es</strong></a>, explora los datos de tu municipio y comienza a realizar tus análisis con las distintas herramientas disponibles. Compártelo en Twitter con <a href="https://twitter.com/hashtag/Presupuestos2019">#GobiertoPresupuestosActualizado</a>



<script>
  var config0 = new Visualizer([
    {
      type: "Dispersion",
      defaults: {
        x: "ds-poblacion-municipal",
        y: "ds-deuda-municipal",
        range: 2018
      },
      aspectRatio: "2"
    },
    {
      type: "Line"
    }
  ]);
  var config1 = new Visualizer([
    {
      type: "Dispersion",
      defaults: {
        x: "ds-poblacion-municipal",
        y: "ds-deuda-municipal",
        range: 2018,
        aggregation: ["Madrid", "Barcelona", "Sevilla", "Valencia"]
      },
      aspectRatio: "2"
    }
  ]);



  document.getElementById("visualizer-0").config = config0;
  document.getElementById("visualizer-1").config = config1;
</script>
