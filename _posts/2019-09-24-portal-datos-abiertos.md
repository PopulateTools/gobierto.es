---
title: "Portales de datos abiertos como herramienta para los propios usuarios de una organización"
subtitle: 'Cómo debería ser un portal de open data para que sirva a los propios usuarios de la organización'
date: 2019-09-25 00:00:00 +02:00
categories:
- datos_abiertos
- analisis
module: datos-abiertos
layout: post
author: Álvaro Ortiz
main_photo: posts/190924-datos.jpg
---

**¿Cómo conseguimos que un portal de datos abiertos sea una herramienta que sirve, en primer lugar, a la propia organización?**

Montar un portal de datos abiertos supone un gran esfuerzo. Instalar el portal es lo de menos, pero hacer toda la "curación" de datos es un trabajo enorme: seleccionar, preparar, transformar, integrar, publicar, actualizar...

Todo esto sobre fuentes de datos diversas (aplicaciones de distintos fabricantes, APIs inexistentes, distintos sistemas operativos....) y algunas poco "programables" y aisladas (ej. ficheros de Excel guardados en ordenadores _personales_).

Este esfuerzo es necesario para hacer algo que se debe hacer: Abrir datos. Poner a disposición de todos lo generado con recursos comunes.

En muchas organizaciones se van dando pasos para tener _data lakes_, **lagos de datos donde se viertan todos los datos de una organización** para tener un único sitio al que personas y máquinas puedan acceder. **El nirvana de los datos**. Pero este proceso es complejo y no hay una fórmula mágica para hacerlo.

Un portal de datos abiertos es un reflejo de este data lake platónico, o al menos de una parte (excluyendo datos que no se deben publicar: personales, no preparados...).

{% asset 'posts/190925-dataworld.png' class='Outline Shadow caption' title="Ejemplo de ficha de dataset de data.world, herramienta para compartir, explorar y publicar datos" %}

**¿Tiene sentido que este data lake y el portal de datos abiertos sean la misma cosa?** Hay miles de razones técnicas para pensar que esto es una locura, y ya puedo sentir a hordas de técnicos revolviéndose en sus sillas al leer esto.

Bien. Parece que los temblores han cesado. ¿Por qué es interesante?

* **Interfaz para descubrir y explorar datos**: En muchas organizaciones en las que no hay un repositorio central de datos si no muchas fuentes inconexas y ubicaciones desconocidas (sabes el Excel que guarda tu compañero, pero no sabes los Excels que generan en otros departamentos), un portal de datos abiertos sirve como un _hub_ de datos para que **cualquiera dentro -y fuera- de la organización pueda descubrir, explorar y consumir datos**.
* **Aumenta el uso**: **Los portales de datos abiertos se usan poco** (solo hay que ver la mayoría de "vistas a un dataset" de muchos portales). Si se usan poco hay pocas razones para mejorarlos, por lo que muchos portales se quedan en promesas a medias (datos desactualizados, incompletos...) y tenemos entre manos una inversión poco rentable. Como ese parque en las afueras que no termina de usarse y el paso del tiempo y la falta de mantenimiento estropean.
* **El uso guia las mejoras**: Si conseguimos que los usuarios internos además de los externos hagan uso de este repositorio de datos estaremos poniendo en valor los datos de la organización, un primer paso en esa quimérica dirección del _data-driven_.
* **2 por el precio de 1**: En vez de dedicarse a hacer dos productos esencialmente similares, concentrar los recursos en solo uno resultará en un mejor producto con más funcionalidades que además mejorarán guiadas por uso real. (Hay organizaciones que generan muchísimos datos que tienen unas exigencias técnicas muy altas. Pero debes preguntarte si es tu caso)


{% asset 'posts/190925-mode.png' class='Outline Shadow caption' title="Exploración de datos en Mode Analytics" %}


## En base a estas premisas... **¿cómo debería ser una herramienta de datos?**

Hablando con diversas organizaciones, públicas y privadas, sobre su gestión de datos, ciclo de vida, puesta en uso, visualización, dashoards, aprovechamiento colectivo de los datos... hay un denominador común cuya repetición entre distintos entes es pasmosa: tienen muchos datos, pero hay muchas fuentes distintas y en más ocasiones de las deseables son "personales" (viven en equipos privados, no están compartidas y su existencia a veces no está documentada). Cuando necesitas un dato, si sabes que existe y dónde está, su recuperación suele ser manual...

¿Cómo dar el paso a tener una herramienta de datos que neutralice esta situación? Desde un enfoque de experiencia de usuario, vemos los siguientes necesidades:

