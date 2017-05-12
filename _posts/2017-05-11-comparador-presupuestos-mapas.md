---
layout: post
title: 'Mejoramos nuestro comparador de presupuestos abierto: mapas de las cuentas municipales'
subtitle: 'Lanzamos el nuevo mapa de los presupuestos municipales. ¿Cuánto ingresan los ayuntamientos por impuestos? ¿Cuánto dinero se destina al pago de la deuda? ¿Cuánto gastan en políticas sociales?'
date: 2017-05-11
categories: presupuestos, transparencia, gobierno abierto
author: Rafa de las Cuevas
main_photo_big: posts/170510-mapa-presupuestos01.jpg
---

En Populate seguimos empeñados en explicar de forma clara cómo funcionan las cuentas públicas y por eso hemos mejorado nuestro [comparador de presupuestos municipales](https://presupuestos.gobierto.es/mapas/2016) con una nueva visualización de open data. Esta nueva funcionalidad utiliza la interfaz de usuario de [Gobierto](www.gobierto.es) e incorpora un mapa de [Carto](https://carto.com/) que se alimenta de los datos que almacenamos en [Populate data](http://populate.tools/). El mapa permite seleccionar las distintas clasificaciones y partidas de un presupuesto para tener una vista de pájaro de las cuentas municipales.

Para tener contexto global, en la franja superior hemos colocado una serie de tarjetas con información muy relevante: La media del gasto municipal por habitante en España, el gasto total, lo que se presupuesta y lo que realmente se gasta, el número de habitantes y la deuda viva total.

{% img 'posts/170510-mapa-presupuestos02.jpg' %}

El mapa tiene, por defecto, una distribución por colores con el gasto por habitante de cada municipio. Si seleccionamos las opciones del panel de la izquierda podemos hacer distintos cortes en la información para ir al detalle. En primer lugar podemos decidir si queremos ver los ingresos o los gastos; y estos últimos los podemos ver de dos formas: “en qué se gasta” (que es la clasificación que normalmente se entiende mejor) y “para qué se gasta”.

{% img 'posts/170510-mapa-presupuestos03.jpg' %}

## Revisando la actualidad: Un gran esfuerzo para reducir la deuda

Ni el Estado español ni las comunidades autónomas cumplieron en 2016 con los objetivos del déficit marcados por Europa. **Sólo los ayuntamientos se han apretado el cinturón al máximo y han cumplido con el baremo impuesto desde Bruselas**. El conjunto de las entidades locales ha acabado 2016, no sólo cumpliendo un déficit 0% sino aportando un superávit –**7.000 millones de euros entre todas**– que supone un pequeño balón de oxígeno para paliar la deuda del resto de entidades, que no han hecho los deberes. 

El alcance de este esfuerzo se puede comprobar con un vistazo rápido al mapa. En la parte superior izquierda tenemos una tarjeta con la media total de gasto por habitante, y sobre ella el selector de año. Cambiando los años vemos que **en 2016 los ayuntamientos españoles gastaron de media unos 200€ menos por habitante que en 2010**.

La [Ley de Racionalización y Sostenibilidad de la Administración Local](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2013-13756) (conocida entre los funcionarios como “Ley Montoro”) y la Ley de [Estabilidad Presupuestaria y Sostenibilidad Financiera (LOEPSF)](http://www.minhafp.gob.es/es-ES/CDI/Paginas/EstabilidadPresupuestaria/LeyEstabilidadPresupuestaria.aspx) impiden gastar nuevos ingresos en otra cosa que no sea reducir la deuda. Si seleccionamos **“En qué se gasta”** en el mapa y a continuación **“Deuda pública”** podemos ver cuánto ha empleado cada municipio en reducir su deuda año tras año. Para que sea un dato ponderado lo mostramos en números relativos, es decir, gasto por habitante. Ojo, **no todos los municipios tienen la misma capacidad de endeudamiento** y por tanto algunos tienen más tiempo que otros para reducir su deuda. En su día hicimos un análisis de esta cuestión en este post: [¿Cuando terminará tu municipio de pagar su deuda?](http://gobierto.es/blog/20160901-entendiendo-deuda-municipal.html)

{% img 'posts/170510-mapa-presupuestos04.jpg' %}

Un vistazo rápido al mapa permite ver el efecto de los recortes en cada una de las entidades locales. Por ejemplo, se puede comprobar la contención municipal en el gasto social, es decir, las **“Actuaciones de protección y promoción social”**. En este apartado se visualiza la distribución de las políticas sociales que muchos ayuntamientos han tenido que recortar y cuyos efectos sobre la población más vulnerable han esgrimido una y otra vez durante la crisis. El caso más conocido es el del Ayuntamiento de Madrid, que [ha mantenido un pulso constante con Cristóbal Montoro](http://www.elconfidencial.com/espana/madrid/2016-11-06/cartas-hacienda-montoro-carmena-madrid-17-millones-desvio-gasto_1285628/) por este tema.

## El gasto de la España vacía

Si seleccionamos “Habitantes” en la franja superior, y a continuación cambiamos a “Gasto por habitante” podemos ver una de las correlaciones visuales más significativas: La llamada “España vacía” es la que concentra mayor número de gasto por habitante. Es lógico: el Estado y las comunidades autónomas transfieren más dinero a los ayuntamientos con pocos habitantes. Estos territorios tienen que afrontar gastos fijos y extraordinarios –alumbrado, limpieza, seguridad o transporte– con pocos ingresos, ergo reciben más transferencias y, al tener pocos habitantes, el gasto por habitante es mayor.

{% img 'posts/170510-mapa-presupuestos-gif.gif' %}

## El peso de los impuestos

Seleccionando “Ingresos” podemos ver los tributos que recauda cata ayuntamiento. Los impuestos directos son los que pagamos en la declaración de la renta, y luego el Estado se encarga de repartirlos, asignando una parte a los municipios. A nivel municipal los impuestos directos que suelen recaudar los Ayuntamientos directamente son el IBI (Impuesto de Bienes Inmuebles) o el impuesto de circulación.
Vemos que seleccionando el IVA sólo aparecen algunos municipios. Esto se debe a que no todos tienen competencias para recaudar impuestos indirectos. Sólo los de gran tamaño o capital de provincia pueden recaudar una parte del IVA, impuestos sobre bebidas alcohólicas o sobre el tabaco. Por último, podemos ver cuánto recaudan por las tasas, precios públicos y contribuciones especiales por la realización de una contraprestación municipal. Por ejemplo, al abrir un bar hay que pagar una tasa específica.

{% img 'posts/170510-mapa-presupuestos05.jpg' %}

## Sueldos de los órganos de gobierno y el personal directivo

¿En qué territorios se dedica más gasto por habitante para pagar a los representantes políticos y personal directivo de los ayuntamientos? Seleccionamos “Para qué se gasta” (que en lenguaje presupuestario es la clasificación orgánica de los gastos) y después “Gastos de personal”. Podemos incluso segmentar por el tipo de personal: directivo, eventual, laboral...

{% img 'posts/170510-mapa-presupuestos06.jpg' %}

## Dinero para arreglar las calles

El gasto en vías públicas nos da una foto fija de cuánto dedica cada municipio a rehabilitar calles o crear nuevos accesos a los núcleos de población. Por ejemplo, vemos que Castronuño, un pequeño pueblo de 889 habitantes de la provincia de Valladolid tuvo en 2016 un gasto importante en pavimentación de vías públicas.

{% img 'posts/170510-mapa-presupuestos07.jpg' %}

## Y mucho más

El comparador de presupuestos es una de las herramientas que incorporamos, ampliada y mejorada, en [Gobierto](www.gobierto.es), el software libre de gobierno abierto que desarrollamos en [Populate](http://populate.tools/). Si quieres echar un vistazo al proyecto y colaborar, aquí puedes acceder al [repositorio de Github](https://github.com/PopulateTools/gobierto-comparador-presupuestos). Si trabajas en un ayuntamiento y quieres que te ayudemos a integrar y personalizar Gobierto, [escríbenos](http://gobierto.es/acerca-de/#contacto).
