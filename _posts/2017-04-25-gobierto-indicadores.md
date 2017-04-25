---
layout: post
title: Descubre los datos de tu municipio con los indicadores de Gobierto
subtitle: "Un paseo por el nuevo módulo de indicadores, que resume y contextualiza los datos abiertos de población, empleo y economía"
date: 2017-04-25
categories: datos, gobierto
author: Martín González
main_photo: posts/170425-indicadores-1.png
---
¿Cuántos parados hay en tu municipio? ¿Y el número de habitantes? Es probable que sepas la respuesta a alguna de estas dos preguntas, pero no son, ni mucho menos, los únicos datos que existen a nivel municipal.

Hace unos meses comenzamos a trabajar en el [módulo de indicadores](https://madrid.gobierto.es/indicadores), una nueva sección con gráficos y tarjetas que contextualizan la información estadística de tu ayuntamiento. Es la manera más clara de entender las cifras de un municipio.

En este post haremos un repaso a las visualizaciones y a los datos que hemos integrado.

## 1. Las secciones
El módulo se compone de los gráficos, que funcionan a modo de resumen de cada apartado, y las tarjetas, que resumen la información. Hay tres secciones, población, empleo y economía. Pensamos que estas categorías resumen de una manera sencilla los principales rasgos de un pueblo o una ciudad, y poco a poco iremos añadiendo más indicadores.

### Población
{% img 'posts/170425-indicadores-2.png' %}

Estos datos son de Madrid y muestran el número de habitantes según la edad. Es importante entender el perfil demográfico de un lugar: la edad media, el número de jóvenes y de mayores. 

Las tarjetas resumen otros indicadores relevantes. Añadimos contexto con comparaciones entre el municipio, la provincia y el país, además de aportar datos por habitante, en el caso de los coches, o el porcentaje de población activa del municipio. Los gráficos de línea (o [_sparklines_](https://en.wikipedia.org/wiki/Sparkline)) que incluimos en algunas tarjetas ayudan a entender la tendencia de cada cifra en los últimos meses o años.

{% img 'posts/170425-indicadores-3.png' %}

### Empleo
{% img 'posts/170425-indicadores-4.png' %}

El desempleo es uno de los problemas que más preocupan a la sociedad. Por eso, en nuestros indicadores hemos ido un poco más allá, calculando una aproximación de la tasa de paro a nivel local. Esta cifra la comparamos con la de España y la de la Comunidad Autonóma en los últimos cinco años. También la hemos aproximado según el sexo y la edad, factores relevantes que influyen en el indicador.

No son unas cifras exactas pero sirven para tener una referencia, un contexto bastante completo que no hemos encontrado en ningún otro lugar.

{% img 'posts/170425-indicadores-5.png' %}

Cada mes el [Servicio Público de Empleo Estatal](https://www.sepe.es/) (SEPE) publica el número de desempleados y contratos a nivel local. Hemos añadido unas tarjetas que muestran de una manera clara la evolución del mercado laboral por sector económico. También es importante entender el contexto, por eso tenemos el número de afiliados a la Seguridad Social, de autónomos y de empresas.

### Economía
{% img 'posts/170425-indicadores-6.png' %}

¿Cómo contextualizamos a un municipio en términos económicos? Creemos que comparar la renta bruta media y la población es un ejercicio interesante, ya que se pueden ver los diferentes _clusters_ que se forman en la provincia. Aquí Madrid destaca por su elevado número de habitantes, saliéndose de la tendencia provincial.

Para profundizar en esa cifra hemos agregado varias tarjetas sobre renta e impuestos, que ayudan a entender la inversión y la deuda comparándolas con las de municipios de un tamaño similar.

También hemos calculado la media del impuesto a las construcciones y turismos en la provincia. Esto ayuda a colocar el municipio en su contexto de una manera más clara.

{% img 'posts/170425-indicadores-7.png' %}

## 2. Los datos
Los datos abiertos suelen estar dispersos. Esto es un problema, ya que no es fácil unificar fuentes tan dispares como el INE, Hacienda o la DGT. Para solucionar esto hemos creado una API común –Populate Data– que recopila cientos de indicadores públicos y se encarga de servir la información a todos los gráficos. La actualización es automática. A los pocos minutos de un cambio en la fuente original ya tenemos las nuevas cifras.

La API también soporta el cálculo de sumas y medias de manera dinámica, así que hemos ganado tiempo al desarrollar visualizaciones.

Si te interesa o quieres más información, escríbenos a [lets@populate.tools](mailto:lets@populate.tools).
