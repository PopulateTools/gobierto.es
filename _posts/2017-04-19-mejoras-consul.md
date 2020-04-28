---
title: Mejorando Consul, el software de participación creado por el Ayuntamiento de
  Madrid
date: 2017-04-19 10:00:00 +02:00
categories:
- clientes
- participacion
client: Ayuntamiento de Madrid
layout: post
subtitle: 'Colaboración entre administraciones y sector privado: haciendo más eficiente
  el uso de los recursos'
author: Álvaro Ortiz
main_photo_big: posts/170419-consul-github.jpg
---

Además de nuestra contribución con el [nuevo módulo de Legislación Colaborativa para el Ayuntamiento de Madrid](http://gobierto.es/blog/20170113-populate-ayuntamiento-madrid.html), últimamente hemos aportado otras mejoras a Consul dentro de nuestro proyecto con la Diputación de Valencia.

En el caso de la Diputación teníamos un caso de uso claro: el que municipios pequeños pudiesen tener su sitio de participación sin involucración de personal técnico para ponerlos en marcha. Esto nos llevó a definir esta serie de mejoras, que ahora estarán disponibles de forma abierta:

- Personalizar los logos del site a través del interfaz del administrador
- Crear un pequeño gestor de páginas para poder actualizar a través del interfaz de administración el acerca de, la política de privacidad, etc.
- Permitir la edición de bloques de HTML/CSS en la cabecera y pié

## Instalador de _Consules_

La otra mejora es externa a Consul y es un proyecto en si mismo: un instalador de _Consules_. Una de las tareas de la Diputación es dar servicio a municipios pequeños. En este caso les proporcionan herramientas de gobierto abierto, como **Gobierto** para el [portal de altos cargos y agendas](https://gobierto.es/blog/20161215-diputacion-de-valencia-gobierto.html), y Consul. En el caso de Gobierto el dar servicio a múltiples municipios con una única instalación del software es trivial ya que es un software _multitenant_.

Consul todavía no es _multitenant_, por lo que la opción actual para dar servicio a múltiples entidades es instalar un Consul por cada municipio que quiera utilizarlo. Así que nos lanzamos a crear un software que instalase _Consules_ con el objetivo de que una persona no técnica pueda instalar un nuevo Consul sin la  necesidad de la ayuda de un programador.

Esto ha ido acompañado de las mejoras que os contamos arriba, y de una plantilla con un diseño personalizado para la Diputación y sus municipios.

Al igual que todo el código en torno a estos proyectos con la Diputación de Valencia, el instalador será liberado un poco más adelante (una vez este adecentado); y escribiremos un post técnico contando nuestra experiencia.

Si necesitas poner en marcha un conjunto de _Consules_ [dános un toque](mailto:lets@populate.tools).

## Eficiencia en el sector público mediante la colaboración entre administraciones

Una de las razones de ser de Populate es contribuir con nuestro pequeño granito de arena a que las administraciones hagan un uso más eficiente de sus recursos, del dinero de todos. Y en este proyecto hemos podido aunar muchas de las cosas que nos preocupan e interesan:

- herramientas de participación
- definición de producto digital
- software libre y reutilización de código

Este es un ejemplo perfecto de como crear software libre (lo que debería ser un estándar en la mayoría de los casos en administraciones públicas) genera beneficios inmediatos gracias a la reutilización y la contribución de  distintas administraciones y empresas privadas.

Con nuestra plataforma de gobierto abierto, **Gobierto**, también estamos consiguiendo lo mismo: distintas organizaciones van financiando mejoras que son aprovechadas por otras, creando un círculo virtuoso que ahorra costes a todos. Una licencia libre del software asegura que este círculo siga en marcha y se amplíe.

Puedes seguir la evolución del desarrollo del código de [Gobierto](http://github.com/populatetools/gobierto/) y [Consul](https://github.com/consul/consul/) en Github.
