---
title: Software libre en la administración pública
date: 2018-10-25 00:00:00 +02:00
categories:
- gobierno_abierto
- analisis
layout: post
subtitle: Uno de esos debates a los que se vuelve regularlmente, pero a los que hay
  que volver, hasta que lo consigamos
author: Álvaro Ortiz
main_photo: posts/161006-novagob-nagore.jpg
---

Este año no asistimos a Novagob, tenemos que optimizar nuestro tiempo y decidimos quedarnos trabajando.

Pero si que estamos pendientes de la conversación. Hemos podido [leer este tweet](https://twitter.com/ffranrojas/status/1055384541123264512) donde se cuenta que ha habido un empate entre el debate de software libre vs. software propietario. Y claro, eso del empate nos ha chirriado mucho.

Obviamente tenemos nuestro sesgo porque nosotros ya estamos haciendo software abierto para administraciones, pero aún así trataremos de dejar algunos argumentos al respecto (y supongo que quién opinaba en Novagob a favor del software propietario tendría el suyo).

Ya hay muchos posts donde se pueden leer razones por las que una administración pública debería producir [software libre](/open-source/).

Nosotros vamos más allá: pensamos que debería ser obligatorio que el software generado por una administración pública sea abierto. Y estamos convencidos de que así será dentro de unos años, tal vez décadas.

Y que veremos con mucha extrañeza que existiese una época en la que estaba permitido que se pueda gastar dinero en software propietario. ¿Por qué?

## Derecho

Este punto justifica por si mismo que el software pagado por la administración sea libre: si existe la opción de que sea abierto o cerrado, y nos puede costar lo mismo (cuando no menos), los ciudadanos deberíamos poder acceder al código fuente porque está pagado con nuestro dinero.


## Calidad y seguridad

Cuando el código es abierto (está publicado, es accesible, está documentado) se puede mirar. No digo que automáticamente haya miles de ojos escrutando cada linea y programa, no es realista pensar que ocurrirá. Pero el mero hecho de la posibilidad de que ocurra subirá el estándar de calidad porque los programadores o sus jefes no se atreverán a dejar ver ciertas cosas que se hacen.


## Lock-in

Una vez que has comenzado a usar el software cerrado de un proveedor, que controlan ellos y no tu, cambiar es muy caro. Esto hace subir el precio del software y del mantenimiento y evolución: o cambiar es muy caro, o porque es tan caro cambiar el proveedor no se cambia y el proveedor comienza a abusar de su posición.

Esto lo hemos vivido en primera persona: uno de los Ayuntamientos que usan Gobierto ha tenido que pagar miles de euros para que su proveedor propietario desarrolle una funcionalidad para exponer datos bastante básicos. Además del coste absurdo (explotar los datos de tu propio sistema debería ser un por defecto de cualquier sistema) el proveedor lo ha hecho mal (un problema de enconding en un fichero CSV a estas alturas del campeonato)

Una anécdota no es una estadística, pero seguro que te has encontrado casos similares.


## Eficiencia

Miles de entes públicos necesitan usar decenas de programas. Con una obligación de usar y generar software libre y la emergencia de proyectos con una gobernanza abierta y distribuida la colaboración entre administraciones aumentaría drásticamente. Decidim, el software de participación promovido por el Ayuntamiento de Barcelona y usado (usado realmente, más allá de una nota de prensa) por decenas de administraciones es un buen ejemplo ([lee más aquí sobre cómo se organiza el desarrollo de Decidim](/blog/20180123-decidim-diseno-populate.html)).

[Existen iniciativas](https://administracionelectronica.gob.es/pae_Home/pae_SolucionesCTT/pae_CTT_-__Que_es_.html#.W9HD9VJ9jUI) para promover la reutilización, pero esta reutilización aumentaría significativamente si hubiese obligación de tener código libre.

<div class="separator blue short"></div>

Como veis no he esgrimido el argumento de la gratuidad o el abaratamiento. El que el software sea libre no quiere decir que sea gratis: hay costes de implantación, formación, mantenimiento. Pero si reducimos el lock-in aumentando la competencia, y se genera eficiencia porque las administraciones comparten código, la calidad mejorará y el coste bajará. Ganamos en varios vectores. No tiene sentido hacerlo de otra forma.

**Además de que es un derecho (o al menos, debería serlo)**.

<div class="separator blue short"></div>

Si piensas que el software de la administración debería ser libre puedes unirte a la [iniciativa Public Money, Public Code](https://publiccode.eu/es/) que persigue legislación a nivel europero para que así sea.
