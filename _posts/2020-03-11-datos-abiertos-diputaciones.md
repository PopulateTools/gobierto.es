---
title: "Datos abiertos en las diputaciones"
subtitle: 'Una oportunidad'
date: 2020-03-11 00:00:00 +02:00
categories:
- datos_abiertos
layout: v2/post
author: Jaime de Lorenzo
main_photo: posts/datos_abiertos_diputaciones_0.jpg
---

Las Diputaciones están en una posición envidiable para ofrecer excelentes proyectos de datos abiertos. Dada su naturaleza de "proveedor de servicios" para ayuntamientos de tamaño medio y pequeño, ya están gestionando muchos datos de esas entidades. Crear plataformas de publicación de datos puede favorecer dinámicas de colaboración además de incidir en la propia apertura de los datos. De nuevo, vemos oportunidades para que el enfoque de datos abiertos revierta beneficios sobre todo en las propias organizaciones.

La oportunidad es grande: por el momento son pocas las diputaciones que tienen un proyecto sólido de datos abiertos. Hemos analizado los proyectos en marcha para destacar buenas prácticas y dar algunas pistas de los caminos que se pueden transitar para que las Diputaciones aumenten el valor que proporcionan gracias a los datos. 

Este análisis se ha hecho en base a una serie de criterios surgidos a partir de la observación y exploración de los portales de datos abiertos de diputaciones.

|**Gobernanza**|¿Existe una estrategia definida?, ¿Quien lidera el proyecto?, ¿Cómo se licencian los datasets?|
|**Navegación**|¿Cómo llego al portal de datos abiertos?, ¿Cuál es su estructura?, ¿Están categorizados o etiquetados los conjuntos de datos?|
|**Publicación**|¿Cómo se publican los datos?, ¿Qué plataforma o software utiliza el portal?, tipos de formato, datos enlazados, vocabularios, ...|
|**Participación y colaboración**|¿Puedo interactuar con otros usuarios?, ¿Es posible comunicarse con los responsables del portal?|
|**Reutilización**|¿Son datos útiles?, ¿Se descargan?, ¿Existen casos de reutilización?|


## Cómo elegir una plataforma adecuada para mi organización

Para garantizar el éxito en la puesta en marcha de un proyecto de datos abiertos es necesario contar no sólo con una estrategia  para ello, sino también con el equipo adecuado y la capacidad jurídica, administrativa y operativa para poder llevar a cabo esa política pública.

Algunas diputaciones cuentan con tácticas para la apertura de datos. En la Diputación de Barcelona por ejemplo tienen un protocolo para cerciorarse de la autoría de los datos, su veracidad y asegurar su apertura de forma sostenible en el futuro; todo queda reflejado en un decreto firmado entre el departamento origen de los datos y el responsable de datos abiertos de la diputación.

En ocasiones la estrategia de apertura y reutilización de datos se publica de una forma mucho más visual. Este es el caso de la Diputación de Castellón donde podemos conocer el grado de ejecución de cada una de las acciones a partir de una serie de indicadores que se revisan en un periodo determinado.

{% asset 'posts/datos_abiertos_diputaciones_2.png' class='Outline Shadow caption' title="Acciones para desarrollar una estrategia de datos" %}

Por otro lado las licencias que amparan los datos publicados son tremendamente importantes. Tener una licencia adecuada permite el acceso libre a los datos, su reutilización y difusión de los mismos. Esa misma licencia ha de especificar si se podrá hacer uso comercial o no. Es una información clave pero hemos comprobado que no suele ser fácil encontrarla. Normalmente suele estar contenida en la página de cada dataset o dentro del enlace “Aviso Legal” al final de la web. 

Aún así hay alguna diputación que sí dan visibilidad al licenciamiento de los datos.

## Navegación

El acceso a la mayoría de estos portales viene tras pasar por el Portal de Transparencia o el enlace de Gobierno Abierto, muy pocas tienen una pestaña, un banner o una opción en algún menú exclusivo referido a Open Data en su página principal. En alguno de los casos se necesitan hasta 3 clicks para llegar a la página.