### 1. Descubrimiento

Facilitar la búsqueda y navegación en un catálogo de datos para localizar lo que se busca, o saber si lo que se busca existe. Los portales de datos tienen buscadores, pero su calidad es mejorable.


### 2. Exploración

Facilitar la comprensión de un dataset y su exploración mediante vistas de datos.

#### **Comprensión**

Cuando trabajas con tablas de datos que no has creado tu lo primero que necesitas saber es la estructura de los datos (las columnas, generalmente) y un breve resumen estadístico de los datos: tipos de valores en una columna; mínimos, máximos, medias, medianas; posibles valores; rangos; agregaciones básicas... Este trabajo no es complicado, pero las herramientas clásicas de datos abiertos solo te ofrecen los datos, delegando en ti una tarea que casi siempre es igual. **¿Y si una herramienta de exploración hiciese de forma automática estos análisis básicos que siempre se realizan?**

#### **Exploración**

Las vistas son un concepto presente en los sistemas de bases de datos desde siempre. Se trata de realizar vistas alternativas de una tabla de datos para dar una forma nueva a los datos, o para combinar datos de varias tablas; teniendo como resultado una nueva tabla de datos (que está basada en la original, y cuyos datos se modificarán si la original se actualiza). Cuando aplicas un filtro a los datos también estás realizando una vista. **¿Y si las vistas que realicen distintos usuarios pueden ser compartidas entre ellos?**

Por ejemplo, podemos tener una tabla con las mediciones individuales de visitas de ciudadanos a una dependencia del ayuntamiento (un registro por cada visita, con la fecha y hora de la visita, entre otros datos). Pero para entender los datos probablemente necesitemos agregar por semana o mes. Si yo preparo (vía SQL o con ayuda de un interfaz) esta vista será interesante que otros usuarios puedan acceder a ella.

{% asset 'posts/190925-metabase.png' class='Outline Shadow caption' title="Construcción de dashboards en Metabase" %}

### 3. Visualizar

La visualización de datos es clave para sacar aprendizajes (a falta una mejor traducción para _insights_) y entender con mayor rapidez un conjunto de datos. Los datos y su visualización van muy pegados. Hay muchas herramientas de visualización  sofisticadas por lo que cabe cuestionarse si una herramienta para compartir datos debe contener funcionalidades de visualización.

Los sistemas de portales de datos abiertos tienen unas pobres herramientas de visualización, porque hacerlo bien es complicado.

Para afinar un poco con la visualización dado el origen heterogeneo de las estructuras de datos publicados, según nuestra experiencia, es necesario poder hacer algunas transformaciones previas. Si no puedes hacerlo en la propia herramienta debes hacerlo en otra distinta, lo que complica tu flujo de trabajo y te saca de la herramienta original.

Por eso planteamos que una funcionalidad importante es la de crear vistas para poder dar la forma que necesites a los datos.

A partir de aquí **puedes crear gráficas y juntar diversas gráficas para componer dashboards**.


### 4. Compartir y conectar

Si puedo crear vistas de los datos, crear gráficas, y componer dashboards, el objetivo es poder compartirlos para que otras personas con las mismas necesidades puedan aprovechar mi esfuerzo.

Y permitir remezclar (hacer _forks_, versiones derivadas) de mis consultas y gráficos, y que se puedan publicar de nuevo. Así, tendría un espacio donde puedo ver qué derivaciones han creado el resto de usuarios sobre un dataset dentro de un mismo entorno y poder hacer yo lo mismo.


<div class="separator blue short"></div>


## Ejemplos de herramientas

¿Existe una herramienta como esta? Hay algunos ejemplos que contienen algunas de las ideas comentadas:

* [Metabase](https://www.metabase.com/)
* [data.world](http://data.world)
* [Mode Analytics](https://mode.com)


## Lecturas recomedadas

* Del equipo de Mercadona: [Algunas claves y herramientas para crear una cultura organizativa basada en datos](https://medium.com/@joseperezaguera/algunas-claves-y-herramientas-para-crear-una-cultura-organizativa-basada-en-datos-e9785a1498ac)



## ¿Qué pasa con CKAN?

CKAN es el gran protagonista de los datos abiertos en los últimos años. En Populate hemos hecho algunas implementaciones y después de haber tenido las manos en la masa, hay algunos aspectos que pensamos que podrían mejorar significativamente. Pero lo dejamos para el próximos post, que este ya se va alargando.


<div class="separator blue short"></div>

Fotografía: <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@mbaumi?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Mika Baumeister"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Mika Baumeister</span></a>
