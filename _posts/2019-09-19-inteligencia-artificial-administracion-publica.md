---
title: "Inteligencia Artificial en la administración pública: casos de uso"
subtitle: 'Un repaso a varios casos reales'
date: 2019-09-20 00:00:00 +02:00
categories:
- tecnologia
- datos_abiertos
layout: post
author: Fernando Blat
main_photo: posts/190919-machine-learning.jpg
---

Dentro de la Inteligencia Artificial (IA) hay una rama que está cogiendo mucha tracción, a veces más por simples menciones que por casos de uso válidos que nos muestren su potencial: el aprendizaje automático (_machine learning_ o _ML_).

El _machine learning_ combina estadística, ordenadores y datos. Permite plantear un modelo matemático (un programa de software) capaz de resolver un problema aprendiendo a base de ejemplos (datos) de forma iterativa, de forma supervisada o automática.

La administración pública supone un buen contexto para desarrollar algunas soluciones con aprendizaje automático por diversas razones:

- Se generan muchos datos, lo que es muy interesante para realizar los primeros entrenamientos e ir afinando
- Todavía existen ciertas tareas muy manuales que requieren de mucho tiempo y recursos y que podrían ser automatizadas total o parcialmente para hacer la administración más efectiva
- Existen muchas soluciones de software libre que hacen el acceso a esta tecnología mucho más asequible
- La mejora en las prestaciones de los ordenadores permite ejecutar estos programas en plataformas muy económicas, incluso en la nube

## Qué puede y no puede hacer la inteligencia artificial

Seguro que has leído mucho sobre la revolución que supone la IA, pero te vamos a hacer un breve resumen de en qué casos tiene sentido pensar en esta tecnología para resolver problemas.

### Buena para

1. Detectar tendencias y correlaciones en grandes cantidades de datos, lo que permite predecir valores
2. Aprender un conjunto elevado de reglas de forma automática, como por ejemplo analizar el lenguaje o detectar el tema de un texto
3. Detectar patrones en imágenes, como objetos o reconocer la escritura
4. Realizar simulaciones ajustando diferentes parámetros y prediciendo las consecuencias

### No tan buena para

1. Resolver problemas de diversos ámbitos, por ejemplo reconocer caracteres manuscritos y realizar una simulación
2. Casos en los que no haya muchos datos o los datos no sean representativos
3. Inferir conocimiento que no esté presente en los datos

## Qué puede hacer en la administración

Buscando un enfoque práctico y realista del tema, hemos recopilado una lista de ejemplos de uso en administraciones.

### Predicciones

{% asset 'posts/190920-firebird.jpg' class='Outline Shadow caption' %}

La IA uede detectar patrones en conjuntos de datos que serían muy difíciles de procesar por un humano, ya que es capaz de detectar correlaciones entre diferentes variables entre sí en base a eventos ocurridos en el pasado. En Atlanta (Estados Unidos), un equipo formado por investigadores de la Universidad de Emory y el departamento de bomberos, creó [Firebird](http://firebird.gatech.edu/), un software de predicción de riesgo de incendios en los edificios de la ciudad.

Para ello codificaron los datos de incendios ocurridos en el pasado junto con otras muchas características de los edificios, como ubicación, año de construcción, materiales, revisiones, reformas u obras de actualización. Con toda esa información lograron entrenar un modelo que ha sido capaz de predecir futuros incendios con una precisión del 73%.


### Chatbots y asistentes del diálogo

Los asistentes conversacionales (_chatbots_) permiten interactuar de forma hablada o textual con una persona. Generalmente están compuestos por diferentes componentes:

- transcripción: si el sistema se usa por voz, se transcribe el audio a texto
- análisis: se analiza el texto y se extraen dos cosas: las entidades nombradas y la intención del usuario. Por ejemplo en la frase: "Me gustaría saber hasta cuándo puedo pagar el impuesto de circulación" un análisis del texto determinaría que la intención es informarte sobre los plazos de pago y que la entidad es el impuesto de circulación.
- contexto: se tiene en cuenta la conversación hasta ahora para aportar contexto
- sistema de información: una vez determinada la intención y la acción, el sistema es capaz de encontrar la información solicitada en el sistema de información de la administración
- generación del lenguaje: dicha información se comunica al usuario mediante una sentencia en lenguaje natural, lo más humana posible
- evaluación: para continuar entrenando al asistente, se solicita al usuario que evalúe la conversación, y si fue satisfactoria se reutiliza como base de aprendizaje.

Hay varios ejemplos de _chatbots_ puestos en marcha por administraciones de España:

1. [LOLA](https://docs.google.com/document/d/1EAWyUqTdgYAAczIFjgFOWvWKUt0xQhJheU-3wYqdSw8/edit) es un chatbot elaborado por la Universidad de Murcia para atender consultas de estudiantes
2. [Victoria](https://www.diariosur.es/malaga-capital/victoria-habla-malaga-20180824201349-nt.html) es un robot creado por el Ayuntamiento de Málaga


### Generación de contenido web más accesible

El GDS británico (la agencia de gobierno digital) ha utilizado [análisis del lenguaje y modelos de clasificación](https://www.gov.uk/government/case-studies/how-gds-used-machine-learning-to-make-govuk-more-accessible) para analizar más de 100.000 páginas de contenido y clasificarlas automáticamente. El proceso consistió primero en definir la nueva taxonomía de categorías y temas de la web, y entrenar un clasificador que a partir del contenido de la página la asigne en la categoría correspondiente.


## En el futuro cercano

Desde Gobierto estamos seguros que poco a poco iremos viendo cada vez más proyectos donde se apliquen técnicas de aprendizaje automático en problemas existentes, por eso creemos que poco a poco irán apareciendo más iniciativas como la [Oficina para la Inteligencia Artificial](https://www.gov.uk/government/organisations/office-for-artificial-intelligence) del gobierno británico. Esta popularización de la IA debería de ir acompañada de varios debates y esfuerzos paralelos, como la mejor reutilización de datos (materia prima de la IA) o una reflexión sobre la ética y la privacidad, que garanticen el respeto de los ciudadanos.


<small>Foto de Chris Liverani, en [Unsplash](https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</small>

<div class="separator blue short"></div>

En Gobierto:

* [Ética y datos en la administración pública](/blog/20190918-etica-y-datos.html)
* [Consolidando la experiencia de usuario online de las administraciones públicas](https://gobierto.es/blog/20170615-patrones-y-estandares-en-la-administracion.html)
