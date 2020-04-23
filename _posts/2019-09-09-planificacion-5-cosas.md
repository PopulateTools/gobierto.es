---
title: "5 cosas que puedes hacer con Gobierto Planificación"
subtitle: 'Formas de personalizar la herramienta para gestionar y publicar tus planes como necesites'
date: 2019-09-09 00:00:00 +02:00
categories:
- gobierno_abierto
module: planificacion
layout: post
author: "Álvaro Ortiz"
main_photo: posts/190909-Cover.png
---

Durante los últimos meses hemos introducido varias mejoras en la herramienta de gestión  y publicación de planes de Gobierto: Gobierto Planificación. Algunas de ellas:

## 1. Campos personalizados: personaliza la estructura de la información de tus proyectos

En cada organización, o incluso dependiendo del plan que estés gestionando, vas a necesitar contar cosas diferentes. Con los campos personalizados puedes definir la estructura información que necesites. Puedes añadir campos de texto, texto largo, numéricos, fecha, imágenes, galerías...

{% asset 'posts/190909-1-campos-personalizados'  %}


## 2. Vocabularios: gestiona tus categorías

Hay listados de categorías que se utilizan a lo largo de distintos proyectos, planes, o incluso de distintos módulos de Gobierto. En el caso de los proyectos de un plan el vocabulario por excelencia son las categorías, que dan la estructura jerárquica principal.

Los estados de un proyecto también son configurables con un vocabulario de modo que puedes compartir los estados para distintos planes o tener ciertos planes con estados diferentes.

Además, puedes tener otros tipos de categorías. Si eres una Diputación, puedes querer tener a mano la lista de tus municipios o agrupaciones para especificar qué proyectos afectan a qué municipios.

{% asset 'posts/190909-2-vocabularios' %}

## 3. Versiones: historial de revisiones y publicación

Cada edición de un proyecto genera una versión del mismo, por lo que tienes un histórico de todos los cambios realizados. Además, puedes especificar qué versión quieres que sea la versión publicada. Esto te permite tener una versión de tu plan publicada, e ir trabajando en las novedades directamente en Gobierto, hacer todas las ediciones que necesites, y publicar la nueva versión cuando esté lista.

{% asset 'posts/190909-3-versiones' %}


## 4. Trabaja en grupo: roles de usuario y flujo de moderación

Gobierto permite definir roles de usuario para dar acceso a diferentes usuarios a distintas partes de la herramienta. En el caso de planes, puedes tener un grupo de usuarios encargados de la configuración y estructura del plan, y usuarios que puedan crear y editar sus proyectos.

En el caso de proyectos, un usuario con acceso a un proyecto puede invitar a otros usuarios a editar ese proyecto.

Por otro lado, el flujo de moderación te permite crear de forma colaborativa tu plan:los usuarios envían proyectos y un equipo de moderadores puede integrar estos proyectos en el plan.

{% asset 'posts/190909-4-moderacion' %}


## 5. Indicadores

Además de poder disponer de campos numéricos en un proyecto, en ocasiones se necesita poder asociar distintos indicadores que pueden estar compuestos, por ejemplo, de un nombre de indicador, valor objetivo, valor alcanzado y periodo.

Con Gobierto es trivial definir la estructura de indicadores que deseas registrar.

{% asset 'posts/190909-5-indicadores' %}


## 6. Plugins

Los indicadores que acabamos de describir se implementan a través de plugins, un tipo de campo personalizado. Se puede implementar un plugin que haga cualquier cosa... Por ejemplo, para un cliente acabamos de implementar un plugin **Presupuesto** que permite asociar a un proyecto una o varias partidas presupuestarias, indicando el % de cada una que se adscribe al proyecto en cuestión.

(en este caso, el origen del dato es Gobierto Presupuestos, pero se podría leer cualquier fuente mediante API Rest)

{% asset 'posts/190909-6-plugins' %}


## Bola extra: API

En el contexto de un otro estamos por fin desarrollando una API para poder leer y escribir información a cualquier recurso de Gobierto. Esto permitirá hacer integraciones más sofisticadas con otros sistemas y facilitar nuestros procesos de ETL en los caso en los que tenemos que cargar datos de fuentes externas.


<div class="separator blue short"></div>

En Gobierto:

* [Rendición de cuentas mediante planes de actuación: análisis de iniciativas municipales](/blog/20190610-analisis-rendicion-cuentas.html)
* [Planificación y Rendición de Cuentas: el caso de Esplugues de Llobregat](/blog/20190510-visualizacion-planes.html)
