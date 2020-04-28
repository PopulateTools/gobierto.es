---
title: 'Gobierto Contratos: explorando los contratos de una organización pública'
date: 2018-11-20 00:00:00 +01:00
categories:
- gobierno_abierto
module: contratos
layout: post
subtitle: ''
author: Álvaro Ortiz
main_photo: posts/181119-Gobierto-Scrolly-Cover.png
---

¿Cuántos contratos firma un ayuntamiento? ¿Cuántos proveedores diferentes contratan con una organización? ¿Cuántos contratos tiene un mismo proveedor? ¿De qué importes son los contratos? Después de herramientas de [visualización de presupuesto](/modulos/presupuestos/) y de [facturas](/blog/20180216-mejoras-en-visor-presupuestos.html) de una organización otra pieza interesante es la contratación. Poder explorar los contratos firmados y lo que se deriva de ellos: proveedores, procesos de contratación, tipos de contratos, distribución de importes...

Y esto es lo que nos proponemos con Gobierto Contratos.

## Datos abiertos y contratación pública

Los Perfiles del Contratante ya incluían los contratos mayores, y La Ley de Transparencia ha motivado que las organizaciones publiquen también sus contratos menores. En los portales de transparencia se pueden consultar listados de las contrataciones realizadas, pero en muchas ocasiones nos encontramos con una _transparencia legalista_ (podemos marcar el check de haber publicado el listado de contrataciones) pero no una _transparencia efectiva_ (la información está en un formato limitado que no hace fácil su análisis, exploración y reutilización).

El desarrollo de la Plataforma de Contratación del Estado mejora la situación al centralizar la información de muchas organizaciones públicas. Desde comienzos de este año deben enviar incluso sus contratos menores, aunque todavía no lo están haciendo todas. Pero las posibilidades de reutilización no son óptimas: la información publicada como datos abiertos es parcial.

En Populate nos hemos puesto a extraer (mediante scraping) la información completa con la intención de hacer un explorador y _analizador_ de contratos al estilo de presupuestos.gobierto.es, pero seguimos con dos problemas de base: no todas las organizaciones mandan todos sus contratos, y no están todas las organizaciones - hay comunidades autónomas que tienen sus propias plataformas de contratación, y sus datos todavía no se ven reflejados en la del Estado.

(Europa también tiene su plataforma, pero sobre España los datos también son parciales y en muchos casos, incompletos)

Seguiremos tratando de conseguir todos los datos. Mientras tanto...


## Gobierto Contratos


Gobierto Contratos permite a una organización pública comunicar su información sobre contratación (licitaciones y adjudicaciones) de forma accesible y usable. Gobierto Contratos ofrece:

- visualizaciones y resumen estadístico de la contratación: evolución del número de licitaciones, adjudicaciones, licitantes, adjudicatarios, importes...
- análisis de los datos: distribución de importes, por tipo de proceso de contratación, por tipo de contrato…
- proveedores: análisis y fichas de los proveedores
- explorador de contratos
- conexión con el presupuesto
- descarga de los datos brutos

Además, se ofrece un cuadro de mando interno para los gestores de la organización que les facilite trabajar con su propia información:

- porcentaje de importe contratado durante el ejercicio vs. el presupuesto
- análisis avanzados
- búsqueda rápida de contratos, licitaciones y proveedores

Aquí mostramos algunos diseños preliminares de la herramienta:

{% asset 'posts/181119-Gobierto-Contratos-Inicio-Scrolly.png' itemprop:'img heading' class='Outline Shadow' style:"padding\: 1em; box-sizing\: border-box" %}

{% asset 'posts/181119-Gobierto-Contratos-Proveedor.png' itemprop:'img heading' class='Outline Shadow' style:"padding\: 1em; box-sizing\: border-box" %}

{% asset 'posts/181119-Contratos-DashboardInterno.png' itemprop:'img heading' class='Outline Shadow' style:"padding\: 1em; box-sizing\: border-box" %}

<div class="separator blue short"></div>

## ¿Cómo se pone en marcha Gobierto Contratos?

- Si todos tus contratos ya están en la Plataforma de Contratación del Estado, no tienes que hacer nada. Ya tenemos tus datos. Solo habrá que activar el site y personalizarlo.
- Si estás publicando tus adjudicaciones en tu portal de datos abiertos, nos conectamos y procesamos la información.
- Si tienes la información en un sistema interno, realizamos un proceso de exportación específico.

Gobierto Contratos continua completando la plataforma de Gobierto, materializando el objetivo de ofrecer herramientas de transparencia y participación eficaces y de fácil implementación.

<div class="separator blue short"></div>

Para este proyecto estamos colaborando con Sergio Jiménez, de [Analítica Pública](https://analiticapublica.es/), experto en estrategia digital para administración pública.

<div class="separator blue short"></div>

Relacionado:

- [Visualización de presupuesto y facturas](/modulos/presupuestos/)
- Comparador de presupuestos municipales: [presupuestos.gobierto.es](https://presupuestos.gobierto.es), y la versión de la Generalitat de Catalunya (que en breve tendrá novedades!)