Todos los portales visitados están ordenados por categorías, las cuales van en línea con lo que indica la [Norma Técnica de Interoperabilidad de Reutilización de Recursos de Información](https://datos.gob.es/es/documentacion/norma-tecnica-de-interoperabilidad-de-reutilizacion-de-recursos-de-informacion), y tienen una interfaz sencilla e intuitiva con filtrado por etiquetas, formatos o temas lo cual facilita tremendamente la navegación.

{% asset 'posts/datos_abiertos_diputaciones_3.png' class='Outline Shadow caption' title="Filtros basados en categorías del portal del portal de datos abiertos de la Diputacion de Salamanca." %}

Alguna diputación, como la de Tarragona, da la posibilidad de conocer cuál es el contenido de cada columna del dataset antes de la descarga y también muestra el tipo de valor antes de bajarlo. Esto es muy útil porque permite tener un conocimiento previo de los datos que vamos a tratar sin necesidad de descargarlos.

{% asset 'posts/datos_abiertos_diputaciones_4.png' class='Outline Shadow caption' title="Filtros basados en categorías del portal del portal de datos abiertos de la Diputacion de Salamanca." %}

Existen en algunos casos pequeños atajos que hacen la navegación más fácil al visitante. Un recurso no muy común es el de la opción de “Más Visitados” que te enlaza directamente con los datasets que han sido más buscados por los usuarios.

Los temas económicos y de sector público son los más buscados por los usuarios en las diputaciones que tienen esta pestaña: “Retribuciones de altos cargos”, “Relación de puestos de trabajo y retribuciones del personal eventual”, “Convocatorias de personal” o “Bienes Inmuebles de Naturaleza Urbana” son algunos de los ejemplos. 

{% asset 'posts/datos_abiertos_diputaciones_5.png' class='Outline Shadow caption' title="Filtros basados en categorías del portal del portal de datos abiertos de la Diputacion de Salamanca." %}

Otro ejemplo, la Diputación Foral de Bizkaia, tiene un contador que recoge las veces que se ha visitado ese dataset e incorpora una opción de sugerir mejoras. Esta es una gran forma de evaluar también cómo está funcionando la estrategia de Datos Abiertos de la institución.

{% asset 'posts/datos_abiertos_diputaciones_6.png' class='Outline Shadow caption' title="Filtros basados en categorías del portal del portal de datos abiertos de la Diputacion de Salamanca." %}

## Publicación

El software usado para implementar los portales varía según la diputación. Algunos usan CKAN, otros softwares privativos como Socrata, incluso encontramos algunos CMS configurados como portales de datos abiertos (Liferay, Wordpress).También encontramos desarrollos propios basados en diferentes tecnologías y frameworks.


| **Diputaciones** | **Software** | **Datasets** <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> | **Actualizado** |
| ------------ | ------------- | ------------- | ------------- |
|[Barcelona](https://dadesobertes.diba.cat/)|DKAN|66|Diaria|
|[Bizkaia](https://www.opendatabizkaia.eus/es/catalogo)|CKAN|455|30/01/2020|
|[Cádiz](https://datosabiertos.dipucadiz.es/data/)|OGoov|54|20/04/2018|
|[Castellón](https://datosabiertos.dipcas.es/explore/?sort=modified)|OpenDataSoft|60|Diaria|
|[Cuenca](https://www.dipucuenca.es/open-data)|Liferay|20|-|
|[Guipuzkoa](http://www.gipuzkoairekia.eus/es/datu-irekien-katalogoa)|Liferay|2.012|Diaria|
|[Huesca](http://datosabiertos.dphuesca.es/dataset)|CKAN|49|26/09/2018|
|[Lleida](https://portaltransparencia.diputaciolleida.cat/es/browse)|Socrata|144|30/01/2020|
|[Lugo](http://portaltransparencia.deputacionlugo.org/web/guest/open-data)|Liferay|-|01/04/2016|
|[Málaga](http://www.malaga.es/gobiernoabierto/datosabiertos/)|ASP.Net|1.000|-|
|[Salamanca](https://datosabiertossalamanca.es/dataset?organization=diputacion-de-salamanca)|CKAN|37|30/01/2020|
|[Tarragona](https://www.seu-e.cat/es/web/dipta/dades-obertes)|Socrata|34|Diaria|
|[Teruel](https://236ws.dpteruel.es/transparencia/dpteruel/open-data/buscador-datasets/)|¿Wordpress?|91||23/01/2020*|
|[Valladolid](https://gobiernoabierto.diputaciondevalladolid.es/catalogo)|Liferay|-|-|

El número de datasets es muy dispar. Algunas diputaciones ofrecen un par de miles de conjuntos de datos y otros apenas unas decenas. Esto se debe en parte a que algunas diputaciones, cumpliendo su objetivo de proveer de servicios a algunos de los municipios que las conforman pero no tienen los suficientes recursos, no solo publican datos sobre ellas mismas si no que también proveen de información sobre dichos municipios, sus ayuntamientos o mancomunidades, por lo que el volumen de información que producen es mayor. 

Si nos fijamos en la fecha de última actualización existen también diferencias, son varias las diputaciones que ofrecen alguno de sus datasets con actualizaciones diarias o semanales. Por desgracia también abundan otras con datos sin actualizar desde hace años.

Hemos revisado algunos datasets para conocer cómo era su estructura y valorar su posible utilidad. Nos topamos frecuentemente con datos agregados y previamente tratados. No es un problema insalvable pero ofrecer los datos brutos es siempre una buena práctica que cualquier guía de apertura de datos recomienda seguir.

En cuanto a la publicación de estos datos encontramos en los formatos bastante variedad en los disponibles para descargar. Los más habituales suelen ser XLSX, CSV, XML y JSON aunque en algunas diputaciones también se incluye TSV. Si los datos están geolocalizados los formatos suelen ser KML, GML, SHP o GeoJSON.

El uso de **datos enlazados** (Linked Data) es todavía poco común. Encontramos datos en formato RDF y sólo  dos diputaciones hacen mención al vocabulario en el que están basados sus conjuntos de datos. En las diputaciones de de Cádiz y Bizkaia usan DCAT como forma de ofrecer sus datos.


## Participación y colaboración

Algo que echamos en falta y es prácticamente inexistente son mecanismos de participación y colaboración como grupos o foros de debate en los propios portales de datos abiertos. Esto permitiría, por un lado, a la administración saber cuales son las principales demandas de datos de los ciudadanos para así liberar esos datasets o si hay algún problema con los ya disponibles y, por otro lado, al interaccionar entre las personas interesadas pueden compartir sus conclusiones tras explorar los datos o aportar nuevas ideas de reutilización. 


## Reutilización

Resulta muy complicado conocer cuales son los ejemplos de reutilización o relevancia de los datos abiertos presentes en estos portales. Del número de descargas podemos inferir el interés suscitado aunque no cual es su finalidad.

Pasamos a enumerar algunos casos en los que la utilización de los datos abiertos de la administración ha reportado beneficios a la sociedad mediante la creación de aplicaciones que usan esa información y favorecen al desarrollo económico: 

- [Lurraldebus](http://www.lurraldebus.eus/es): Una aplicación que suministra información sobre el transporte público de Guipuzkoa. 
- [Moveuskadi](http://www.moveuskadi.euskadi.eus/aa31-home/es/aa27aModuloWar/?locale=es): Gracias a los datos abiertos del gobierno vasco al descargar GoogleMaps puedes tener toda la información de la red de transportes de la Comunidad Autónoma Vasca. 
- [Aquadaia](http://www.aquadaia.com/): Esta empresa ha desarrollado una aplicación de recomendación de riego con la opción de reducir el consumo de agua. Obtiene la mayoría de sus datos abiertos de GDAS ( Global Data Assimilation System).
- [Barcelona és molt més](https://dadesobertes.diba.cat/participa/projectes-opendata/barcelona-es-molt-mes): app de turismo de la Diputación de barcelona.


## A modo de Conclusión

Como cierre proponemos tres puntos que pueden ayudar a cualquier diputación que quiera abrir sus datos o mejorar su portal ya existente: 


### 1. Aprendizajes a partir del estudio realizado

- Aumentar la navegación del portal reduciendo el número de clicks necesarios para llegar hasta el portal creando un enlace en la home. 
- Diferenciar más claramente el origen de los datos.
- Dar más visibilidad a la licencia bajo la que se publican esos datos.


### 2. Pasos básicos para levantar un portal de datos abiertos

Entre los pasos básicos para poner en marcha una estrategia e implantación de datos abiertos están:
1. trazar un plan,
2. crear tu propia política de datos abiertos,
3. tener en cuenta los aspectos legales,
4. trabajar la calidad de los datos,
5. planificar la preparación técnica y ...
6. una evaluación constante para ir corrigiendo desajustes. 


### 3. Recursos disponibles para afianzar nuestro proyecto de datos

- [European Data Portal](https://www.europeandataportal.eu/en/providing-data/goldbook)
- [Norma Técnica de Interoperabilidad de Reutilización de Recursos de Información.](https://datos.gob.es/es/documentacion/norma-tecnica-de-interoperabilidad-de-reutilizacion-de-recursos-de-informacion)

<div class="separator blue short"></div>

<div class="notice">
Si encuentras algún dato erróneo o consideras falta alguna diputación nos encantará saberlo y mejorar este post. Haznos una mención en Twitter o escribe a abre@gobierto.es y lo corregiremos.
</div>




