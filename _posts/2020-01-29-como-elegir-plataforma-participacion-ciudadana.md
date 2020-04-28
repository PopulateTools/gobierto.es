---
title: "Herramientas de participación ciudadana: análisis y comparativa"
subtitle: 'Análisis del software open source de participación: Consul, Decidim, Gobierto'
date: 2020-01-29 00:00:00 +02:00
categories:
- participacion
- analisis
module: participacion
layout: post
author: Pedro Álvarez
main_photo: posts/200129-consul_decidim.jpg
---

Cuando tienes que poner en marcha una plataforma online de participación ciudadana surgen algunas preguntas iniciales: **¿qué plataforma elegir?, ¿cómo saber cuál es la más adecuada para mis necesidades?, ¿servirá para procesos de participación en el futuro?** Con esta guía pretendemos ayudar a quién se hace estas preguntas, analizando las opciones más usadas en España en los últimos años, de las basadas en **software de código abierto**.

En esta guía hablaremos de: 

<ol class="toc-list ">

  <li class="toc-list-item"><a href="#cómo-elegir-una-plataforma-adecuada-para-mi-organización" class="toc-link node-name--H2 ">Cómo elegir una plataforma adecuada para mi organización</a></li>

  <li class="toc-list-item"><a href="#tipos-de-proceso" class="toc-link node-name--H2 ">Tipos de proceso</a></li>
  
  <li class="toc-list-item"><a href="#personalización-de-los-procesos" class="toc-link node-name--H2 ">Personalización de los procesos</a></li>

  <li class="toc-list-item"><a href="#herramientas" class="toc-link node-name--H2 ">Herramientas</a></li>
  
  <li class="toc-list-item"><a href="#integración-con-sistemas-de-información" class="toc-link node-name--H2 ">Integración con sistemas de información</a></li>
  
  <li class="toc-list-item"><a href="#desarrollos-ad-hoc-y-evolución-de-nuestra-plataforma" class="toc-link node-name--H2 ">Desarrollos ad hoc y evolución de nuestra plataforma</a></li>
  
  <li class="toc-list-item"><a href="#out-of-the-box" class="toc-link node-name--H2 ">Out-of-the-box</a></li>
  
  <li class="toc-list-item"><a href="#entonces-cuál-elijo" class="toc-link node-name--H2 ">Entonces, ¿cuál elijo?</a></li>
  
</ol>



## Cómo elegir una plataforma adecuada para mi organización

Nos hemos centrado en tres proyectos consolidados hoy en día en el ámbito de la participación ciudadana: CONSUL, Decidim y Gobierto. El análisis pretende afrontar la toma de decisión ─seleccionar la plataforma adecuada─ a partir de la revisión de estos tres proyectos así como de algunas de sus implantaciones más conocidas.

Antes de empezar sería bueno preguntarnos:

1. ¿qué tipos de procesos quiero impulsar?
2. ¿cual es el resultado esperado?
3. ¿dispongo de los recursos para llevar a cabo el proyecto de puesta en marcha?
4. ¿cómo será el equipo que gestione el proceso?

Para la elaboración de esta guía se han definido unos criterios a partir de la **experiencia, de la exploración y análisis de diversos proyectos de participación**. Estos criterios se han definido teniendo en cuenta el punto de vista del responsable de participación que debe tomar la decisión o elaborar la propuesta para su organización.


|**Tipos de procesos** | presupuestos participativos, consultas, votaciones, legislación colaborativa, planes, ... |
|**Personalización** | Identidad corporativa, configuración de procesos, estructura organizativa|
|**Herramientas** | newsletter, dashboard de propuestas, backend de funcionarios, comunidad|
|**Integraciones** | Censos, pol.is, rendición de cuentas,|
|**Out of the box** |Multilenguaje, accesibilidad, API|


