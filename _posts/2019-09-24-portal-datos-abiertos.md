---
title: "Portales de datos abiertos como herramientas de datos para los propios usuarios de una organización"
subtitle: 'Cómo debería ser un portal de open data para que lo utilicen para que sirva a los propios usuarios de la organización'
date: 2019-09-24 00:00:00 +02:00
categories:
- datos_abiertos
layout: v2/post
author: Álvaro Ortiz
main_photo: posts/190924-datos.jpg
---

**¿Cómo conseguimos que un portal de datos abiertos sea una herramienta que sirve, en primer lugar, a la propia organización?**

Montar un portal de datos abiertos supone un gran esfuerzo. Instalar el portal es lo de menos, pero hacer toda la "curación" de datos es un trabajo enorme: seleccionar, preparar, transformar, integrar, publicar, actualizar...

Todo esto sobre fuentes de datos diversas (aplicaciones de distintos fabricantes, APIs inexistentes, distintos sistemas operativos....) y algunas poco "programables" y aisladas (ej. ficheros de Excel guardados en ordenadores _personales_).

Este esfuerzo es necesario para hacer algo que se debe hacer: Abrir datos. Poner a disposición de todos lo generado con recursos comunes.

En muchas organizaciones se van dando pasos para tener _data lakes_, **lagos de datos donde se viertan todos los datos de una organización** para tener un único sitio al que personas y máquinas puedan acceder. **El nirvana de los datos**. Pero este proceso es complejo y no hay una fórmula mágica para hacerlo.

Un portal de datos abiertos es un reflejo de este data lake platónico, o al menos de una parte (excluyendo datos que no se deben publicar: personales, no preparados...).

**¿Tiene sentido que este data lake y el portal de datos abiertos sean la misma cosa?** Hay miles de razones técnicas para pensar que esto es una locura, y ya puedo sentir a hordas de técnicos revolviéndose en sus sillas al leer esto.

Bien. Parece que los temblores han cesado. ¿Por qué es interesante?

### Interfaz para descubrir y explorar datos

En muchas organizaciones en las que no hay un repositorio central de datos si no muchas fuentes inconexas y ubicaciones desconocidas (sabes el Excel que guarda tu compañero, pero no sabes los Excels que generan en otros departamentos), un portal de datos abiertos sirve como un _hub_ de datos para que **cualquiera dentro -y fuera- de la organización pueda descubrir, explorar y consumir datos**.

### Aumenta el uso

**Los portales de datos abiertos se usan poco** (solo hay que ver la mayoría de "vistas a un dataset" de muchos portales). Si se usan poco hay pocas razones para mejorarlos, por lo que muchos portales se quedan en promesas a medias (datos desactualizados, incompletos...) y tenemos entre manos una inversión poco rentable. Como ese parque en las afueras que no termina de usarse y el paso del tiempo y la falta de mantenimiento estropean.  

### El uso guia las mejoras

Si conseguimos que los usuarios internos además de los externos hagan uso de este repositorio de datos estaremos poniendo en valor los datos de la organización, un primer paso en esa quimérica dirección del _data-driven_.

### 2 por el precio de 1

En vez de dedicarse a hacer dos productos esencialmente similares, concentrar los recursos en solo uno resultará en un mejor producto con más funcionalidades que además mejorarán guiadas por uso real.


## En base a estas premisas... **¿cómo debería ser una herramienta de datos?**

Hablando con diversas organizaciones, públicas y privadas, sobre su gestión de datos, ciclo de vida, puesta en uso, visualización, dashoards, aprovechamiento colectivo de los datos... hay un denominador común cuya repetición entre distintos entes es pasmosa: tienen muchos datos, pero hay muchas fuentes distintas y en más ocasiones de las deseables son "personales" (viven en equipos privados, no están compartidas y su existencia a veces no está documentada). Cuando necesitas un dato, si sabes que existe y dónde está, su recuperación suele ser manual...

¿Cómo dar el paso a tener una herramienta de datos que neutralice esta situación? Desde un enfoque de experiencia de usuario, vemos los siguientes ejes:

### 1. Descubrimiento

Facilitar la búsqueda y navegación en un catálogo de datos para localizar lo que se busca, o saber si lo que se busca existe.

buscar, encontrar, navegar


### 2. Exploración

Facilitar la comprensión de un dataset y permitir crear vistas de datos.

- **Comprensión**: cuando trabajas con tablas de datos que nos has creado tu lo primero que necesitas saber es la estructura de los datos (las columnas, generalmente) y un breve resumen estadístico de los datos: tipos de valores en una columna; mínimos, máximos, medias, medianas; posibles valores; rangos...
- **Vistas de datos**: este es un concepto que lleva presente en los sistemas de bases de datos muchos años. Se trata


resumen estadístico, filtrar, combinar


### 3. Visualizar

A partir de las tablas de datos, las


### 4. Compartir


Alguien familiarizado con bases de datos podrá ver que este planteamiento no es nada revolucionario y que estamos robando muchas ideas que existen desde hace décadas. Pero echamos de menos sistemas que le pongan un interfaz web y permitan la colaboración en torno a algunos de esos conceptos.

---

- Queries, forks, favoritos
- Visualizar: tablas, gráficos
- Pivot Tables:
- Reportes: conjuntos de tablas y gráficos



## Ejemplos de herramientas

Metabase
data.world
Mode Analytics


## Lecturas recomedadas

* Del equipo de Mercadona: [Algunas claves y herramientas para crear una cultura organizativa basada en datos](https://medium.com/@joseperezaguera/algunas-claves-y-herramientas-para-crear-una-cultura-organizativa-basada-en-datos-e9785a1498ac)



## ¿Qué pasa con CKAN?

CKAN es el gran protagonista de los datos abiertos en los últimos años. En Populate hemos hecho algunas implementaciones y después de haber tenido las manos en la masa, hay algunos aspectos que pensamos que podrían mejorar significativamente. Pero lo dejamos para el próximos post, que este ya se va alargando.



<div class="separator blue short"></div>

En Gobierto:

* [Ética y datos en la administración pública](/blog/20190918-etica-y-datos.html)
* [Consolidando la experiencia de usuario online de las administraciones públicas](https://gobierto.es/blog/20170615-patrones-y-estandares-en-la-administracion.html)

<div class="separator blue short"></div>

Fotografía: <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@mbaumi?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Mika Baumeister"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Mika Baumeister</span></a>
