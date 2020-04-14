---
title: 'Presupuesto vs. Ejecución: Análisis de la desviación de los presupuestos municipales
  y el gasto real'
date: 2016-05-18 15:00:00 +02:00
categories:
- visualizacion_de_datos
layout: post
subtitle: Un ejercicio de comparación entre lo que presupuestan los municipios de
  España y lo que realmente acaban gastando
author: Jorge Gómez Sancha
main_photo_big: https://images.unsplash.com/photo-1443110189928-4448af4a2bc5?ixlib=rb-0.3.5&q=70&fm=jpg&crop=entropy&w=1600&h=700&fit=crop&s=c196b4d48c998f817f60f28ff2564500
---

¿Qué te parecería si descubrieras que tu municipio gasta un 621% más de lo que presupuesta? ¿O si por el contrario descubrieras que gasta tan sólo un 8% de su presupuesto anual? Porque esto es lo que pasó en el 2014 con los municipios de [Tollos, Alicante](https://presupuestos.gobierto.es/places/tollos/2014) y [Galbarros, Burgos](https://presupuestos.gobierto.es/places/galbarros/2014) respectivamente.

Aunque esos números suenan fatal, esas cifras pueden llevar a engaño porque se trata de algunos de los municipios más pequeños de España, con un total de 59 y 28 habitantes respectivamente y presupuestos totales de aproximadamente €45.000 y 120.000€. Cualquier pequeño cambio en este tipo de municipios puede hacer que el gasto por habitante se dispare o se quede corto, y a pesar de lo espectacular de las desviaciones, a menudo las cantidades son pequeñas y fácilmente explicables.

Es por ejemplo el caso de [Galbarros](https://presupuestos.gobierto.es/places/galbarros/2014) donde, si exploramos las partidas presupuestarias en Gobierto, se ve que aproximadamente 85% del presupuesto [iba destinado a "carreteras"](https://presupuestos.gobierto.es/budget_lines/galbarros/2014/453/G/functional); trabajos que seguramente no se hicieron en el 2014 ya que la partida [vuelve a estar presente en el 2015](https://presupuestos.gobierto.es/budget_lines/galbarros/2015/453/G/functional). Lo sabremos en cuanto el Ministerio de Hacienda y Administraciones Públicas publique los datos de ejecución presupuestaria municipal del 2015, que se esperan para Junio.

Sin embargo, hay muchos otros municipios con grandes desviaciones de presupuesto y en Gobierto, mientras esperamos a los datos del 2015, hemos estado jugando con los datos del 2014 y hemos hecho una pequeña herramienta de visualización de los mismos.

{% asset 'posts/b_vs_e_anim.gif' width:'80%' alt:'Municipios dentro y fuera de una desviación de entre el 10% y el 100% del presupuesto' title:'Municipios dentro y fuera de una desviación de entre el 10% y el 100% del presupuesto' %}

Con ella hemos podido descubrir cosas como que, de todos aquellos municipios con datos presupuestarios (6426 de 8192):

* un 42% (2716 municipios) cumplen con su presupuesto con una desviación igual o menor al 10% (son la franja de puntos azules claros en medio del gráfico), un 31% (2008 municipios) incrementa su ejecución en más del 10% y el ~26% de municipios restantes no llegan a ejecutar el 90% de su presupuesto
* un 25% (1612 municipios) se desvían del presupuesto más de un 25% (950 lo superan y 662 ejecutan el 75% de su presupuesto o menos)
* un 1,1% (73 municipios) se desvía 100% o más de su presupuesto!

{% asset 'posts/over_100percent.png' width:'80%' alt:'Municipios con una desviación igual o mayor al 100% de su presupuesto' title:'Municipios con una desviación igual o mayor al 100% de su presupuesto' %}

Curiosamente, estos porcentajes de desviación no se mantienen cuando dividimos los datos por Comunidad Autónoma. Teniendo en cuenta que no hay datos presupuestarios para Navarra, País Vasco, Ceuta y Melilla, y tomando el 10% de desviación como referencia, tendríamos a Madrid, Asturias y Murcia como las comunidades autónomas con mayor número de municipios que se ciñen a su presupuesto (aprox. un 67% de los municipios de esas comunidades dentro de esa desviación).

En el otro extremo, estaría la Rioja, donde sólamente un 24% de los municipios se ciñe a su presupuesto con una desviación del 10% o menos. Curiosamente, la gran mayoría (72%) de los municipios de la Rioja no llegan a ejecutar ni el 90% de su presupuesto.

La comunidad autónoma cuyos municipios más exceden sus presupuestos es Extremadura, dónde un 55% se desvía por encima del 10%. En su defensa habría que decir que no tiene prácticamente municipios que superen los 10000 habitantes, lo cual, como decíamos al principio, hace que las desviaciones sean bastante más visibles.

Debajo dejamos la herramienta que hemos desarrollado para que saques tus propias conclusiones.


<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.min.js"></script>
<iframe src="/pages/presus_vs_ejecucion_2014.html" class="min_full_wide" style="height:700px; width: 100%" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes"></iframe>

Puedes profundizar en los presupuestos de los municipios desde <a href="http://presupuestos.gobierto.es">presupuestos.gobierto.es</a>.

<script type="text/javascript">iFrameResize( {heightCalculationMethod: 'documentElementOffset', checkOrigin:false}, 'iframe' );</script>