**Tanto CONSUL como Decidim han tenido un desarrollo muy marcado por los dos ayuntamientos impulsores** de sendos proyectos de software libre. Y aunque en un principio compartieron un mismo código enseguida se consolidaron como dos iniciativas diferenciadas. Esto ha tenido como resultado una evolución en paralelo con marcadas diferencias, muchas de ellas relacionadas con modelos de participación dispares.

Si por un lado Decide Madrid se ha caracterizado por impulsar una participación sin mediación y a los mayores niveles de escala posibles, Decidim Barcelona ha apostado más por mantener espacios presenciales en consonancia con la plataforma, planteando procesos híbridos, permitiendo participar en una asamblea de forma presencial y al mismo tiempo desde la plataforma.


## Tipos de proceso

Una vez hemos elaborado una mínima estrategia de la participación para nuestra organización llega el momento de establecer cuales son los mecanismos a través de los cuales la ciudadanía podrá intervenir en las políticas públicas.

En casi todas las plataformas de participación analizadas encontramos las mismas herramientas o funcionalidades; en ocasiones denominadas de forma diferente. Aunque existen otras más específicas, nos vamos a centrar en los siguientes a la hora de continuar con este análisis:

- **debates**, permite abrir debates, comentarlos y valorarlos
- **iniciativas ciudadanas**, propuestas ciudadanas aceptadas de forma vinculante
- **consultas**, recepción de aportaciones sobre un tema de forma no vinculante
- **presupuestos participativos**, ofrece la posibilidad de enviar proyectos de gasto
- **votaciones**, permite elegir entre varias opciones a propuesta de la institución
- **legislación colaborativa**, edición o anotación de textos y normas

Tal y como se ha producido el proceso de desarrollo de CONSUL, Decidim y Gobierto encontramos significativas diferencias que a continuación pasamos a detallar.


### Debates

Todas las plataformas pueden permitir debates. Si bien existen algunas diferencias.

Mientras que en CONSUL existe un componente de debate en el nivel principal, tanto en Decidim como Gobierto los debates son componentes para enriquecer cada proceso.

{% asset 'posts/200129-consul_decidim_1.jpg' class='Outline Shadow caption' title="Ejemplo de visualizacion de la deliberación mediante hilos en un debate" %}

