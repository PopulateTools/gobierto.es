---
title: "¿Cómo informan los ayuntamientos de los servicios que ofrecen?"
subtitle: 'Análisis del diseño de información en webs municipales'
date: 2020-04-08 00:00:00 +02:00
categories:
- experiencia_de_usuario
analysis: true
layout: v2/post
author: Álvaro Ortiz
main_photo: posts/200408-Servicios-Portada.png
---

Los servicios que el ciudadano disfruta de forma concreta, como una instalación deportiva o ayudas a la dependencia (frente a otros pasivos como el alcantarillado o la iluminación) son uno de los principales retos y oportunidades para un municipio: 

- son aquellos que los vecinos usan de forma individual y consciente, donde piden y reciben
- muchas veces requieren de interacciones con la organización
- en su percepción de satisfacción influye, además del disfrute del propio servicio, el camino del ciudadano para hacerlo. 

**¿Cuáles son los elementos principales en este camino de uso de los servicios?**

- **información**: cómo me entero de que mi ayuntamiento ofrece un determinado servicio; cómo amplío información de un servicio
- **trámite**: qué pasos debo seguir para poder utilizarlo
- **uso**: el propio uso del servicio
- **renovación**: uso continuado, renovaciones

En este post analizamos algunas cuestiones formales relativas al primer punto: nos preguntarnos **cómo los ayuntamientos cuentan a sus vecinos los servicios que ofrecen, cómo los organizan, explican**, y permiten hacer usos iniciales y continuados (renovaciones, repetición de un servicio que ya he utilizado). En otras palabras, como los municipios hacen su diseño de información.

Nos centramos en el canal web, asumiendo que el diseño de información desarrollado en este canal puede tener un reflejo natural y servir de base a la explotación de esta información en otros canales (telefónico, presencial, o especialmente un sistema de información que alimente a todos los canales). 

Este análisis se enmarca en un proyecto que estamos haciendo para un municipio consistente en conceptualizar un catálogo de servicios: desde la visión interna que ayude a la organización a homogeneizar la información e indicadores hasta el diseño del catálogo de cara al ciudadano, finalizando con la implementación de la herramienta para gestionarlo en Gobierto. Pronto noticias. 


## 1. Navegación principal: literales, organización contenido

¿Cómo estructuran la navegación principal las webs de los ayuntamientos? ¿Cuáles son las características principales? ¿Qué literales son los más usados? ¿Cuáles son los literales más apropiados?

