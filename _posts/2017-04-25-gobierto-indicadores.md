---
title: Gobierto Indicadores, nuevo módulo para mostrar tu municipio en cifras
date: 2017-04-25 00:00:00 +02:00
categories:
- visualizacion_de_datos
- gobierto
layout: post
module: observatorio
subtitle: Un paseo por el nuevo módulo de indicadores, que resume y contextualiza
  los datos abiertos de población, empleo y economía
author: Martín González
main_photo_big: posts/170425-indicadores-1.png
---

Muchos municipios y otras entidades se preocupan de recopilar indicadores sobre su municipio para tomar deciciones y compartirlos con la ciudadanía. Algunos incluso tienen sus propios institutos de estadística. Pero crear tus propios datos o acceder a las distintas fuentes para recopilarlos y ordenarlos es algo costoso. Realizar el ejercicio de mostrar estos datos de forma comprensible, más todavía.

Siguiendo nuestra línea de facilitar la puesta en marcha de iniciativas de transparencia y participación, hemos desarrollado el módulo de **Gobierto Indicadores** (también conocido como Tu Municipio en Cifras): una visualización que recopila indicadores sobre población, economía, empleo, industria, presupuestos... para que cualquiera pueda entender mejor la situación de su municipio de una forma sencilla, accesible y progresiva.

¿Cuánta gente vive, nace, muere en mi municipio? ¿Cómo andamos de paro? ¿Y por sectores? ¿Cómo es de rico mi municipio comparado con los de nuestro entorno? Estas son algunas de las preguntas que queremos que sea fácil responder con Gobierto Indicadores.  

Échale un vistazo a lo que Gobierto Indicadores ofrece en esta primera iteración:

<div class="video_wrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/nzKvoI1xLXA" frameborder="0" allowfullscreen></iframe>
</div>

Algunos de los datos que te contamos a través de visualizaciones e indicadores:

### Población

{% asset 'posts/170425-indicadores-2.png' %}

Estos datos son de Madrid y muestran el número de habitantes según la edad. Las tarjetas resumen otros indicadores relevantes. Añadimos contexto con comparaciones entre el municipio, la provincia y el país, además de aportar datos por habitante, en el caso de los coches, o el porcentaje de población activa del municipio. Los gráficos de línea (o [_sparklines_](https://en.wikipedia.org/wiki/Sparkline)) que incluimos en algunas tarjetas ayudan a entender la tendencia de cada cifra en los últimos meses o años.

{% asset 'posts/170425-indicadores-3.png' %}

### Empleo
{% asset 'posts/170425-indicadores-4.png' %}

El desempleo es uno de los problemas que más preocupan a la sociedad. Por eso, en nuestros indicadores hemos ido un poco más allá, calculando una aproximación de la tasa de paro a nivel local. Esta cifra la comparamos con la de España y la de la Comunidad Autonóma en los últimos cinco años. También la hemos aproximado según el sexo y la edad, factores relevantes que influyen en el indicador.

No son unas cifras exactas pero sirven para tener una referencia, un contexto bastante completo que no era accesible facilmente.

{% asset 'posts/170425-indicadores-5.png' %}

Cada mes el [Servicio Público de Empleo Estatal](https://www.sepe.es/) (SEPE) publica el número de desempleados y contratos a nivel local. Hemos añadido unas tarjetas que muestran de una manera clara la evolución del mercado laboral por sector económico. También es importante entender el contexto, por eso tenemos el número de afiliados a la Seguridad Social, de autónomos y de empresas.

### Economía
{% asset 'posts/170425-indicadores-6.png' %}

¿Cómo contextualizamos a un municipio en términos económicos? Creemos que comparar la renta bruta media y la población es un ejercicio interesante, ya que se pueden ver los diferentes _clusters_ que se forman en la provincia. Aquí Madrid destaca por su elevado número de habitantes, saliéndose de la tendencia provincial.

Para profundizar en esa cifra hemos agregado varias tarjetas sobre renta e impuestos, que ayudan a entender la inversión y la deuda comparándolas con las de municipios de un tamaño similar.

También hemos calculado la media del impuesto a las construcciones y turismos en la provincia. Esto ayuda a colocar el municipio en su contexto de una manera más clara.

{% asset 'posts/170425-indicadores-7.png' %}

## Próximas iteraciones

En próximas iteraciones añadiremos nuevas visualizaciones, mayor capacidad de contexto y detalle, filtrado por fechas...

## Haciendo ágil el desarrollo de Gobierto Indicadores: Populate Data

Los datos abiertos suelen estar dispersos. Esto es un problema, ya que no es fácil unificar fuentes tan dispares como el INE, Hacienda o la DGT. En Populate trabajmos mucho con datos públicos y abiertos, y para facilitar el trabajo estamos construyendo **Populate Data**. Un índice global de datos abiertos que aglutina datos de distintas fuentes para permitir su acceso a través de una API unificada que simplifique la creación de este tipo de aplicaciones. Lo comenzamos a construir cuando desarrollamos España en Cifras, y es la herramienta que utilizamos para proyectos como presupuestos.gobierto.es o este Gobierto Indicadores.

Gobierto Indicadores se suma a los módulos de Gobierto ya en marcha: Visualización de Presupuestos, Altos Cargos y Agendas, y Consultas sobre presupuestos. Sin prisa pero sin pausa vamos configurando una plataforma de transparencia y participación eficiente y que pone en valor la actividad de las administraciones públicas para ayudarte a conectar mejor con tus vecinos.  

Si te interesa ofrecer **Tu municipio en cifras** o probar Populate Data, escríbenos a [lets@populate.tools](mailto:lets@populate.tools).