Incluir la posibilidad de debates mediante hilos ha permitido tener una deliberación más rica. Cómo se refleja en el trabajo de Pablo Aragón [Characterizing Online Participation in Civic Technologies](https://elaragon.files.wordpress.com/2019/11/phd_thesis.pdf) la posibilidad de introducir hilos en los debates facilita que se mantengan deliberaciones más profundas y no sean tan lineales.


### Iniciativas ciudadanas

Las iniciativas ciudadanas son un mecanismo de democracia directa esencial si queremos abrir nuestra institución a la participación bottom-up (de abajo a arriba). Se trata de propuestas realizadas por la ciudadanía que han de superar un umbral de apoyos para tomarse en consideración. Recientemente recordábamos en Twitter el informe **¿Firmar para influir en política?** presentado en la XIX Conferencia Internacional de la OIDP de 2019. En este informe se pueden descubrir las referencias internacionales más relevantes en cuanto a las iniciativas ciudadanas refieres.

Los tres sistemas disponen de la capacidad de recoger firmas presencial o digitalmente. 

{% asset 'posts/200129-consul_decidim_2.png' class='Outline Shadow caption' title="Iniciativa "Calle de Elisa Moragas " activa en decidim.barcelona" %}

Las iniciativas ciudadanas deben alcanzar un umbral para poder ser aceptadas o pasar a un siguiente estado o fase. Este umbral es configurable tanto en CONSUL como Decidim, e incluso ambas plataformas permiten ajustar el nivel de apoyos necesario para bloquear la edición por parte del proponente.


### Consultas

Las consultas como tal no existen en CONSUL, si bien es posible encontrar un funcionamiento semejante dentro del componente __Procesos__. Esta opción permite llevar a cabo procesos segmentados en fases de debate, propuestas o comentarios a un documento (más adelante hablaremos de esta funcionalidad en el apartado de legislación colaborativa).

El mecanismo de consultas de Decidim es el más sofisticado. Dentro de una consulta se puede disponer diferentes mecanismos de participación (debates, encuestas, propuestas, votaciones) e incluso otros elementos para mejorar el proceso participativo (páginas, blog, resultados).


### Presupuestos participativos

Las tres plataformas han servido de soporte para llevar a cabo procesos de presupuestos participativos.  Si bien han sido muy distintos los enfoques.

Este es el componente más maduro de CONSUL o al menos el que más ha servido para su extensión. Ha sido probado en diferentes contextos y permite dar cobertura a todo el proceso de presupuestos participativos desde la propuesta, el filtrado colaborativo, la evaluación por técnicos de la institución y la votación final. 

Para este último paso implementa el sistema de carrito de la compra. Con este mecanismo el ciudadano debe seleccionar aquellos proyectos que alcancen el presupuesto total asignado en esa edición de presupuestos participativos, pudiendo "llenar" dicha cesta con los proyectos de gasto que más le interese siempre y cuando no supere el límite establecido.

En Decidim los presupuestos participativos funcionan de una forma similar a las propuestas. Actualmente no disponen de unos mecanismos específicos para la evaluación de los proyectos de gasto. Sin embargo en los próximos desarrollos previstos está la evolución y mejora de este componente.

{% asset 'posts/200129-consul_decidim_3.png' class='Outline Shadow caption' title="Resultado de los presupuestos participativos de Madrid en 2019" %}

A diferencia de CONSUL o Decidim, Gobierto cuenta con la posibilidad de abrir la participación ciudadana al proyecto de presupuestos de la institución. Es un enfoque distinto pensado para obtener la valoración de partidas (o grupos de partidas) por parte de vecinos y vecinas.


### Votaciones

Las votaciones son el máximo exponente de la democracia directa. Cómo hemos visto muchos de los mecanismos recorridos tienen un claro carácter deliberativo. El proyecto más maduro para llevar a cabo una votación es CONSUL.

Como ya se avanzaba anteriormente en Decidim no existe un elemento de votación en el primer nivel. este siempre pende de un proceso, dispuesto en una de sus fases.

Gobierto aún no ha implementado ningún proceso de votación.


### Legislación colaborativa

Las funcionalidades de legislación colaborativa se encuentran dispersas en varios componentes, o en distintos componentes dependiendo de cada software (aunque las tres plataformas están basadas en Ruby on Rails sus arquitecturas son distintas). Nos referimos en este criterio a aquellas funcionalidades relacionadas con la edición colaborativa de leyes, normativas o documentos formales.

{% asset 'posts/200129-consul_decidim_4.png' class='Outline Shadow caption' title="Proceso de legislación colaborativa mediante anotación" %}

Una de las mejoras de Decidim es la inclusión de enmiendas a las propuestas de textos. Es una funcionalidad avanzada y permite tener un seguimiento más claro y conciso de las modificaciones de los sucesivos borradores.

{% asset 'posts/200129-consul_decidim_5.png' class='Outline Shadow caption' title="Ejemplo de edicion colaborativa de documentos en Decidim con la funcionalidad de enmiendas y gestión de borradores" %}

Gobierto únicamente soporta la posibilidad de añadir comentarios a un documento.


### Otros mecanismos de participación

Para poder hacer una comparativa entre las tres plataformas nos hemos centrado en los mecanismo o funcionalidades más comunes. Pero hay otras funcionalidades adicionales a tener en cuenta.

Tanto Decidim como Gobierto implementan sendos sistemas para dar seguimiento a planes que pueden ser utilizados como mecanismos de rendición de cuentas. Es quizá Gobierto el producto más avanzado y el que más desarrollo ha llevado a cabo en esta línea.

Otro aspecto interesante son las asambleas. Igualmente podemos encontrar a Decidim y Gobierto con agendas y funcionalidades ideadas para facilitar este tipo de encuentros, siendo claramente Decidim más avanzado en este aspecto.

{% asset 'posts/190606-pam-esplugues-progreso.png' class='Outline Shadow caption' title="Ejemplo de rendicion de cuentas de Gobierto mediante la visión de conjunto, progreso total y específico de cada nivel en la <a href='https://portalobert.esplugues.cat/planes/pam/2018'>visualización del PAM de Esplugues de Llobregat</a> (gestionado con la herramienta de Gobierto)" %}

El único producto que puede llevar a cabo conferencia y jornadas es Decidim.


## Personalización de los procesos

La participación es entendida de muy distinta forma dependiendo de la organización o contexto de cada proceso. Por ese motivo es tan importante la capacidad de personalización de todo el ciclo de participación.

La facilidad a la hora de personalizar un proceso nos permite ajustar la plataforma a la manera de entender la participación por cada organización, sus tiempos y flujos. Obviamente siempre es necesaria cierta acomodación del funcionamiento de la organización al software pero cuanto más flexible sea éste a la hora de configurar un proceso más posibilidades tendremos a la hora de poner en marcha nuestro proceso y más exitoso será este.

Este es uno de los **aspectos más relevantes de Decidim**, su capacidad de personalizar el proceso de participación tanto en componentes como en fases. También es necesario destacar cómo la puesta en marcha de procesos de participación híbridos permite congeniar espacios presenciales con la comunidad digital activa en la plataforma.


### Adaptarse a distintos contextos y tipos de organizaciones

La adaptación al contexto de cada tipo de institución requiere entre otras cosas no estar diseñado únicamente para soportar procesos de participación de administraciones públicas, o también, no sólo de un tipo de administraciones públicas, como ayuntamientos.

Ya conocemos suficientes ejemplos de implementación para descubrir cómo es Decidim la plataforma con instalaciones más diversas desde el punto de vista del tipo de organización. Podemos encontrar municipios, diputaciones, universidades, asociaciones, cooperativas de consumo, entre algunos ejemplos, e incluso la propia comunidad que soporta el proyecto se organiza mediante una instancia de Decidim.


### Personalización del diseño

En muchas ocasiones las necesidades de una organización en cuanto a la presentaciòn visual del contenido son muy específicas. En estos casos se requiere, no una adaptación a la identidad corporativa (tipografías, colores, tamaños, etc.) de la organización en cuestión, sino además es necesario crear nuevas vistas adaptadas específicamente.

Existen grandes diferencias en las plataformas  analizadas. En términos generales **la arquitectura de Decidim es mucho más adaptable** y permite de una forma más sencilla generar un front-end distinto del estándar. Además en conjunto con la capacidad de multitenencia (del inglés multitenant) es posible con una sola instalación servir varias instancias de Decidim con aspectos y vistas totalmente distintos.

{% asset 'posts/200129-consul_decidim_6.png' class='Outline Shadow caption' title="Diseño basado en navegacion narrativa para la <a href="https://participa.uned.es/">UNED</a> desarrollado por Populate y basado en Decidim" %}


## Herramientas

Las plataformas de participación no se basan única y exclusivamente en funcionalidades relacionadas directamente con la participación. En la retrospectiva realizada para entender cuál es el estado del arte de cada producto nos hemos detenido también en aquellos componentes secundarios menos visibles pero en ocasiones tan importantes para mejorar las posibilidades de éxito de un proceso de participación.

Concretamente nos hemos detenido en comparar las siguientes herramientas:

- newsletter
- dashboard de propuestas
- backend de funcionarios
- espacio de comunidad

Según este criterio las diferencias son notables. En general, tal y como se mencionaba al principio de esta guía, están muy marcadas las diferencias a partir de cómo se ha gestado cada modelo de participación y también de cuál ha sido su evolución.

En CONSUL podemos encontrar algunas innovaciones muy interesantes. Entre ellas destaca el **dashboard de propuesta**, un componente pensado para mejorar la capacidad del proponente para involucrarse en la consecución de su objetivo: conseguir superar el umbral de las iniciativas ciudadanas.

En general encontramos algunas funcionalidades de comunidad en cada uno de los productos analizados. Sin embargo Decidim ofrece un conjunto de funcionalidades orientadas a funcionar realmente como comunidad, permitiendo incluso una serie de pequeños elementos de ludificación (sistema de insignias). Tanto es así que el propio proyecto usa una instancia de Decidim como plataforma de colaboración y comunidad llamada **[Metadecidim](https://meta.decidim.org)**.


## Integración con sistemas de información

Los procesos de participación requieren además de un sistema propio ideado específicamente para tal fin conectarse con otros sistemas para funcionar como un elemento más del ecosistema tecnológico de una organización.

No se entendería hoy en día levantar una plataforma de estas características aislada, fuera del entorno general de los demás sistemas del municipio u organización. La marcha hacia una administraciń electrónica hace además especial hincapié en mantener sistemas únicos de autenticación y firma para facilitar la vida al ciudadano. Por tanto estas plataformas de participación no pueden ser menos y deben poder integrarse en sistemas ya existentes, ya sea para la firma o cualquier otra necesidad.

Los tres proyectos han sido implementados en diferentes entornos integrando sus sistema de autenticación con el sistema Cl@ave, los certificados digitales de la FNMT o un punto de SSO (Single Sign On).


## Desarrollos ad hoc y evolución de la plataforma

Muchas organizaciones tienen capacidad y recursos para afrontar proyectos de desarrollo o integración, al menos en parte.

El hecho de ser plataformas de participación basadas en software libre garantiza además de la posibilidad de reutilización y mejora del software. Otro factor muy importante a tener en cuenta: la libertad de proveedor. Al tener nuestro desarrollo en algún repositorio público facilitaremos la labor de los posibles proveedores, se facilita la posibilidad de trabajar entre el equipo propio y otros de fuera, o permite licitar un proyecto en base a lotes.

No todas las mejoras o cambios introducidos en un proyecto de software son susceptibles de servir para cualquier contexto.  Sin embargo si es posible pensar esos desarrollos con la mínima abstracción necesaria para hacerlo trasladables a otros entornos.

El modelo de enorme extensión de CONSUL ha permitido establecer un conjunto de proyectos de participación basados en este software a lo largo de todo el planeta; con un gran avance en América Latina especialmente. En muchos casos encontraremos repositorios públicos con desarrollos específicos para cada entorno. Estos desarrollo en muchas ocasiones se han implementado mediante un código __ad hoc__ difícilmente trasladable al __core__ del proyecto. De esta forma algunas de las mejoras implementadas por todo esos nodos resultan poco útiles o indiferentes para la comunidad en general.

El proyecto Decidim a pesar de ser inicialmente impulsado por el Ayuntamiento de Barcelona ha conseguido consolidarse como una comunidad de software libre en la que encontramos un ecosistema de contribuidores de todo tipo como de empresas e instituciones que aportan desarrollos y mejoras.

Gobierto cuenta con un equipo de desarrollo que continuamente trabaja en el  proyecto, y el respaldo de una empresa consolidada y rentable como es **[Populate](https://populate.tools).**


## Out-of-the-box

Todas las plataformas de participación analizadas cuentan con una serie de aspectos básicos acordes con otros productos del mercado.

- localización
- multitenant
- accesibilidad
- API, open data

En cuanto a la localización, la posibilidad de llevar cada uno de estas plataformas a cualquier entorno, ya sea por idioma o cualquier otra de las características de localización, los tres proyectos analizados tienen esa funcionalidad integrada. Aún así, probablemente debido a su gran extensión, es CONSUL el software que a día de hoy tiene una mayor traslación a otros idiomas ([46](https://crowdin.com/project/consul) en total).

**El sistema multientidad de Gobierto destaca por formar parte del diseño original** de la plataforma con las ventajas en cuanto a la arquitectura y posterior desarrollo. En el caso de Decidim se optó por este cambio para dar cobertura a algunas necesidades; aunque no ha sido hasta hace poco que se han podido desambiguar algunas partes de la configuración entre sitios ([Allow customizing Oauth providers for each tenant](https://github.com/decidim/decidim/pull/5516)).

Todas las plataformas analizadas cumplen con las pautas de accesibilidad requeridas, o al menos están preparadas para ello. Es posible que algunos portales de participación no se ajusten a la norma [EN 301 549 V1.1.2 Requisitos de accesibilidad para productos y servicios TIC](https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2018/Octubre/Noticia-2018-10-05-Nueva-version-de-la-norma-EN-301-549.html#.XRSJQibtYgY) o deba hacerse una evaluación ex profeso para validar el grado de cumplimeinto.

{% asset 'posts/200129-consul_decidim_7.png' class='Outline Shadow caption' title="Mejoras de accesibilidad del proyecto Decidim" %}

El proyecto de API de CONSUL (llevado a cabo en su día por un compañero de Populate, el amigo [@amiedes](https://twitter.com/amiedes94) ;-) fue novedoso e innovador por cómo se implementó. Se trata de una API basada en [GraphQL](https://graphql.org/) que permite extraer todos los datos de la actividad de la plataforma para el estudio, análisis o alimentar aplicaciones de terceros.

Decidim también cuenta con una API GraphQL, la cual implementación además ha sido mejorada y ampliada mediante un proyecto financiado por la Generalitat de Catalunya, tal y como anuniaba Ismael Peña-López (Director Genral de Participación y Procesos Electorales) en [Twitter](https://twitter.com/ictlogist/status/1219287165483528199).


## Entonces, ¿cuál elijo?

Esta guía analiza los aspectos clave de cada plataforma y el nivel de madurez para facilitar la toma de decisión por parte del responsable de participación de una organización. 

A partir de aquí, consideramos que lo apropiado es analizar los requerimientos del proyecto de participación de la organización para ver como encajan con lo que ofrece cada herramienta. Este punto lo desarrollamos en un post anterior: [¿Cómo elegir una herramienta de participación ciudadana?](/blog/20170728-como-elegir-herramienta-participacion.html)


<div class="separator blue short"></div>

### Referencias

Esta retrospectiva se ha hecho a partir de la observación y el análisis de las tres plataformas mencionadas. Así mismo se ha tenido en cuenta la experiencia acumulada por el equipo de Populate en proyectos de participación ciudadana prestando servicios al Ayuntamiento de Madrid, Ajuntament de Barcelona, Diputación de Valladolid, Ayuntamiento de Alcobendas, entre otros.

Puedes encontrar otras entradas acerca del tema en el [blog de Gobierto](/blog/) y la [web de Populate](https://populate.tools/#projects):

- [¿Cómo elegir una herramienta de participación ciudadana?](/blog/20170728-como-elegir-herramienta-participacion.html)
- [Mejorando Consul, el software de participación creado por el Ayuntamiento de Madrid](/blog/20170419-mejoras-consul.html)
- [Panorama sobre los presupuestos participativos en España](/blog/20161212-presupuestos-participativos-a-examen.html)

Además se han tenido en cuenta otros recursos y comparativas anteriores, como son:

- [Comparativa Decidim vs. Cónsul](https://xabier.barandiaran.net/2019/01/14/comparativa-decidim-vs-consul/), de Xabier Barandiaran
- [Democracias futuras](https://archive.org/details/democraciasfuturasLICPD_201906/mode/2up) (publicación), ParticipaLab, VVAA
- [Democracias futuras](https://archive.org/details/DemocraciasFuturasVisiones/mode/2up) (libro), ParticipaLab, VVAA