Para realizar este estudio hemos analizado la página principal de las webs de los [cien ayuntamientos de mayor tamaño en España](https://presupuestos.gobierto.es/ranking/2019/I/economic/population), y hemos revisado los elementos que conforman el menú de navegación principal.  

<div class="blockquote_light">
Aunque la búsqueda, ya sea interna o través de buscadores externos, es una pieza importante en el acceso a un contenido, en el caso de los municipios consideramos que la navegación principal continua siendo un elemento relevante en el descubrimiento de los contenidos, dada la importancia de la "marca", y la relativa ausencia de competencia en la provisión de muchos de los servicios.
</div>

{% asset 'posts/200408-Servicios-TopTerminos.png' class='Outline Shadow caption' style='display: block; max-width: 550px; margin: auto;' title="Términos más utilizados en los menús de navegación principales" %}

Este análisis nos da una imagen de cuáles son los temas que los gestores de las webs consideran prioritarios.

- **Funcionamiento de la institucion**: Es lógico pensar que el funcionamiento de la organización debe ser uno de los contenidos principales pero, ¿**es lo que más interesa al ciudadano en su día a día**? Antes de las cuestiones corportivas probablemente hay otros aspectos que afectan más directamente al día a día de las personas.
- **Trámites y servicios**: El 70% de los analizados colocan la sede electrónica como elemento principal, sin embargo solo un 30% enlazan a los servicios que el ayuntamiento ofrece. Esto tiene una doble lectura: 
  - En muchos casos los servicios se explican a través de sus trámites: dependiendo del caso es suficiente. En otras ocasiones el enfoque es excesivamente técnico y consideramos que el mero trámite no explica suficientemente bien el servicio que se ofrece. Consideramos también que es una oportunidad perdida para que los ayuntamientos hagan gala de su oferta de servicios. Algunos trámites (pago de impuestos, por ejemplo) no requieren mucha explicación, pero no es el caso de todos (ej. servicios sociales).
  - Otras organizaciones hacen un esfuerzo en explicar primero la cartera de servicios y después contar como se consumen (tramiten).
- **Transparencia**: Este item ha emergido en los últimos años y todavía seguirá aumentando. En Gobierto somos de la opinión de que no hay que tener una web de transparencia, si no que una web debe ser transparente: se debe incluir toda la información necesaria de forma organizada y clara. Los rankings de transparencia (que son los que en ocasiones condicionan la estructura de las webs o secciones de transparencia) deben ser una guía pero en ningún caso marcar la arquitectura de información de una web, ya que los criterios del evaluador no coinciden con los del ciudadano. 
- **Turismo, promoción**: La importancia del turismo o la promoción económica son variables dependiendo de las ciudades, por lo que vemos natural que algunas ciudades lo destaquen de forma particular. 


## 2. Página principal 

¿Cómo se distribuye el espacio en la página principal de las webs? ¿Qué temas están presentes, y cuánto espacio se dedica a cada uno? Hemos analizado una selección de sites y hemos agrupado los temas según su frecuencia: 

{% asset 'posts/200408-Servicios-Homes.png' class='Outline Bigger Shadow caption' title="" %}

En casi todos los casos los temas que se seleccionan para la _home_ son los siguientes:

- Navegación
- Actualidad
- Temas
- Trámites y servicios
- Accesos directos
- Transparencia / Participación

De cara a analizar lo apropiado de estos contenidos para los ciudadanos, y teniendo en cuenta sus necesidades más comunes (capítulo que habría que tratar de forma específica), nos preguntamos cual es la relación entre el interés Ayuntamiento-Ciudadano y la alta-baja presencia de los elementos habituales: 

{% asset 'posts/200408-Servicios-RelacionPresencia.png' class='Outline Shadow caption' title="" %}

Esta interpretación puede resultar controvertida. No buscamos establecer una conclusión universal (sobre todo porque la muestra es muy pequeña), si no despertar algunas reflexiones respecto al contenido de la home: ¿qué es lo más importante para nuestros usuarios? ¿Coincide con nuestras necesidades? ¿Lo estamos midiendo, preguntando? Una comprobación rápida es cruzar las consultas en el buscador interno y el ranking de visitas a las distintas secciones y páginas. 


## 3. Arquitectura de la información: Situación de los servicios y trámites dentro de la estructura de información de la web

¿Cómo encaja la oferta de servicios en la estructura general de la web? ¿Qué camino debo recorrer para acceder? ¿Los servicios se cuentan de forma homogenea entre departamentos? ¿Hay una estructura de información coherente? ¿Puedo entender de un vistazo todos los servicios que se ofrecen? ¿Qué criterios se siguen para clasificar un servicio? ¿Se clasifican los servicios según el perfil, necesidad, naturaleza...?

La base para guiar las decisiones de diseño (qué poner, dónde ponerlo, óomo organizarlo, cómo contarlo) es que **el ciudadano necesita entender qué le ofrece su ayuntamiento y cómo lo puede "consumir"**. Algunos elementos básicos a tener en cuenta: 

### Visión de conjunto, destino claro y único

Cuando una persona necesita buscar algo concreto es necesario tenerlo enmarcado en un catálogo que permita la exploración. Es necesario un punto de partida que el usuario pueda identificar como el inicio de su camino en el descubrimiento. En este sentido, la dicotomía presente en algunos municipios de Servicios y Trámites puede generar confusión.

### Clasificación

¿Qué criterios se siguen para clasificar los servicios? Hay una tendencia natural en las organizaciones a reflejar las estructuras internas hacia el exterior. Pero esto a veces no funciona porque las estructuras internas no coinciden con el modelo mental del usuario. Hay que preguntarse como entiende un ciudadano 

Es recomendable crear un sistema de taxonomías que clasifique los servicios en varias dimensiones. Las básicas, que además no suponen apenas complejidad en su definición, podrían ser las siguientes: 

- Destinatario
- Necesidad
- Tema

### Ejemplos 

Hemos seleccionado algunos ejemplos para ilustrar algunas de estas ideas: 

{% asset 'posts/200408-ejemplos-santander-1.png' class='Outline Shadow caption' title="" %} {% asset 'posts/200408-ejemplos-santander-2.png' class='Outline Shadow caption' title="" %} El [Ayuntamiento de Santander](https://santander.es) tiene un punto de destino único para los servicios y permite explorarlos de acuerdo a distintos criterios. Una vez que accedes a la sección puedes explorar destacados, destinatarios, trámites... 

{% asset 'posts/200408-ejemplos-vitoria-1.png' class='Outline Shadow caption' title="" %} El [Ayuntamiento de Vitoria-Gasteiz](https://www.vitoria-gasteiz.org/) propone una solución muy efectiva por compacta: un menú desplegable que directamente te muestra los destinatarios. Si sabes de antemano el trámite, también puedes acceder. Esta solución permite mucha agilidad, ya que no tienes que cargar una página para ver las opciones. 

{% asset 'posts/200408-ejemplos-santfeliu-1.png' class='Outline Shadow caption' title="" %} En el caso de [Sant Feliu de Llobregat](https://www.santfeliu.cat/) hay una solución sobria pero efectiva: también un desplegable con los temas principales y acceso a un directorio de todos los servicios. 

{% asset 'posts/200408-ejemplos-valladolid-1.png' class='Outline Shadow caption' title="" %} [El Ayuntamiento de Valladolid](https://www.valladolid.gob.es/) mezcla trámites y servicios pero presenta una clasificación por temas, perfiles y hechos vitales que consideramos que facilita mucho la exploración e identificación de la necesidad. 


## 4. Explicación de un servicio

Una vez que accedo a un servicio


### Servicio vs. Servicios de un Servicio-Departamento


### Información

Ideal 

vs. 

realidad: breve introducción al área, poco detalle, falta de enlaces...
Mapa de servicios, servicios relacionados


### Coherencia

- Homogeneización -> dependiendo del departamento, necesario tener una guía y unos estándares
¿Los servicios se cuentan de forma homogenea entre departamentos? ¿Hay una estructura de información coherente? 


### Ya se lo que quiero, ¿cómo lo consigo?

Cómo utilizar/tramitar un servicio




## Conclusiones



Lista de comprobación para explicar tus servicios al ciudadano

- [ ] Destino único donde tener una visión completa de todos los servicios
- [ ] Organización de los servicios por destinatario, necesidad y tema
- [ ] Ficha del servicio: 
  - Información: Qué es, qué ofrece, a quién va dirigido, requerimientos, servicios relacionados
  - Cómo tramitarlo
  - Cómo ampliar información


